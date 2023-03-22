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
        const res = await axios.get("https://run.mocky.io/v3/7db41021-bc7b-4d03-98d4-96c6b718daff")
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