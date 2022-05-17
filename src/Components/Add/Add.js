import React from 'react'

const Add = ({getTask}) => {
  
  return (
    <div>

        <input type="Text"  onChange={(e) => {getTask(e.target.value)}} />
        <button >+</button>
    </div>
  )
}

export default Add