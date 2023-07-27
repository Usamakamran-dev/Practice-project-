import React, { useContext } from 'react';
import styles from './Contacts.module.css';
import Button from '../../UI/Button';
import SingleContactData from './SingleContactData';
import { ContactContext } from '../../context/ContactProvider';

function Contacts(){
    const ctx=useContext(ContactContext);

    return(
        <div className={styles.contacts}>
         <div className={styles.contactsHeader}>
          <h1>Contacts</h1>
          <div className={styles.headerBtnIcon}>
           <img src="" alt="Contact-Icon" />
           <Button primary> Add Contacts +</Button>
          </div>
         </div>

         <div className={styles.contactsList}>
          <div className={styles.contactListheader}>
            <h2>Name</h2>
            <h2>Phone No</h2>
            <h2>Email</h2>
            <h2>Bank Acc</h2>
            <h2>Loan Taken</h2>
            <h2>Loan Given</h2>
          </div>
          <div className={styles.contactListData}>
           { ctx.map((obj)=> <SingleContactData userName={obj.username}
            phoneNumber={obj.phoneNumber} emailAddress={obj.email}
            accountNo={obj.accNo} loanTaken={obj.loanTaken}
            loanGiven={obj.loanGiven}></SingleContactData>)}
          </div>
         </div>
        </div>
        )}

export default Contacts;