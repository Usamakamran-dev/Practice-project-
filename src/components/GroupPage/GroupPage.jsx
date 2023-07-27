import React, { useState , useContext} from 'react';
import styles from './GroupPage.module.css';
import SingleGroupBlock from './SingleGroupBlock';
import AddNewGroupForm2 from '../Forms/AddNewGroupForm2';
import AddNewGroupForm1 from '../Forms/AddNewGroupForm1';
import Button from '../../UI/Button';
import { CreateGroupContext } from '../../context/CreateGroupProvider';
import GroupChatPage from '../GroupChatPage/GroupChatPage';

function GroupPage(){
    const groupContext=useContext(CreateGroupContext);
    const [showGroupChat,setShowGroupChat]=useState(false);
    const [selectedGroup,setSelectedGroup]=useState();
    const [formIndex,setFormIndex]=useState();
    const [groupFormData1,setGroupFormData1]=useState({});
    
    const formData1=(groupDetails)=>{setGroupFormData1(groupDetails)}
    const formData2=(selectedUser)=>{
        const newGroup={
            subject: groupFormData1.subject,
            groupImg: URL.createObjectURL(groupFormData1.imageFile),
            description: groupFormData1.description,
            members: selectedUser
          }
          groupContext.setGroupListHandler(newGroup);
    }
    const addNewGroupHandler=()=>{setFormIndex(0)}
    const onNextHandler=(formindex)=>{setFormIndex(formindex)}
    const onCancelHandler=()=>{setFormIndex(2)}
    const showGroupChatHandler=(currentGroup)=>{setShowGroupChat(true), setSelectedGroup(currentGroup)}
    const allFormSubmitted=(indexMinusOne)=>{setFormIndex(indexMinusOne)}

    return(
        <>
        {formIndex===0 && <AddNewGroupForm1 formData1={formData1}
        onCancel={onCancelHandler} formIndex={onNextHandler}> </AddNewGroupForm1> }
        {formIndex===1 && <AddNewGroupForm2 formData2={formData2} 
        onCancel={onCancelHandler}> formIndex={allFormSubmitted}
        </AddNewGroupForm2> }

        {(showGroupChat==true)? <GroupChatPage groupName={selectedGroup.subject}
        loanTaken={selectedGroup.loanTaken} loanGiven={selectedGroup.loanGiven} 
        description={selectedGroup.description} members={selectedGroup.members}>
        </GroupChatPage> : 
        <div className={styles.groupPage}>
         <div className={styles.groupPageHeader}>
            <h1>Groups</h1>
            <Button primary onClick={addNewGroupHandler}>New group +</Button>
         </div>
         <div className={styles.groupListGrid}>
             {groupContext.groupList.map((obj,index)=>
            <SingleGroupBlock key={index} subject={obj.subject} groupProfileImage={obj.groupImg}
            incomingMoney={obj.loanTaken} outcomingMoney={obj.loanGiven}
            onClick={() => showGroupChatHandler(obj)}> 
            </SingleGroupBlock> )}
         </div>
         </div> }
        </>
        )}

        export default GroupPage;