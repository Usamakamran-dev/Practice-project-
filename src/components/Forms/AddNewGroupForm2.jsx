import React, { useRef, useContext, useState } from 'react';
import styles from './../homepage/HomePage.module.css';
import Backdrop from '../../UI/Backdrop';
import Button from '../../UI/Button';
import { ContactContext } from '../../context/ContactProvider';

function AddNewGroupForm2(props) {
  const enterSearchRef = useRef();
  const contactList = useContext(ContactContext);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if(!(selectedUser.length=0)){
      props.formData2(selectedUser);
      props.formIndex(-1)
      }}
 
    function handleUserSelection(username){
    let userindex= selectedUser.indexOf(username)
    if (userindex!=-1)
    {
      setSelectedUser( selectedUser.filter(user => user !== username));
    }
    else
    {
      setSelectedUser(prevUser=>  [username,...prevUser]);
    }
  }

  function handleSearchInputChange() {
    const searchInput = enterSearchRef.current.value;
    const filteredResults = contactList.filter((contact) =>
      contact.username.toLowerCase().includes(searchInput.toLowerCase())
    )
    setSearchResults(filteredResults);
    }


    return (
         <Backdrop>
         <form className={styles.addNewGroupForm2} onSubmit={handleFormSubmit}>
         <div className={styles.addNewGroupForm2Header}>
         <h1>Add Participants</h1>
         <img src="" alt="Cancel" onClick={props.onCancel} />
         </div>

         <div className={styles.searchField}>
         <label>Search</label>
         <input
            type="search"
            placeholder="Search members"
            ref={enterSearchRef}
            onChange={handleSearchInputChange}
         />
         </div>

         <div className={styles.selectedUsersList}>
         <h2>Selected Users</h2>
         {selectedUser.length == 0 ? <p>No users selected</p> : (
         selectedUser.map((user, index) => <label key={index}>{user}</label> ))}
         </div> 
        
         <div className={styles.searchMemberList}>
         <h2>Available members</h2>
         {searchResults.length === 0 ? <p>No results found</p> : (
          searchResults.map((contact, index) => <label key={index} 
          onClick={() => handleUserSelection(contact.username)}>
          {contact.fullName}</label>))}
          </div>
          <Button primary> Create Group </Button>
          </form>
          </Backdrop>
          )}

export default AddNewGroupForm2;