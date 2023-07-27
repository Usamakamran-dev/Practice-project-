import React, { useState } from 'react';
import styles from './HomePage.module.css';
import Button from '../../UI/Button';
import AddNewLoanForm from '../Forms/AddNewLoanForm';

function LoanGiven(){
   const [remindLoan,setRemindLoan]=useState(false);

   function remindLoanHandler(){
   setRemindLoan(true);
   }

    return(
      <>
      {remindLoan && <AddNewLoanForm></AddNewLoanForm> }
       <div className={styles.LoanTaken}>
          <h1>Loan Given</h1>
          <div className={styles.LoanTokenDesc}>
           <img src="" alt="Loan-Image" />
           <div className={styles.LoanTakenAmounts}>
            <label>RS. <span>8000</span></label>
            <Button primary onClick={remindLoanHandler}>remind</Button>
           </div>
          </div>
       </div>
       </>
    )
}

export default LoanGiven;