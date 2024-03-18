import "./GameList.css";

export function GameList(): JSX.Element {

    const games: { id: number, name: string, price: number }[] = [
        { id: 1, name: "Chess", price: 30 },
        { id: 2, name: "Catan Universe", price: 40 },
        { id: 3, name: "Monopoly", price: 50 },
    ];

    return (
        <div className="GameList">
            <ul>
                {games.map(game => <li key={game.id}>{game.name} {game.price}$ </li>)}
            </ul>
        </div>
    );
}
