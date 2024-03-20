import { useEffect, useState } from "react";
import "./ProductList.css";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function ProductList(): JSX.Element {

    useTitle("Our Products");

    const [products, setProducts] = useState<ProductModel[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        productService.getAllProducts()
            .then((dbProducts: ProductModel[]) => setProducts(dbProducts))
            .catch((error) => {
                notify.error(error);
                navigate('/home');
            });
    }, []);

    return (
        <div className="ProductList">
            {!products.length && <Spinner />}

            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}
