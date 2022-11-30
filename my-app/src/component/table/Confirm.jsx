import React from 'react'
import './Confirm.css'
import Wrapper from '../comman/Wrapper'

const citydata= React.createContext({city:"indore",}) ;  

const Confirm = (props) => {
  // console.log("confirm")
  return (
    <Wrapper>
    <div  className='popup'>
        <div className='confirm-container'>
            <p>Are you confirm ?</p>

        </div>
        <div className="button-section">
            <div>
                <button onClick={()=>{props.setConfirm(false)
                props.seTopacity(false)}} >No</button>
                <button onClick={()=>{props.setConfirm(false) 
                    props.seTopacity(false)   
                    props.conifrm_delete()}}>Yes</button>
            </div>
        </div>


    </div>
    </Wrapper>
  )
}

export default Confirm;
export  { citydata };