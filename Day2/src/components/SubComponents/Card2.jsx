import React from 'react'

const Card2 = (props) => {
  return (
    <div>
        <h1>A from Card2 </h1>
        <h2>A is {props.name}</h2>
        <h3>first PropsEx send A value to Cards then send to Card2</h3>
    </div>
  )
}

export default Card2