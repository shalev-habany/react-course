import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";

class ProductService {
    async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products;
    }

    async getProduct(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(`${appConfig.productsUrl}${id}`);
        const product = response.data;
        return product;
    }
}

export const productService = new ProductService();
