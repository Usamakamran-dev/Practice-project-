import React, { Component } from 'react';
import Backdrop from '../../UI/Backdrop';
import styles from './../homepage/HomePage.module.css';
import Button from '../../UI/Button';

 function  GroupChatActionForm(props){
       function formSubmitHandler(e){
        e.preventDefault();
        }
    
         return(
         <Backdrop>
         <form className={styles.groupChatActionForm} onSubmit={formSubmitHandler}>
         <div className={styles.groupChatFormHeader}>
                   <div className={styles.groupChatFormProfile}>
                   <img src="" alt="user-Img" />
                   <h1>Member Name</h1>
                   </div>
                   <img src="" alt="Cancel" onClick={props.onCancel}/>
         </div>
         <div className={styles.loanData}>
         <div className={styles.groupTakenList}>
                <h2>Taken</h2>
                <label>Rs.+{props.loanTaken}</label>
                </div>
                <div className={styles.groupGivenList}>
                <h2>Given</h2>
                <label>Rs.-{props.loanGiven}</label>
                </div>
         </div>

         <div className={styles.actionBtns}>
         <Button primary onClick={props.onSendReceipt}>Send Receipt</Button>
         <Button primary onClick={props.onLendMoney}>Lend Money</Button>
         <Button primary onClick={props.onPayCash}>Pay Cash</Button>
         </div>
         </form>
         </Backdrop>
         )}
    
         export default GroupChatActionForm;