import React, { useState } from 'react';
import styles from './GroupChatPage.module.css';
import Button from '../../UI/Button';
import GroupChatMember from './GroupChatMember';
import GroupChatActionForm from '../Forms/GroupChatActionForm';
import AddNewLoanForm from '../Forms/AddNewLoanForm';

function GroupChatPage(props){
   const [formIndex,setFormIndex]=useState();
   const [actionFormIndex,setActionFormIndex]=useState();

   const showFormHandler=()=>{setFormIndex(1)}
   const onCancelHandler=()=>{setFormIndex(4)}
   
   //!..............Group Chat Action Forms
   const onSendReceiptHandler=()=>{ setActionFormIndex(1), setFormIndex(4) }
   const onLendMoneyHandler=()=>{ setActionFormIndex(2), setFormIndex(4) }
   const onPayCashHandler=()=>{ setActionFormIndex(3), setFormIndex(4) }

       return(
       <div className={styles.groupChatPage}>
        <div className={styles.groupPageHeader}>
            <h1>Groups</h1>
            <Button primary>New group +</Button>
         </div>

         <div className={styles.chatGrid}>
            <div className={styles.chatMemberList}>
            <h1>{props.groupName}</h1> 
            <p>{props.description}</p> 
            <div className={styles.groupTakenList}>
                <h2>Taken</h2>
                <label>Rs.+{props.loanTaken}</label>
                </div>
                <div className={styles.groupGivenList}>
                <h2>Given</h2>
                <label>Rs.-{props.loanGiven}</label>
                </div>
            {/* ..............Group Member List */}
             <div className={styles.availableGroupMember}>
               <h1>Members</h1>
                { props.members.map((arr)=> <GroupChatMember memberName={arr}
                 loanTakenGiven='0' onClick={showFormHandler}></GroupChatMember>)}
                 {formIndex===1 && <GroupChatActionForm onCancel={onCancelHandler}
                  onSendReceipt={onSendReceiptHandler} onLendMoney={onLendMoneyHandler} 
                  onPayCash={onPayCashHandler}> 
                 </GroupChatActionForm>}
                 {actionFormIndex===1 && <AddNewLoanForm> </AddNewLoanForm>}
                 {actionFormIndex===2 && <AddNewLoanForm> </AddNewLoanForm>}
                 {actionFormIndex===3 && <AddNewLoanForm> </AddNewLoanForm>}
             </div>

            </div>
            {/* ..............Group Chat Box */}
            <div className={styles.chatBox}>
             
            </div>
         </div>

       </div>
    )
}

export default GroupChatPage;