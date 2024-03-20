import { NavLink, Route } from "react-router-dom";
import "./Menu.css";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="products/new">Add Product</NavLink>
            <NavLink to="employees" end>Employees</NavLink>
            <NavLink to="employees/new">Add Employee</NavLink>
            <NavLink to="/about">About</NavLink>

            <TotalProducts />
        </div>
    );
}
