export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    path:  "prod1" | "prod2" | "prod3" | "prod4" | "prod5" | "prod6";
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