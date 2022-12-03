import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import likeReducer from "./likeReducer";
import productsReducer from "./productsReducer";
 
 
 
export const store = configureStore ({
    reducer:{
        productsLikeState:likeReducer,
        productsInCart: cartReducer,
        products: productsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch