
import styles from './Header.module.css'

export const Header = (props) => {
  let home="Home"
  let name=props.className   //name from app.js
 
  return (<>
      <div className={styles.header}>
        <ul>
          <li>{home}</li>
          <li>About </li>
          <li>Contact</li>
          <li>Service</li>
          <li onClick={()=>{props.setChange(true)}}> {name}</li>  
         
        </ul>
        
       
      
       

      </div>
  </>
    
  )
}
