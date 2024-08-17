import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "./server";

export const fetchBestSellers: any = createAsyncThunk('fetchBestSellers',
    async () => {
        const response = await fetch(`${server}/api/top-sales`);
        const data = await response.json();
        return data;
    }
);