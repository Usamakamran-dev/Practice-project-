import React, { useState , useContext } from 'react';
import styles from './../HomePage.module.css';
import SingleGroupBlock from './SingleGroupBlock';
import AddNewLoanForm from '../../Forms/AddNewLoanForm';
import { CreateGroupContext } from '../../../context/CreateGroupProvider';

function HomeGroupSection(){
    const ctx=useContext(CreateGroupContext);
    const [showAddGroup,setShowAddGroup]=useState(false);
    function addGroupHandler(){
    setShowAddGroup(true);
    }

    return(
        <>
        {showAddGroup && <AddNewLoanForm></AddNewLoanForm> }
        <div className={styles.groupLoan}>
            <div className={styles.groupLoanHeader}>
            <h2>Groups</h2>
            <img src="" alt="Plus-Icon" onClick={addGroupHandler}/>
            <img src="" alt="Group-Icon" />
            </div>
            <div className={styles.groupLoanList}>
              {ctx.groupList.map((obj)=> <SingleGroupBlock loanTaken={obj.loanTaken} 
              loanGiven={obj.loanGiven} groupName={obj.subject}>
              </SingleGroupBlock>)}
            </div>
        </div>
        </>
    )
}

export default HomeGroupSection;