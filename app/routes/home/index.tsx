import type { Route } from "./+types/index";
import type { Project, StrapiResponse, StrapiProject, StrapiPost } from "~/types";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";
import LatestPosts from "~/components/LatestPosts";
import type { Post } from "~/types";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | welcome" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ request }: Route.LoaderArgs): Promise<{projects:Project[]; posts: Post[] }> {
const url = new URL(request.url);

const [projectRes, postRes] = await Promise.all([

  fetch(
    `${import.meta.env.VITE_API_URL}/projects?filters[featured][$eq]=true&populate=*`),
  fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`)
]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch data or posts');
  }


  const projectsJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postsJson: StrapiResponse<StrapiPost> = await postRes.json();
  
  const projects = projectsJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    category: item.category,
    description: item.description,
    image: item.image?.url ? item.image.url : '/images/no-image.png',
    url: item.url,
    date: item.date,
    featured: item.featured
  }));

  const posts = postsJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: item.body,
    date: item.date,
    image: item.image?.url ? item.image.url : '/images/no-image.png',
  }));

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  return (
  <>
   
    
    <FeaturedProjects projects={projects} count={projects.length} />
    <AboutPreview />
    <LatestPosts posts={posts} limit={6} />
  </>);
};
export default HomePage;
