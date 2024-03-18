import "./Home.css";
import pizzaImage from "../../../assets/images/pizza.jpg"

export function Home(): JSX.Element {
    return (
        <div className="Home">
			<img src={pizzaImage}></img>
        </div>
    );
}
