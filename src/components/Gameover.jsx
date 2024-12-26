export default function Gameover({winner,hasdraw,handlerematch}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {!hasdraw&&<p>Winner is {winner}</p>}
            {hasdraw&&<p>Match is drawn</p>}
            <p><button onClick={handlerematch}>Rematch</button></p>
        </div>
    )
}