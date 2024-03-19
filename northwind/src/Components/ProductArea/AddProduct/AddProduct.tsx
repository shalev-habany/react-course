import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { useNavigate } from "react-router-dom";


export function AddProduct(): JSX.Element {

    const { register, handleSubmit } = useForm<ProductModel>();
    const navigate = useNavigate();

    async function send(product: ProductModel): Promise<void> {
        product.image = (product.image as unknown as FileList)[0];
        await productService.addProduct(product);
        console.log(product.image);
        navigate('/products');
    }


    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} />

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} />

                <label>Stock: </label>
                <input type="number" {...register("stock")} />

                <label>Image: </label>
                <input type="file" {...register("image")} />

                <button>Add</button>

            </form>
        </div>
    );
}
