import type { Route } from "./+types/details";
import type { Project, StrapiResponse, StrapiProject } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";


export async function loader({ 
    request, 
    params,
 }: Route.LoaderArgs) {

 const { id } = params;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?filters[documentId][$eq]=${id}&populate=*`);
    
    if (!res.ok) {
        throw new Response('Failed to fetch project', { status: 404 });
    }

    const json: StrapiResponse<StrapiProject> = await res.json();
    const item = json.data[0];
   
    const project: Project = {
        id: item.id,
       documentId: item.documentId,
       title: item.title,
       category: item.category,
       description: item.description,
       image: item.image?.url ? item.image.url : '/images/no-image.png',
       url: item.url,
       date: item.date,
       featured: item.featured
    }
    
    return {project};
}


const ProjectDetailsPage = ({ loaderData}: Route.ComponentProps) => {
    const { project } = loaderData;
   
    return (
        <>
            <Link to="/projects" className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition" >
                <FaArrowLeft className="mr-2 " /> Back to Projects
                
            </Link>
            <div className="grid gap-8 md:grid-cols-2 items-start">
                <div>
               <img 
               src={project.image} 
               alt={project.title} 
               className="w-full rounded-lg shadow-md h-auto" />                
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-blue-400 mb-4"> 
                    {project.title}
                  </h1>
                  <p className="text-gray-350 text-sm mb-4">{new Date(project.date).toLocaleDateString()} . {project.category}</p>
                  <p className="text-gray-200 mb-6">{project.description}</p>
                  <a href={project.url} target="_blank" className="text-white inline-block bg-blue-400 hover:bg-blue-500 px-6 py-2 rounded transition">
                    View Project →
                  </a>
                </div>
        </div>
    </>);
};
 
export default ProjectDetailsPage;