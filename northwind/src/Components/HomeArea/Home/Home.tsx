import "./Home.css";
import pizzaImage from "../../../assets/images/pizza.jpg"
import { useEffect } from "react";
import { useTitle } from "../../../Utils/UseTitle";

export function Home(): JSX.Element {
    
    useTitle('Home');

    return (
        <div className="Home">
			<img src={pizzaImage}></img>
        </div>
    );
}
