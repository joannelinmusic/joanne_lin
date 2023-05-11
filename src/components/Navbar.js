import React, { Children, useImperativeHandle } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigation(){
  
  return <nav className='nav'>
    <Link to='/joanne_lin' className='site_title'>
      Joanne Lin
    </Link>
    
    <ul>
      <CustomLink to='/joanne_lin/About'>About</CustomLink>
      <CustomLink to='/joanne_lin/Projects'>Projects</CustomLink>
      <CustomLink to='/joanne_lin/Gallery'>Gallery</CustomLink>
      <CustomLink to='/joanne_lin/Contact'>Contact</CustomLink>
      
      
    </ul>
  </nav>
}

function CustomLink ({to, children,...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end : true})
  return (
    <li className={isActive ? "active":""}>
        <Link to={to} className='nav_link'>
          {children}
        </Link>
      </li>
  )
}
