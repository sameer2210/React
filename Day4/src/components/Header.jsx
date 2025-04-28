import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {

  const data = useContext(DataContext);
  return (
    <div>
        <h1>i am from Header <br/> {data.usename} = Sameer is show from UserContext </h1>
    </div>
  )
}

export default Header