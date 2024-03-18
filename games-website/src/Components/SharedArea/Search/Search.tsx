import { SyntheticEvent, useState } from "react";
import "./Search.css";

export function Search(): JSX.Element {

    // State for text input
    const [text, setText] = useState<string>("");

    // function for the onChange event:
    function handleChange(args: SyntheticEvent) {
        const text = (args.target as HTMLInputElement).value;
        setText(text);
    }

    function searchInWebsite() {
        alert(`Searching for ${text}`);
        setText("");
    }

    return (
        <div className="Search">
            <span>Search: </span>
            {/* two way binding */}
            <input type="search" onChange={handleChange} value={text} style={{color: text}}/>
            <button onClick={searchInWebsite}>🔍</button>
        </div>
    );
}
