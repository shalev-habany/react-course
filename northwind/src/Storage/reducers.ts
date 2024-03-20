import { PayloadAction } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import { EmployeeModel } from "../Models/EmployeeModel";

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

export function initEmployees(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>): EmployeeModel[] {
    return action.payload;
}

export function addEmployee(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel>): EmployeeModel[] {
    return [...currentState, action.payload];
}

export function deleteEmployee(currentState:EmployeeModel[], action: PayloadAction<number>): EmployeeModel[] {
    return currentState.filter(p => p.id !== action.payload);
}