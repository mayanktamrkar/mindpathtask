import React, { useState } from 'react'
// import styles from '../table/Table.module.css'
import  styles from './Form.module.css'
const Form = (p) => {
    const [data,setData]=useState({name:'',age:'',address:''})
    const [is,setIs]=useState({isname:false,isage:false,isaddress:false})
    let isvalid=(p)=>{
        if(p.trim().length!==0){
            return true
        }
        }
    let addname =(e)=>{
        if(isvalid(e.target.value)){
            setData({...data,name:e.target.value})
            setIs({...is,isname:true})
            // console.log(isname)
        }else{
            setIs({...is,isname:false})
        }
    }
    let addage =(e)=>{
        if(isvalid(e.target.value)){
            setData({...data,age:e.target.value})
            setIs({...is,isage:true})
        }else{
            setIs({...is,isage:false})
        }
    }
    let addaddress =(e)=>{
        if(isvalid(e.target.value)){
            setData({...data,address:e.target.value})
            setIs({...is,isaddress:true})
        }else{
            setIs({...is,isaddress:false})
        }
    }
    let submitform=(e)=>{
        e.preventDefault()
        console.log(is.isname,is.isage,is.isaddress)
        if(is.isname && is.isage && is.isaddress){
            p.fun(data)
        }
        setData((p)=>{
           return {...p,name:'',age:'',address:''}
        })
        setIs({isname:false,isage:false,isaddress:false})
    }
    
    
    let addfilter=(e)=>{
        p.setyear(e.target.value)
    }
    //console.log(data)
  return (
    <form >
        <div>
        <input value={data.name} type='text' name='fullname' className={is.isname?"":styles.invalid}  placeholder='Your Name' onChange={addname} required/>
        </div>
        <div>
        <input value={data.age} type='number' name='age' className={is.isage?"":styles.invalid}  placeholder='Your age'  onChange={addage} required/>
        </div>
        <div>
        <input value={data.address} type='text' name='address' className={is.isaddress?"":styles.invalid}  placeholder='Your address'  onChange={addaddress} required/>
        </div>
        <div>
            <button type='submit' className={styles.button} onClick={submitform}>Add</button>
            
        </div>
        <div>
            <select name='filter' className={styles.select} onChange={addfilter}>
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