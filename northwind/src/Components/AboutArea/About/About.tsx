import { useTitle } from "../../../Utils/UseTitle";
import { Tune } from "../Tune/Tune";
import "./About.css";

export default function About(): JSX.Element {

    useTitle('About Us');
    
    return (
        <div className="About">
			<Tune />
        </div>
    );
}
