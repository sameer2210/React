import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (

    <div className='flex justify-center gap-8 text-2xl p-4 bg-amber-100 font-semibold '>

        <NavLink to="/"        className={(e) => (e.isActive?"text-red-400":"")}>Home</NavLink>
        <NavLink to="/products"className={(e) => (e.isActive?"text-red-400":"")}>Products</NavLink>
        <NavLink to="/services"className={(e) => (e.isActive?"text-red-400":"")}>Services</NavLink>
        <NavLink to="/about"   className={(e) => (e.isActive?"text-red-400":"")}>About</NavLink>

    </div>

  )
};

export default Nav;