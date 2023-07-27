import styles from './../HomePage.module.css';

function SingleGroupBlock(props){
    return(
         <div className={styles.singleGroup}>
            <h1>{props.groupName}</h1>
            <div className={styles.singleGroupList}>
                <div className={styles.groupTakenList}>
                <h2>Taken</h2>
                <label>Rs.+{props.loanTaken}</label>
                </div>
                <div className={styles.groupGivenList}>
                <h2>Given</h2>
                <label>Rs.-{props.loanGiven}</label>
                </div>
            </div>
         </div>
    )
}

export default SingleGroupBlock;