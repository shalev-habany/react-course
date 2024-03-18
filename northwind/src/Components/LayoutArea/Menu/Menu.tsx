import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<a href="/Home">Home</a>
			<a href="/Products">Products</a>
			<a href="/About">About</a>
        </div>
    );
}
