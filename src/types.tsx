export interface IProduct {
    id: string;
    name: string;
    description: string;
    category: string;
    path: string;
}

// export interface IArticle {
//     author: string;
//     description: string;
//     publishedAt: string;
//     title: string;
//     urlToImage: string;
// }

export interface IArticle {
    author: string;
    summary: string;
    published_date: string;
    title: string;
    media: string;
}

export interface IContent {
    title: string;
    text: string;
    direction: "normal" | "reverse";
    src: string;
}