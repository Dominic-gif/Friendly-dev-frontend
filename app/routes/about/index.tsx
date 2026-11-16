const AboutPage = () => {
    return ( 
       <div className="px-6 py-16 bg-gray-900 max-w-5xl mx-auto">
         {/* intro */}
         <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
         
         <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hello, World! 👋
        </h1>
        <p className="text-gray-300">I'm Dominic Ankomah, a passionate developer who loves building web applications and exploring new technologies.
         </p>
        </div>
      </div>
      {/* Bio Section */}
      <div className="flex flex-col gap-4  mb-12">
         <h1 className="text-2xl text-white font-semibold font-sans">My Mission</h1>
        <p className="text-gray-300 leading-relaxed">
          I have been developing web applications for several years, focusing on creating efficient and user-friendly experiences.
        </p>
        <p className="text-gray-300 leading-relaxed">
          My expertise includes JavaScript, React, and Node.js, and I am always eager to learn new technologies and improve my skills.
        </p>
        {/* Tech Stack */}
        <h2 className="text-2xl text-white font-semibold font-sans mb-4">
          🚀 My Tech Stack
        </h2>
        <ul className="text-gray-300 flex flex-wrap gap-4 list-disc list-inside">
         {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "Express.js",
            "MongoDB",
            "GraphQL",
            "Docker",
            "Python",
            "Django",
            "Flask",
            "SQL",
            "PostgreSQL",
            "MySQL",
            "Redis",
            "Firebase",
            "AWS",
            "Azure",
            "GCP",
         ].map((tech) => (
            <li key={tech} className="mb-1 bg-gray-700 text-gray-200 px-3 py-1 rounded-md">{tech}</li>
         ))}
          
        </ul>
      </div>
    </div>
   );
};

export default AboutPage;