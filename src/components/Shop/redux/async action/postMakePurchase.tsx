import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "./server";

export const fetchMakePurchase: any = createAsyncThunk('fetchMakePurchase',
    async (data) => {

        const response = await fetch(`${server}/api/order`, {
            method: "POST",
            mode: 'no-cors',
            cache: "no-cache",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        return response;
    }
);
