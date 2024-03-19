import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { NavLink } from "react-router-dom";

export function ProductDetails(): JSX.Element {

    const params = useParams();
    const id = +params.id

    const [details, setDetails] = useState<ProductModel>({} as ProductModel);
    const navigator = useNavigate();

    async function deleteMe() {
        const sure = window.confirm("Are you sure?");
        if (!sure) return;
        await productService.deleteProduct(id);
        navigator('/products');
    }

    useEffect(() => {
        productService.getProduct(id)
            .then((productDetails: ProductModel) => setDetails(productDetails));
    }, []);

    return (
        <div className="ProductDetails">
            <h3>Name: {details?.name} </h3>
            <h3>Price: {details?.price} </h3>
            <h3>Stock: {details?.stock} </h3>
            <img src={details?.imageUrl} />
            <br />

            <NavLink to="/products">Back </NavLink>

            <span> | </span>

            <NavLink to={"/products/edit/" + details?.id}>Edit</NavLink>
            
            <span> | </span>

            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>

        </div>
    );
}
