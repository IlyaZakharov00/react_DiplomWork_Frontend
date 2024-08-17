import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "./server";

export const fetchAboutItem: any = createAsyncThunk('fetchAboutItem',
    async (id: string) => {
        const response = await fetch(`${server}/api/items/${id}`);
        const data = await response.json();
        return data;
    }
);