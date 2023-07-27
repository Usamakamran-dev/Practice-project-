import React, { useState } from 'react';
import styles from './../HomePage.module.css';
import SingleLoanBlock from './SingleLoanBlock';
import AddNewLoanForm from '../../Forms/AddNewLoanForm';
import Button from '../../../UI/Button';

function HomeLoanSection(){
     const [addLoan,setAddLoan]=useState(false)

     function addLoanHandler(){
        setAddLoan(true);
     }
    
    return(
        <>
        {addLoan && <AddNewLoanForm></AddNewLoanForm>}
        <div className={styles.currentLoans}>
            <div className={styles.currentLoansHeader}>
            <h1>Current Loans</h1>
            <img src="" alt="Current Loan Icon" />
            </div>
            <div className={styles.loanCompleteList}>
            <SingleLoanBlock></SingleLoanBlock>
            </div>
            <Button primary onClick={addLoanHandler}>Add new loan +</Button>
        </div>
        </>
    )
}

export default HomeLoanSection;