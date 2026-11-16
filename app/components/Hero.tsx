import { Link } from "react-router";

type HeroProps = {
    name?: string;
    text?: string;
};

const Hero: React.FC<HeroProps> = ({ name = '[Your Name]', text = 'Building friendly web solutions and helping others succeed. Let\'s build something amazing together!' }) => {
    return ( <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
        
        <h2 className="text-3xl mb-4">Hey, I'm {name} 👋</h2>
        <p className="text-lg mb-8">{text}
        </p>
        <div className="flex justify-center gap-4">
        <Link to="/projects" className="bg-blue-500 border-2 border-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-full">
            View Projects
        </Link>
        <Link to="/contact" className="border-2 border-blue-500 hover:bg-blue-700 hover:text-white duration-300 text-blue-300 font-bold py-2 px-4 rounded-r-full">
            Contact Me
        </Link>

        </div>
    </header>
  );
};
 
export default Hero; 