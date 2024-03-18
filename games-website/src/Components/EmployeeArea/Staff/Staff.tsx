import "./Staff.css";

export function Staff(): JSX.Element {
    const now = new Date();
    const day = now.getDay() + 1;

    return (
        <div className="Staff">
            {day === 1 && <p>Now, on Sunday - Help Desk Support</p>}
            {day !== 1 && <p>We don't have Helpdesk Support today</p>}
        </div>
    );
}
