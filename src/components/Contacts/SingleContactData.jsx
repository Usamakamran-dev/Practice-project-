import React, { Component } from 'react';
import styles from './Contacts.module.css';


function SingleContactData(props){
    return(
        <div className={styles.singleContactData}>
         <div className={styles.profileName}>
         <img src="" alt="Img" />
         <label>{props.userName}</label>
         </div>

         <h2>{props.phoneNumber}</h2>
         <h2>{props.emailAddress}</h2>

         <div className={styles.bankDetail}>
         <img src="" alt="Bank"/>
         <label>{props.accountNo}</label>
         </div>

         <h3>Rs {props.loanTaken}</h3>
         <h4>Rs {props.loanGiven}</h4>
        </div>
        )}

        export default SingleContactData;