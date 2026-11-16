import { useState } from "react";
import type { Route } from "./+types/index";
import type { Project, StrapiResponse, StrapiProject } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import Pagination from "~/components/Pagination";
import {AnimatePresence, motion} from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Projects" },
    { name: "description", content: "My website projects portfolio" },
  ];
}
             
export async function loader({ request } : Route.LoaderArgs): Promise<{ projects: Project[] }> {
    // Fetch projects data here
    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
    const json: StrapiResponse<StrapiProject> = await res.json();

   const projects = json.data.map((item) =>({
       id: item.id,
       documentId: item.documentId,
       title: item.title,
       category: item.category,
       description: item.description,
       image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
       url: item.url,
       date: item.date,
       featured: item.featured
   }))

    return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const [currentPage, setCurrentPage] = useState(1);
    const { projects } = loaderData as { projects: Project[]; };

    // Get Unique categories
    const categories = ['All', ...new Set(projects.map(project => project.category))];
    // Filter projects by selected category
    const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory);

    const projectsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage); 
    // Get current page projects
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

    

    return ( <>
        <h2 className="text-3xl font-bold text-white mb-8 text-center"> 🚀 Projects</h2>
        <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-3 py-1 cursor-pointer rounded text-sm ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
        <AnimatePresence mode='wait'>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map(project => (
                <motion.div layout key={project.id}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>
        </AnimatePresence>
        <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
        {/* {totalPages > 1 && renderPagination()} */}
        </> );
}
 
export default ProjectsPage;