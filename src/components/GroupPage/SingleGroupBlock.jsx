import styles from './GroupPage.module.css';

function SingleGroupBlock(props){
    return(
    <div className={styles.groupItem} onClick={props.onClick}>
       <div className={styles.groupNameImage}>
        <img src={props.groupProfileImage} alt="Group-Image" />
        <h1>{props.subject}</h1>
       </div>
       <div className={styles.groupitemLabels}>
        <div className={styles.incomingMoney}>
         <img src="" alt="Icon-1" />
         <label>RS. +{props.incomingMoney}</label>
        </div>
        <div className={styles.outcomingMoney}>
         <img src="" alt="Icon-2" />
         <label>RS. -{props.outcomingMoney}</label>
        </div>
       </div>
    </div>
    )}

export default SingleGroupBlock;