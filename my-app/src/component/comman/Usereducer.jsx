import React ,{useReducer} from 'react'
const info={name:"mayank",city:"indore"}

const reducer=(state,action)=>{
    if(action.type==="name"){
        return { ...state,name:action.value}
    }
    if(action.type==="city"){
        return { ...state,city:action.value}
    }

    
}


const Usereducer = () => {
    const [ data,dispatch]=useReducer(reducer,info);
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