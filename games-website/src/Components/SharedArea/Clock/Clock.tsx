import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock(): JSX.Element {

    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        }, 1000);


        // return a function which will be invoked when component destroyed (Unmount)
        return () => {
            clearInterval(timerId);
        }
    }, []) // [] --> dependencies

    return (
        <div className="Clock">
            <span>{time}</span>
        </div>
    );
}
