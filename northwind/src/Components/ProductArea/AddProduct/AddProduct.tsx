import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import "./AddProduct.css";
import { useTitle } from "../../../Utils/UseTitle";


export function AddProduct(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<ProductModel>();
    const navigate = useNavigate();
    useTitle('Add Product');

    async function send(product: ProductModel): Promise<void> {
        product.image = (product.image as unknown as FileList)[0];
        try {
            await productService.addProduct(product);
        } catch (error: any) {
            notify.error(error);
            return;
        }
        navigate('/products');
    }


    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)} />
                <span className="error">{formState.errors?.name?.message}</span>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price", ProductModel.priceValidation)} />
                <span className="error">{formState.errors?.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span className="error">{formState.errors?.stock?.message}</span>

                <label>Image: </label>
                <input type="file" {...register("image")} />
                <span className="error">{formState.errors?.image?.message}</span>

                <button>Add</button>

            </form>
        </div>
    );
}
