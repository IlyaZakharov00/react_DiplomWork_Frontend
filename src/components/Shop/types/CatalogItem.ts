export type TCatalogItem = {
    id: number;
    category:string;
    title: string;
    price: number;
    images: [];
}

export type TCatalogProps = {
    item: {
        id: number;
        category:string;
        title: string;
        price: number;
        images: string[];
    }
}