import React, { Component } from 'react';
import styles from './GroupChatPage.module.css';

function GroupChatMember(props){
  return(
    <div className={styles.availableMemberList} onClick={props.onClick}>
    <div className={styles.availableMemberProfile}>
    <img src="" alt="Image" />
    <h2>{props.memberName}</h2>
    </div>
    <label>Rs {props.loanTakenGiven}</label>
    </div>
  )
}

export default GroupChatMember;