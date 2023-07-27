import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './../homepage/HomePage.module.css';

function RootLayout(){
    return(
       <div className={styles.navPages}>
       <Navbar></Navbar>
       <Outlet/>
       </div>
    )
}

export default RootLayout;