import React from 'react';
import { connect } from 'react-redux';

import './NavBar.css'

import { changeRoute } from '../redux/app/app-actions';

const NavBar = ( { changeRoute }) => {
    return (
        <nav>
            <h3>Herolo Weather Task</h3>
            <ul>
                <li onClick={()=> changeRoute('home')}>HOME</li>
                <li onClick={()=> changeRoute('favorites')}>FAVORITES</li>
            </ul>
        </nav>
    )
}

const mapDispatchToProps = disptach => ({
    changeRoute: (route) => disptach(changeRoute(route))
})

export default connect(null, mapDispatchToProps)(NavBar);