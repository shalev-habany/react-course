import { useTitle } from "../../../Utils/UseTitle";
import "./Page404.css";

export function Page404(): JSX.Element {

    useTitle('Page Not Found');

    return (
        <div className="Page404">
			<p>The page you are looking for does not exist</p>
        </div>
    );
}
