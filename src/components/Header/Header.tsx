import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Boards</h1>
            <p>Follow Galleries to grow your careers</p>
            <div className='btn'>
                <button className='button-primary'>painting</button>
                <button className='button-primary'>illustration</button>
            </div>
        </div>
    )
}

export default Header