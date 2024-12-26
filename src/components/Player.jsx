import {useState} from 'react'


export default function Player({initialname,symbol,activePlayer,onChangeName}){
    const [playerName,setplayerName] =useState(initialname)
    const [isEdidting,setisEditing]=useState(false)
    const handleEdit=()=>{
        setisEditing((editing)=>!editing)
        if(isEdidting){
            onChangeName(symbol,playerName)
        }
    }
    const handleplayername=(event)=>{
        setplayerName(event.target.value)
    }
    return(
        <li className={activePlayer===symbol?'active':undefined}>
            <span className="player">
            {isEdidting?<input type="text" required value={playerName} onChange={handleplayername}></input>:<span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEdidting?'Save':'Edit'}</button>
        </li>
    )
}