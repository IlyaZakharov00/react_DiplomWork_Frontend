import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "./server";

export const fetchCatalogItemsMore: any = createAsyncThunk('fetchCatalogItemsMore',
    async (id: string) => {
        let response;
        id === 'all' ? response = await fetch(`${server}/api/items?offset=6`) :
            response = await fetch(`${server}/api/items?categoryId=${id}&offset=6`);
        const data = await response.json();
        return data;
    }
);