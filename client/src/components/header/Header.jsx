import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        
        <div className='headerContainer'>
            
            <h2>
                <Link to="/">Home</Link>
            </h2>

            <h2>
                <Link to="/amthal">Amthal</Link>
            </h2>

            <h2>
                <Link to="/gallery">Gallery</Link>
            </h2>

        </div>

    </div>
  )
}

export default Header