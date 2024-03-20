import { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";

// Init all products
export function initProducts(currentState: ProductModel[], action: PayloadAction<ProductModel[]>): ProductModel[] {
    return action.payload;
}

export function addProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    return [...currentState, action.payload];
}

export function updateProduct(currentState: ProductModel[], action: PayloadAction<ProductModel>): ProductModel[] {
    return currentState.map(p => p.id === action.payload.id ? action.payload : p);
}

export function deleteProduct(currentState: ProductModel[], action: PayloadAction<number>): ProductModel[] {
    return currentState.filter(p => p.id !== action.payload);
}