import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "./server";

export const fetchCatalogCategories: any = createAsyncThunk('fetchCatalogCategories',
    async () => {
        const response = await fetch(`${server}/api/categories`);
        const data = await response.json();
        return data;
    }
);