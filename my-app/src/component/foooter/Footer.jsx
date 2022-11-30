import React from 'react'
import './Footer.css'

const Footer = (props) => {
  // console.log("footer")
  return (<div className='footer'>
    <p>@copyright mayanktamrkar2001@gmail.com</p>
  </div>)
}

export default React.memo(Footer) //it not render ,when app render , it render only once 