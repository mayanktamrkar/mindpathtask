
import styles from './Header.module.css'
import React from 'react'
const items= React.createContext({name:"mayank",age:(p)=>{ console.log("header",p)}})   //create context
export const Header = (props) => {
  let home="Home"
  // console.log("header")
  
 
  return (<>
      <div className={styles.header}>
        <ul>
          <li>{home}</li>
          <li>About </li>
          <li>Contact</li>
          <li>Service</li>
         {props.login? <li onClick={()=>{props.setChange(false)}}>Logout</li>:""}
         {props.toggle? <li onClick={()=>{props.setToggle(false)}}>Dark</li>:<li onClick={()=>{props.setToggle(true)}}>Light</li>}
         
        </ul>
        
       
      
       

      </div>
  </>
    
  )
}

export default items ;
