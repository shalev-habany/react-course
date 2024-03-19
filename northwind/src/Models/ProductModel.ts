import { RegisterOptions } from "react-hook-form";

export class ProductModel {
    id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
    image: File;

    static nameValidation: RegisterOptions = {
        required: { value: true, message: "Missing name!" },
        minLength: { value: 2, message: "Name too short!" },
        maxLength: { value: 100, message: "Name too long!" },
    };

    static priceValidation: RegisterOptions = {
        required: { value: true, message: "Missing price!" },
        min: {value: 0, message: "Price cannot be negative"},
        max: {value: 1000, message: "Max price is 1000"},
    };

    static stockValidation: RegisterOptions = {
        required: { value: true, message: "Missing stock!" },
        min: {value: 0, message: "Stock cannot be negative"},
        max: {value: 1000, message: "Max stock is 1000"},
    };
}