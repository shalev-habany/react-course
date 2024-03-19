import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import "./EditProduct.css";
import { useTitle } from "../../../Utils/UseTitle";

export function EditProduct(): JSX.Element {

    const { register, handleSubmit, formState, setValue, watch } = useForm<ProductModel>();
    const navigate = useNavigate();
    const props = useParams();
    const id = +props.id;
    useTitle('Edit Product');

    useEffect(() => {
        productService.getProduct(id)
            .then((dbProduct: ProductModel) => {
                setValue("name", dbProduct.name);
                setValue("price", dbProduct.price);
                setValue("stock", dbProduct.stock);
                setValue("imageUrl", dbProduct.imageUrl);
            })
            .catch(error => notify.error(error));
    }, []);

    async function send(product: ProductModel): Promise<void> {
        product.id = id;
        product.image = (product.image as unknown as FileList)[0];
        try {
            await productService.updateProduct(product);
        } catch (error) {
            notify.error(error);
            return;
        }
        notify.success("product had been updated");
        navigate('/products');
    }

    return (
        <div className="EditProduct">
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
                <img src={watch("imageUrl")} />

                <button>Edit</button>

            </form>
        </div>
    );
}
