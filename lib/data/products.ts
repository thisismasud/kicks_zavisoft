import { siteConfig } from "../config/site-config";

export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        slug: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
    images: string[];
    creationAt: string;
    updatedAt: string;
};

export async function getProducts(): Promise<Product[]> {
    const products = await fetch(`${siteConfig.api.products}?offset=0&limit=4`, {next: { revalidate: 60 }});
    return await products.json()
}