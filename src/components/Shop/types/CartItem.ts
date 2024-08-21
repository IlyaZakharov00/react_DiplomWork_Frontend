export type TCartItem = {
    countProducts: number;
    price: number;
    selectedSize: string;
    title: string;
}

export type TCartProps = {
    item: {
        countProducts: number;
        price: number;
        selectedSize: string;
        title: string;
        id?: number;
    },

    indexProduct: number,
}