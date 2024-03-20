import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel"
import { addEmployee, addProduct, deleteEmployee, deleteProduct, initEmployees, initProducts, updateProduct } from "./reducers";
import { logger } from "./middleware";
import { EmployeeModel } from "../Models/EmployeeModel";

export type AppState = {
    products: ProductModel[];
    employees: EmployeeModel[];
};

const productsSlice = createSlice({
    name: "products",
    reducers: {
        initProducts,
        addProduct,
        updateProduct,
        deleteProduct
    },
    initialState: null,
});

const employeesSlice = createSlice({
    name: "employees",
    reducers: {
        initEmployees,
        addEmployee,
        deleteEmployee,
    },
    initialState: null,
});

export const productsAction = productsSlice.actions;

export const employeesAction = employeesSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        products: productsSlice.reducer,
        employees: employeesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any,
});