export type Project = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    url: string;
    image: string;
    date: string;
    category: string;
    featured: boolean;
};

export type Post = {
    id: string;
    slug: string;
    title: string;
    body: string;
    excerpt: string;
    date: string;
    image: string;
}; 

export type StrapiResponse<T> = {
    data: T[]
};

export type StrapiProject = {
    id: string;
    documentId: string;
    title: string;
    category: string;
    description: string;
    image?: {
        url: string;
        formats?: {
            thumbnail? :  {url: string;};
            small? : {url: string;};
            medium? : {url: string; };
            large? : {url: string;};
        };
    };
    url: string;
    date: string;
    featured: boolean;
};

export type StrapiPost = {
    id: string;
    documentId: string;
    title: string;
    body: string;
    slug: string;
    excerpt: string;
    date: string;   
    image?: {
        url: string;
        formats?: {
            thumbnail? :  {url: string;};
            small? : {url: string;};
            medium? : {url: string; };
            large? : {url: string;};
        };
    };
};