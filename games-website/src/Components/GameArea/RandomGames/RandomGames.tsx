import "./RandomGames.css";
import fifaImage from "../../../Assets/Images/fifa.jpg";
import nba2kImage from "../../../Assets/Images/nba2k24_cover.jpg";
import spiderman from "../../../Assets/Images/spiderman-ps5-console.jpg";
import { useEffect, useState } from "react";


export function RandomGames(): JSX.Element {
    const randomImages: string[] = [fifaImage, nba2kImage, spiderman];
    const [image, setImage] = useState<string>(nba2kImage);

    useEffect(() => {
        const timerId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * randomImages.length);
            setImage(randomImages[randomIndex]);
        }, 3000);

        return () => {
            clearInterval(timerId)
        };
    }, []);


    return (
        <div className="RandomGames">
            <img src={image} />
        </div>
    );
}
