export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    path: string;
}

export interface IArticle {
    description: string;
    pubDate: string;
    title: string;
    image_url: string;
}

export interface IContent {
    title: string;
    text: string;
    direction: "normal" | "reverse";
    src: string;
}