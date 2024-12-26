import {  useState } from "react"
import Gameboard from "./components/Gameboard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combination"
import Gameover from "./components/Gameover"
const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null],
]


function App() {
  //const [activePlayer,setactivePlayer]=useState('X')
  const [gameturn,setgameturn]=useState([])
const gameboard=[...initialBoard.map(array=>[...array])]
const [playersNames,setplayersNames]=useState({
  'X':'Player1',
  'O':'Player2'
})
const handleplayersNames=(symbol,newName)=>{
    setplayersNames(prevNames=>{
      return{
        ...prevNames,
        [symbol]:newName
      }
    }
      
    )
}
let winner=undefined
    for(const turn of gameturn)
    {
        const {square,player}=turn
        const {row,col}=square

        gameboard[row][col]=player
    }
  for(const combination of WINNING_COMBINATIONS)
  {
    const firstsquaresymbol=gameboard[combination[0].row][combination[0].column]
    const secondsquaresymbol=gameboard[combination[1].row][combination[1].column]
    const thirdsquaresymbol=gameboard[combination[2].row][combination[2].column]
    if(firstsquaresymbol&&firstsquaresymbol===secondsquaresymbol&&firstsquaresymbol===thirdsquaresymbol)
    {
      winner=playersNames[firstsquaresymbol]
    }
  }
  const handlegameplayer=(gameturn)=>{
    let updatedplayer='X'
  if(gameturn.length>0)
  {
    updatedplayer=gameturn[0].player==='X'?'O':'X'
  }
  return updatedplayer
  }
  const activeplayer=handlegameplayer(gameturn)
  const handleselectsquare=(rowIndex,colIndex)=>{
      //setactivePlayer((prevactiveplayer)=>prevactiveplayer==='X'?'O':'X')
      setgameturn(prevturn=>{
        let updatedplayer=handlegameplayer(prevturn)
        const updatedturn=[{square:{row:rowIndex,col:colIndex},player:updatedplayer},...prevturn]
        return updatedturn
      }
      )
      
  }
  const hasdraw=gameturn.length===9&&!winner
  const handlerematch=()=>{
    setgameturn([])
  }
  return (
     <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialname="Player1" symbol="X" activePlayer={activeplayer} onChangeName={handleplayersNames}/>
          <Player initialname="Player2" symbol="O" activePlayer={activeplayer} onChangeName={handleplayersNames}/>
        </ol>
        {(winner||hasdraw)&&<Gameover winner={winner} hasdraw={hasdraw} handlerematch={handlerematch}/>}
        <Gameboard onSelectSquare={handleselectsquare} gameboard={gameboard}/>
      </div>
      <Log turns={gameturn}/>
     </main>
  )
}

export default App
