import React,{useEffect,useState} from 'react'
import button_css from './Table.module.css' 
import './UseEffect.css'
const UseEffect = () => {
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    useEffect(()=>{
       setTimeout(()=>{
        setCount(count+1)
       },2000)
    },[])  ////it run only once when page is refresh 
    useEffect(()=>{
        setTimeout(()=>{
         setCount1(count1+1)   //+1
        },1000)
     })  /// no dependency then it run every re-render component 
     useEffect(()=>{
        setCount2(count2+1)
     },[count])  //it is depend on first one 
     console.log("counter working")
    return (
    <div className='counter-box'>
        <div className="counter">
          <div>
          <h1>it run only when page refresh {count}</h1>
            <h1>it run when component  render {count1}</h1>
            <h1>it depent on first one {count2}</h1>
            <button className={button_css.button} onClick={()=>{ setCount(count+1)}} >change first value</button>
          </div>
        </div>
    </div>
  )
}
export default UseEffect