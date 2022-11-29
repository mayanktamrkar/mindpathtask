import React,{useCallback, useState} from 'react'
import classes from  './Input.module.css'

const Input = (props) => {
    const [data,setData]=useState('')
    const changehandler=(e)=>{
      setData(e.target.value)
      console.log("input component")
      props.fun({value:e.target.value,name:e.target.name})

  }
  return (
    <div>
        <input onChange={changehandler} className={classes.input} {...props.input}/>
    </div>
  )
}

export default Input