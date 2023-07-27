import React, { Component } from 'react';
import styles from './HomePage.module.css';
import LoanTaken from './LoanTaken';
import LoanGiven from './LoanGiven';
import HomeGroupSection from './HomePageGroupSection/HomeGroupSection';
import HomeLoanSection from './HomePageLoanSection/HomeLoanSection';

function HomePage(){
    return(
        <div className={styles.MainPage}>
            <LoanTaken></LoanTaken>
            <LoanGiven></LoanGiven>
            <HomeLoanSection></HomeLoanSection>
            <HomeGroupSection></HomeGroupSection>
            </div>
    )
}

export default HomePage;