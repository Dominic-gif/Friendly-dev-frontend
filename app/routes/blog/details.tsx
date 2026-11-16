import ReactMarkdown from "react-markdown"; 
import { Link } from "react-router";
import type { Route } from "./+types/details";
import type { Post, StrapiResponse, StrapiPost } from "~/types";

export async function loader({ request, params }: Route.LoaderArgs) {
    const { slug } = params;

    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?populate=image&filters[slug][$eq]=${slug}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    
    const json: StrapiResponse<StrapiPost> = await res.json();
    

    if (!json.data || !json.data.length) 
        throw new Response('Post not found', {status: 404});

    const item = json.data[0];
    
    const post = {
        id: item.id,
        slug: item.slug,
        title: item.title,
        date: item.date,
        excerpt: item.excerpt,
        body: item.body,
        image: item.image?.url ? item.image.url : "/images/no-image.png"
    }
 
    return {post};
  }

 type BlogPostDetailsPageProps = {
    loaderData: {
        post: Post;  
    };
};

const BlogDetails = ({ loaderData }: BlogPostDetailsPageProps) => {
    const { post } = loaderData; 
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
            <h1 className="text-3xl text-blue-400 font-bold mb-4">{post.title}
            </h1>

            <p className="text-sm text-gray-300 mb-6">{new Date(post.date).toDateString()}
            </p>
            <img src={post.image} alt={post.title} className="w-full mb-6 h-64 rounded-lg object-cover" />
            <div className="prose prose-invert max-w-none mb-12">
                <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
            <Link to="/blog" className="bg-blue-600 text-white px-6 py-2 inline-block rounded-lg hover:bg-blue-800 transition-colors duration-300">
             ← Back to Posts
             </Link>
        </div>
    );
};

export default BlogDetails;