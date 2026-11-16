import type { Route } from "./+types"

// export async function action({ request }: Route.ActionArgs) {
//     const formData = await request.formData();
//     const name = formData.get("name") as string;
//     const email = formData.get("email") as string;
//     const subject = formData.get("Subject") as string;
//     const message = formData.get("message") as string;

//     const errors: Record<string, string> = {};
//     if (!name) errors.name = "Name is required";
//     if (!email) {
//         errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email as string)) {
//         errors.email = "Email is invalid";
//     }
//     if (!subject) errors.subject = "Subject is required";
//     if (!message) errors.message = "Message is required";
//     if (Object.keys(errors).length > 0) {
//         return { errors };
//     }
//     const data = { 
//         name, 
//         email, 
//         subject, 
//         message 
//     };

//     // Handle form submission logic here (e.g., send an email, save to database)

//     return {message: 'Form submitted successfully', data};
// }
const ContactPage = ({actionData}: Route.ComponentProps) => {
   
    return ( 
    <div className="px-6 py-8 mt-12 bg-gray-900 max-w-3xl mx-auto">  
        <h2 className="text-3xl font-bold text-white mb-8 text-center"> 📞 Contact Me</h2>
       
        <form action='https://formspree.io/f/mrpqppwk'
        method="post" 
        className="space-y-6">
            <label 
            htmlFor="name" 
            className="block text-sm font-medium text-white">
                   Full Name
                </label>

                <input
                 type="text" 
                 id="name" 
                 name="name" className="mt-1 p-2 block
                text-sm py-2
                 w-full rounded-lg border-gray-700 shadow-sm border  focus:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
               
            <div>
                <label 
                htmlFor="email" className="block text-sm font-medium text-white">
                   Email Address
                </label>
                <input 
                type="email" 
                id="email" 
                name="email" className="mt-1 p-2 block
                text-sm py-2
                 w-full rounded-lg border-gray-700 shadow-sm border  focus:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
               
            </div>
            <div>
                <label 
                htmlFor="Subject" className="block text-sm font-medium text-white">
                   Subject
                </label>
                <input 
                type="text" 
                id="Subject" 
                name="Subject" className="mt-1 p-2  block
                text-sm py-2
                 w-full rounded-lg border-gray-700 shadow-sm border-2 focus:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
               
            </div>
            <div>
                <label 
                htmlFor="message" className="block text-sm font-medium text-white">
                   Message
                </label>
                <textarea 
                id="message" 
                name="message" className="mt-1 p-2 block
                text-sm py-2
                 w-full rounded-lg
                 border
                  border-gray-700  shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50" 
                  />
               
            </div>
            <button 
            type="submit" 
            className="px-4 w-full py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600">
                Send Message
            </button>
        </form>
        </div> );
}
 
export default ContactPage;