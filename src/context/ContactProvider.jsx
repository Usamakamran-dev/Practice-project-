import React, { useState } from 'react';
export const ContactContext=React.createContext();

function ContactProvider(props){
    
    const [contactList,setContactList]=useState([{
        username: 'usamakamran470',
        fullName: 'Usama Kamran',
        phoneNumber: '03160560744',
        email: 'usamakamran470@gmail.com',
        accNo: '929292929292',
        loanTaken: 0,
        loanGiven: 0
    },{
        username: 'iammarqureshi',
        fullName: 'Ammar Qureshi',

        phoneNumber: '03160560744',
        email: 'ammarQureshi470@gmail.com',
        accNo: '929292929292',
        loanTaken:  0,
        loanGiven:  0
    },{
        username: 'usamakamran112',
        fullName: 'Usama Kamran',

        phoneNumber: '03160560744',
        email: 'usamakamran470@gmail.com',
        accNo: '929292929292',
        loanTaken:  0,
        loanGiven:  0
    }])

    return(
        <ContactContext.Provider value={contactList}>
        {props.children}
        </ContactContext.Provider>
    )
}

export default ContactProvider;