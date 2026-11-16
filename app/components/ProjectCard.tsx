import { Link } from "react-router";
import type { Project } from "~/types";

const ProjectCard = ({ project } : { project: Project }) => 
{
    return ( <Link className="block transform transition duration-300 hover:scale-[1.02]" to={`/projects/${project.documentId}`}>

        <div key={project.id} className="bg-gray-800 p-4 rounded-lg overflow-hidden shadow-sm transition duration-300 hover:shadow-lg">
            <img
             src={project.image}
             alt={project.title} 
             className="w-full h-40 object-cover rounded" 
             />

            <div className="p-5">
                <h3 className="text-3xl font-semibold text-blue-500 mb-1">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                    <span>{project.category}</span>
                    <span>{new Date(project.date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    </Link> );
}

export default ProjectCard;