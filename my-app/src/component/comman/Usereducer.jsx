import React ,{useReducer} from 'react'
const Usereducer = () => {
    const [ data,dispatch]=useReducer((state,action)=>{
        if(action.type==="name"){
            return { ...state,name:action.value}
        }
        if(action.type==="city"){
            return { ...state,city:action.value}
        }},{name:"mayank",city:"indore"});//usereducer
        console.log(data)
     const style={
        width:'500px',
        height:'200px',
        backgroundColor:"aqua"
     }
  return (
    <div style={style}>
        <button  onClick={()=>{dispatch({type:"name",value:"dev"})}}>change name</button>
        <button  onClick={()=>{dispatch({type:"city",value:"delhi"})}}>change city</button>
    </div>
  )
}
export default Usereducer