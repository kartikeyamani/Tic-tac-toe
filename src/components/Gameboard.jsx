


export default function Gameboard({onSelectSquare,gameboard} ){
    // const[gameboard,setgameboard]=useState(initialBoard)
    // const handlegameboard=(rowIndex,colIndex,symbol)=>{
    //     setgameboard((prevgameboard)=>{
    //         const newgameboard=[...prevgameboard]
    //         newgameboard[rowIndex][colIndex]=symbol
    //         return newgameboard
    //     })
    //     onSelectSquare()
    // }
    
    return(
        <ol id="game-board">
            {gameboard.map((row,rowIndex)=>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>
                        <li key={colIndex}>
                            <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!=null}>{playerSymbol}</button>
                        </li>)}
                    </ol>
                </li>
            )}
        </ol>
    )
}