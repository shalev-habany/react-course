import { Dispatch, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { AppState } from "./store";


export const logger = (store: ReturnType<typeof configureStore<AppState>>) => (next: Dispatch) => (action: PayloadAction) => {
    const result = next(action);
    console.log("Somthing changed, Action: " ,action);
    return result;
}