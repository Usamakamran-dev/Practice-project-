import React from 'react'
import styles from '../HomePage/HomePage.module.css';
import Backdrop from './../../UI/Backdrop';

function AddNewLoanForm(){
    return(
        <Backdrop>
        <form className={styles.addNewLoanForm}>
         <button>Hello</button>
         <button>Hello</button>
         <button>Hello</button>
        </form>
        </Backdrop>
    )
}

export default AddNewLoanForm;