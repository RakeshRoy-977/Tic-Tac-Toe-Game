import React, { useState } from 'react'
import "./Game.css"

const Game = () => {

    const [index,setindex]=useState(Array(9).fill(""));
    const [move,setMove]=useState("X");

    function clicked(e){
        const squar = [...index]
        squar[e] = move
        setindex(squar)
        setMove(move === "X" ? "O" : "X")
        
    }

    function handelReset(){
        setindex(Array(9).fill(""));
    }

  return (
    <>
    <div className="Box">
        <div className="columns">
            <div onClick={(x)=>clicked(0)} className="row"><span>{index[0]}</span></div>
            <div onClick={(x)=>clicked(1)} className="row"><span>{index[1]}</span></div>
            <div onClick={(x)=>clicked(2)} className="row"><span>{index[2]}</span></div>
            
        </div>
        <div className="columns">
            <div onClick={(x)=>clicked(3)} className="row"><span>{index[3]}</span></div>
            <div onClick={(x)=>clicked(4)} className="row"><span>{index[4]}</span></div>
            <div onClick={(x)=>clicked(5)} className="row"><span>{index[5]}</span></div>
        </div>
        <div className="columns">
            <div onClick={(x)=>clicked(6)} className="row"><span>{index[6]}</span></div>
            <div onClick={(x)=>clicked(7)} className="row"><span>{index[7]}</span></div>
            <div onClick={(x)=>clicked(8)} className="row"><span>{index[8]}</span></div>
        </div> 
    </div>
    <div>
        <button onClick={handelReset}>Reset</button>
    </div>
    </>
  )
}

export default Game