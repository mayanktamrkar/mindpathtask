import React from 'react'
import './Footer.css'

const Footer = (props) => {
  console.log(props.children)
  return (<div className='footer'>
    <p>@copyright mayanktamrkar2001@gmail.com</p>
  </div>)
}

export default Footer