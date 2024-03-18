import { SyntheticEvent, useState } from "react";
import "./BestSeller.css";

export function BestSeller(): JSX.Element {

    const [bestSeller, setBestSeller] = useState<string>();

    function show(): void {
        /**
         * 1. Change Data.
         * 2. Rerender the component.
         */
        setBestSeller("Amazing Games LTD"); // Get from backend
    }

    function showEmoji(args: SyntheticEvent) {
        const button = args.target as HTMLButtonElement;
        console.log(button.innerText);
    }

    function showIcon(icon: string) {
        alert(icon);
    }

    return (
        <div className="BestSeller">
            <button onClick={show} className="button">Show Best Seller </button>
            <span> {bestSeller} </span>
            <button onClick={showEmoji} className="button">🎱 </button>
            <button onClick={showEmoji} className="button">🎯 </button>
            <button onClick={showEmoji} className="button">🎳 </button>
            <button onClick={() => {showIcon("⚽")}} className="button">⚽</button>
            <button onClick={() => {showIcon("🏀")}} className="button">🏀</button>
        </div>
    );
}
