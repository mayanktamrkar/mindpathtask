import React from 'react'

const Child = (p) => {
   
    let value=10
    
    p.takedata(value)
   //console.log( p.takedata)

  return (
    <div>child</div>
  )
}

export default Child