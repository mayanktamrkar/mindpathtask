import React ,{ useState,useCallback}from 'react'
import Button from './Button'
import Input from './Input'
import './UseCallback.css'

const UseCallback = () => {

    const [data ,setData]=useState("")
    const [buttondata,setButtondata]=useState("")
    const [toggles,setToggle]=useState(true)

    const getdata=useCallback((v)=>{
      setData(v)
    },[data])

    const buttonhandler=useCallback((v)=>{
      setButtondata(v)
    },[buttondata])

  
  return (

    <div className='callback-container'>
      <Button onClick ={buttonhandler} name={"button-component"}/>
      <Input fun={getdata} />
      <button onClick={()=>{toggles===true?setToggle(false):setToggle(true)
      console.log(toggles)}}>click</button>
    </div>
  )
}

export default UseCallback;