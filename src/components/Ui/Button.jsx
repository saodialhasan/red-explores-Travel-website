import React from 'react'


function Button(props) {
  
  return (
    <button className='bg-red w-auto h-auto px-5 py-2.5 rounded-xl border-2'>{props.name}</button>
  )
}

export default Button
