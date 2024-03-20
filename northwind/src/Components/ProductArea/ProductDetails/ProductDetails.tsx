import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { NavLink } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function ProductDetails(): JSX.Element {

    const params = useParams();
    const id = +params.id

    const [product, setProduct] = useState<ProductModel>();
    const navigator = useNavigate();
    useTitle('Product Page');

    async function deleteMe() {
        const sure = window.confirm("Are you sure?");
        if (!sure) return;
        try {
            await productService.deleteProduct(id);
        } catch (error) {
            notify.error(error);
            return;
        }
        notify.success("deleted");
        navigator('/products');
    }

    useEffect(() => {
        productService.getProduct(id)
            .then((product: ProductModel) => setProduct(product))
            .catch((error) => {
                notify.error(error);
                navigator('/products');
            });
    }, []);

    return (
        <div className="ProductDetails">
            {!product && <Spinner />}

            <h3>Name: {product?.name} </h3>
            <h3>Price: {product?.price} </h3>
            <h3>Stock: {product?.stock} </h3>
            <img src={product?.imageUrl} />
            <br />

            <NavLink to="/products">Back </NavLink>

            <span> | </span>

            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>

            <span> | </span>

            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>

        </div>
    );
}
