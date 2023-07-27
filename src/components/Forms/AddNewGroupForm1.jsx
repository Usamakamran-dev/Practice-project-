import React, { useRef ,useState} from 'react';
import styles from './../homepage/HomePage.module.css';
import Backdrop from './../../UI/Backdrop';
import Button from '../../UI/Button';

function AddNewGroupForm1(props){
    const enterSubjectRef=useRef();
    const uploadFileRef=useRef();
    const descriptionRef=useRef();
   
    function formSubmitHandler(e){
        e.preventDefault();
        const groupDetails= {
            subject: enterSubjectRef.current.value,
            imageFile: enterSubjectRef.current.value,
            description: descriptionRef.current.value,
       }
       if(groupDetails.subject && groupDetails.imageFile && groupDetails.description){
       props.formData1(groupDetails);
       props.formIndex(1);
       }}
    
    return(
        <Backdrop>
            <form className={styles.addNewGroupForm1} onSubmit={formSubmitHandler}>
                <div className={styles.addNewGroupForm1Header}>
                    <h1>Create new Group</h1>
                    <img src="" alt="Cancel" onClick={props.onCancel}/>
                </div>
                <div className={styles.subjectField}>
                    <label>Subject</label>
                    <input type="text" placeholder='Enter subject' ref={enterSubjectRef}/>
                </div>
                <div className={styles.addGroupPhoto}>
                    <input type='file'   accept="image/*" 
                     placeholder="Group-Photo" ref={uploadFileRef}/>
                    <label>Add Group Photo</label>
                </div>
                <div className={styles.groupDescription}>
                    <label>Description</label>
                    <textarea id="description" name="description"
                    placeholder='Enter description' rows="4" ref={descriptionRef}></textarea>
                </div>
                <Button type='submit' primary >Next</Button>
            </form>
        </Backdrop>
        )}

        export default AddNewGroupForm1;