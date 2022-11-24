import React from 'react'
import './Button.css'

const Button = (props) => {
    let style = `buttons ${props.className}`
  
  return (
    <button className={style}>{props.children}</button>
  )
}

export default Button