import axios, { AxiosRequestConfig } from "axios";
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

    async addProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        console.log(dbProduct);
    }

    async updateProduct(product: ProductModel): Promise<void> {
        const options: AxiosRequestConfig = {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;
        console.log(dbProduct);
    }

    async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        console.log(`${id} deleted...`);
    }
}

export const productService = new ProductService();
