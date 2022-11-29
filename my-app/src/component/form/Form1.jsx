import React, { useState } from 'react'
// import styles from '../table/Table.module.css'
import  styles from './Form.module.css'
const Form = (p) => {
    const [data,setData]=useState({name:'',age:'',address:''})
    const [isname,setname]=useState(true)
    const [isage,setage]=useState(true)
    const [isaddress,setaddress]=useState(true)
    let isvalid=(p)=>{
        if(p.trim().length!==0){
            return true
        }
        }
    let addname =(e)=>{
        setData({...data,name:e.target.value})
        if(isvalid(e.target.value)){
           
            setname(true)
            // console.log(isname)
        }else{
            setname(false)
        }   
    }
    let addage =(e)=>{
        setData({...data,age:e.target.value})
        if(isvalid(e.target.value)){
           
            setage(true)
        }else{
            setage(false)
        }
    }
    let addaddress =(e)=>{
        setData({...data,address:e.target.value})
        if(isvalid(e.target.value)){
            
            setaddress(true)
        }else{
            setaddress(false)
        }
    }
    let submitform=(e)=>{
        e.preventDefault()
        if(data.name.trim().length==0){
            console.log("working name")
            setname(false)
        }
        console.log("check",isname)
        if(data.age.trim().length==0){
            console.log("working age")
            setage(false)
        }
        if(data.address.trim().length==0){
            console.log("working address")
             setaddress(false)
        }
        if(data.name.trim().length!==0 && data.age.trim().length!==0 && data.address.trim().length!==0 ){
            p.fun(data)
            setData((p)=>{
                return {...p,name:'',age:'',address:''}
             })
             setname(true)
             setage(true)
             setaddress(true)
        }
        console.log(isname,isage,isaddress)
        console.log(data)
        // setIs({isname:false,isage:false,isaddress:false})
    }
    let addfilter=(e)=>{
        p.setyear(e.target.value)
    }
    //
  return (
    <form  className={styles.form}>
        <div>
        <input   value={data.name} type='text' name='fullname' className={isname?"":styles.invalid}  placeholder='Your Name' onChange={addname} minLength={3} required/>
        {!isname && data.name.length<=0?<lable>pls enter name</lable>:""}
        </div>
        <div>
        <input  value={data.age} type='number' name='age' className={isage?"":styles.invalid}  placeholder='Your age'  onChange={addage} required/>
        {!isage && data.age.length<=0?<lable>pls enter age</lable>:""}
        </div>
        <div>
        <input  value={data.address} type='text' name='address' className={isaddress?"":styles.invalid}  placeholder='Your address'  onChange={addaddress} required/>
        {!isaddress && data.address.length<=0?<lable>pls enter address</lable>:""}
        </div>
        <div>
            <button   type='submit' className={styles.button} onClick={submitform}>Add</button>
        </div>
        <div>
            <select  name='filter' className={styles.select} onChange={addfilter}>
                <option name='filter' value='All'>All</option>
                <option name='filter' value='18'>18</option>
                <option name='filter' value='19'>19</option>
                <option name='filter' value='20'>20</option>
                <option name='filter' value='21'>21</option>
                <option name='filter' value='22'>22</option>
            </select>
        </div>
    </form>
  )
}
export default Form