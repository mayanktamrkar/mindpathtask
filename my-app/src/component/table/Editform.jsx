import React ,{useState} from 'react'
import button from '../table/Table.module.css'
import Wrapper from '../comman/Wrapper'
import './Editform.css'
const Editform = (props) => {
  console.log("editcomponent")
    const [name,setname]=useState(props.name)
    const [age,setage]=useState(props.age)
    const [address,setaddress]=useState(props.address)
    const setvalue =(e)=>{
        let value=e.target.value
        let name=e.target.name
        if(name==="name"){
            setname(value)

        }else if(name==="age"){setage(value)}
        else if(name==="address"){setaddress(value)}
}




  return (
    <Wrapper>
    <div className='editform'>
        <input placeholder='enter name'  type='text' value={name} onChange={(e)=>{setvalue(e)}} name='name'/>
        <input  placeholder='enter age' onChange={(e)=>{setvalue(e)}}    type='number' value={age} name='age'/>
        <input  placeholder='enter address' onChange={(e)=>{setvalue(e)}}   type='text' value={address} name='address'/>
        <button className={button.button} onClick={()=>{props.setedit(false)
         props.editdata(props.k,{name,age,address})   
         props.seTopacity('')} }>ok</button>
    </div>
   
    </Wrapper>
  )
}
export default Editform