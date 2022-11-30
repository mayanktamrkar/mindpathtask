import React, { useContext } from 'react'
import './Wrapper.css'

import items from '../Header/Header'

const Wrapper = (props) => {

  const data=useContext(items)

  // console.log("wrapper")

  


  return (
    <div id='root3' className='wrappers'>{props.children}</div>
  )
}

export default Wrapper