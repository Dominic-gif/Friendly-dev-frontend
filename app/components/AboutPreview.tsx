import { Link } from "react-router";

const AboutPreview = () => {
    return( <section className="mt-12 p-10 flex flex-col py-16 bg-gray-900 md:flex-row gap-8">
       <img src="/images/profile.jpg" alt=""
            className="w-40 h-40 border-4 border-gray-700 shadow-md rounded-full object-cover" />
            <div>
                <h2 className="text-2xl text-white font-bold mb-2">
                    👋 About Me
                </h2>
                <p className="text-gray-300 max-w-4xl leading-relaxed">
                    I'm Dominic Ankomah, a passionate developer who loves building web applications and exploring new technologies.
                </p>
                <Link to="/about" className="text-blue-500 hover:underline mt-4 inline-block text-sm">
                    Read more about me
                </Link>
            </div>
    </section> );
}

export default AboutPreview;