import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {
  const data = useContext(DataContext);
  return (
    <div>
        <h1>i am Section</h1>
        <h2>city is {data.city}</h2>
    </div>
  )
}

export default Section