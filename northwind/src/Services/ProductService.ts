import axios, { AxiosRequestConfig } from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { notify } from "../Utils/Notify";
import { productsAction, store } from "../Storage/store";

class ProductService {
    async getAllProducts(): Promise<ProductModel[]> {
        if (store.getState().products) {
            return store.getState().products;
        }
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        store.dispatch(productsAction.initProducts(products));
        return products;
    }

    async getProduct(id: number): Promise<ProductModel> {
        let product = store.getState().products?.find(p => p.id === id);
        if (product) {
            return product
        }
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        product = response.data;
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
        store.dispatch(productsAction.addProduct(dbProduct));
        notify.success("Product has been added");
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
        store.dispatch(productsAction.updateProduct(dbProduct));
        console.log(dbProduct);
    }

    async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        store.dispatch(productsAction.deleteProduct(id));
        console.log(`${id} deleted...`);
    }
}

export const productService = new ProductService();
