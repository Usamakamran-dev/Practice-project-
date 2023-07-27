import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css';

function Navbar(){
    return(
        <div className={styles.navbar}>
        <div className={styles.upperTabs}>
        <NavLink><img src="" alt="+" /></NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/groups'>Group</NavLink>
        <NavLink to='/contacts'>Contact</NavLink>
        </div>
        <NavLink>Log out</NavLink>
       </div>
    )
}

export default Navbar;