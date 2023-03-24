import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Product = {
    id: number
    name: string
    description: string
    type: string
    size: number
    price: number
    image: string
}

export const initialState:Product[] = []

export const fetchProducts = createAsyncThunk<Product[],undefined>(
    'products/fetchProducts',
    async () => {
        const res = await axios.get("https://run.mocky.io/v3/48082aa7-93c5-4216-acf9-68d9da064bc0")
        console.log(res.data)
        return res.data.products
    }
)

export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            return state = action.payload
        })
    }
})

export default productsSlice.reducer