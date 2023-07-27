import React, { Component } from 'react';
import styles from './../HomePage.module.css';

function SingleLoanBlock(){
    return(
        <div className={styles.currentLoanList}>
            <div className={styles.currentLoanListProfile}>
            <img src="" alt="Image" />
            <label>Usama Kamran</label>
            </div>
            <h2>Rs +8000</h2>
        </div>
    )
}

export default SingleLoanBlock;