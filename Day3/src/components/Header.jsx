import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div> 
        <h2>Header</h2>
        <input type="search"/>
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    </div>
  )
}

export default Header


// 3:00:00 