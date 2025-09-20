import React from 'react'
import {useState, useEffect} from "react"
const Text2 = () => {

    const [text, setText] = useState("")

    const handleText = (e) => {
        // console.log(e.target.value);
        setText(e.target.value)
    }

    useEffect(() => {
      console.log("componente montado");

      return ()=>{
        console.log("se desmonta");
      }
    },[])
    

  return (
    <div>
        <input type="text" onChange={handleText} />
        <h2>{text}</h2>
    </div>
  )
}

export default Text2