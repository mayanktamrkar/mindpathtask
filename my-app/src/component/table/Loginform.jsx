import React,{useEffect,useState,useRef, useContext} from 'react'
import button_css from './Table.module.css' 
import items from '../Header/Header'
import './Loginform.css'
import Input from '../comman/Input';
let Data;
const Loginform = () => {
  const [login,setLogin]=useState(false)
  const [isusername,setisusername]=useState(true)
  const [ispassword,setispassword]=useState(true)
  const[Datas,setData]=useState({username:'',password:''})
  const [usernameError,setusernameError]=useState('')
  const [passwordError,setpasswordError]=useState('')
  Data=React.createContext({islogin:login})
  const  data=useContext(items)
    const validation =(value)=>{
      let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/
      if(value.username.trim().length===0){
        setusernameError("pls enter username")
      }else if(value.username.trim().length>0 && value.username.trim().length<3){
        setusernameError('minimum length should be 3 char ')
      }
      else{
        setusernameError('')
      }
      if(value.password.trim().length===0){
        setpasswordError("pls enter password")
      }else if(value.password.trim().length>0 && value.password.trim().length<8){
        setpasswordError("min length 8 char ")
      }else if(!pattern.test(value.password)){
        setpasswordError("password must be 1 Upper,1 Lower,1 special char")
        console.log('working')
      }else{
        setpasswordError('')
      }
      console.log('submit',usernameError,passwordError)
    }
    console.log("g",Datas.username.trim().length)
    const formsubmit=(e)=>{
      e.preventDefault()
      validation(Datas)
      if(usernameError.trim().length==0 && passwordError.trim().length==0 && Datas.username.length!==0 && Datas.password.length!==0){
        setLogin(true)
        let a=data[2]
        a(true)                                                                        
      }
    }
    const childData=(v)=>{
      validation(Datas)
      if(v.name=="username"){
        setData({...Datas,username:v.value})
      }
      if(v.name=="password"){
        setData({...Datas,password:v.value})
      }
    }
    console.log(Datas)
    return (
    <form onSubmit={formsubmit} className='counter-box'>
        <div className="counter">
          <div className="headers">
            <h2>Login form </h2>
          </div>
          <div  className='input_box'>
            <div>
              <Input fun={childData} input={{type:'text' , placeholder:'enter your username', name:'username' }}/>
             <lable>{usernameError}</lable>
            </div>
            <div>
            <Input fun={childData} input={{type:'password' , placeholder:'enter your password ', name:'password'}}/>
             <lable>{passwordError}</lable>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </form>
  )
}
export default Loginform;
export {Data} ;