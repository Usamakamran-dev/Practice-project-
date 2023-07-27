import React, { useState} from 'react';
import AddNewLoanForm from '../Forms/AddNewLoanForm';
import Button from '../../UI/Button';
import styles from './HomePage.module.css';

function LoanTaken(){
    const [payLoan,setPayLoan]=useState(false);

    function payLoanHandler(){
      setPayLoan(true);
    }

    return(
      <>
       {payLoan && <AddNewLoanForm></AddNewLoanForm> }
       <div className={styles.LoanTaken}>
          <h1>Loan Taken</h1>
          <div className={styles.LoanTokenDesc}>
           <img src="" alt="Loan-Image" />
           <div className={styles.LoanTakenAmounts}>
            <label>RS. <span>8000</span></label>
            <Button primary onClick={payLoanHandler}>pay</Button>
           </div>
          </div>
       </div>
       </>
    )
}

export default LoanTaken;