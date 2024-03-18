import "./Spinner.css";
import loadingGif from "../../../assets/images/loading.gif"

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={loadingGif} />
        </div>
    );
}
