export type InitState = TState[]

export type TBestSellersItem = {
  id: number ;
  category: number;
  title: string;
  price: number;
  images: string[]
}

type TState = {
  bestSellers: TBestSellersItem[];
  catalogCategories: any;
  catalogItems: any;
}