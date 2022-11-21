import React from 'react'
import Child from './Child'

const Parent = (p) => {
  return (
    <div>Parent
        <Child  takedata={p.takedata} />
    </div>
  )
}

export default Parent