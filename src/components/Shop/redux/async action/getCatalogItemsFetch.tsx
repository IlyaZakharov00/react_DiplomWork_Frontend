import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "./server";

export const fetchCatalogItems: any = createAsyncThunk('fetchCatalogItems',
    async (id: string) => {
        let response;
        if (id === 'all' || id === undefined) {
            response = await fetch(`${server}/api/items`)
        } else {
            response = await fetch(`${server}/api/items?categoryId=${id}`);
        }
        const data = await response.json();
        return data;
    }
);