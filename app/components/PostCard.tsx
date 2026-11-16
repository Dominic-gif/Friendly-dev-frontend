import type { Post } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: {post: Post}) => {
    return ( 
        <article key={post.slug} className="bg-gray-700 p-6 rounded-lg shadow mb-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{ new Date(post.date).toDateString() }</p>
                {post.image && <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />}
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-blue-400 text-sm hover:underline">Read more → </Link>
            </article>
    );
}

export default PostCard;