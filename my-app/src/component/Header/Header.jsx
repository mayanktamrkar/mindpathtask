
import styles from './Header.module.css'

export const Header = (props) => {
  let home="Home"
  let name=props.className   //name from app.js
  // console.log(props.data )//object
  return (<>
      <div className={styles.header}>
        <ul>
          <li>{home}</li>
          <li>About </li>
          <li>Contact</li>
          <li>Service</li>
          <li> {name}</li>  
         
        </ul>
        
       
      
       

      </div>
  </>
    
  )
}
