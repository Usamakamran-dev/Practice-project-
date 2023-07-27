import React, { useState } from 'react';

export const CreateGroupContext=React.createContext();


function CreateGroupProvider(props){
    const groupListObj=[{
        subject: 'Thanda Group',
        groupImg: 'No Image Added',
        description: 'Welcome to the Thanda Group Guys',
        members: ['Ammar', 'Usama','LotaAfzaal']
    }]

    const [groupList,setGroupList]=useState(groupListObj);
    
    function setGroupListHandler(groupObj){
        setGroupList(prev=> [groupObj,...prev]);
    }
    
    return(
    <CreateGroupContext.Provider value={{groupList,setGroupListHandler}}>
        {props.children}
    </CreateGroupContext.Provider>
)
}

export default CreateGroupProvider;