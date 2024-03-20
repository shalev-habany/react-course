import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { EmployeesList } from "../../EmployeesArea/EmployeesList/EmployeesList";
import { EmployeeDetails } from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import { AddEmployee } from "../../EmployeesArea/AddEmployee/AddEmployee";

export function Routing(): JSX.Element {

    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));
    const suspenseAbout = <Suspense fallback={<Spinner />}><LazyAbout /></Suspense>

    return (
        <div className="Routing">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:id" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
                <Route path="/employees" element={<EmployeesList />} />
                <Route path="/employees/details/:id" element={<EmployeeDetails />} />
                <Route path="/employees/new" element={<AddEmployee />} />
                <Route path="/about" element={suspenseAbout} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
