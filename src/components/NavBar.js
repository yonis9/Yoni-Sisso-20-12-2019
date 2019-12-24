import React from 'react';
import './NavBar.css'

const NavBar = ( { onRouteChange }) => {
    return (
        <nav>
            <h3>Herolo Weather Task</h3>
            <ul>
                <li onClick={()=> onRouteChange('home')}>HOME</li>
                <li onClick={()=> onRouteChange('favorites')}>FAVORITES</li>
            </ul>
        </nav>
    )
}

export default NavBar;