import "./GameCard.css";
import imageSrc from "../../../Assets/Images/nba2k24_cover.jpg"

export function GameCard(): JSX.Element {

    const discount = 20; // Backend demo.

    return (
        <div className="GameCard">
            <p>Amazing Discount!</p>
            <span>{discount}% on all games!</span>
            <br />
            <img src={imageSrc} />
        </div>
    );
}