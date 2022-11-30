import React from 'react'
import './Button.css'

const Button = (props) => {
   
    console.log("button");
  
  return (
    <button onClick={()=>{props.onClick("clicked")}}>{props.name}</button>
  )
}

export default React.memo(Button);