import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { useEffect } from 'react';
import { ContactsItem } from './ContactsItem/ContactsItem';
import { Loader } from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import styles from './ContactList.module.css';

const ContactsList = () => {
  const contacts = useSelector(state => state.entities);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const searchName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactsBox}>
      <h2 className={styles.titleContacts}>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ul className={styles.contactsList}>
          {searchName().map(({ name, id, number }) => (
            <ContactsItem name={name} key={id} id={id} number={number} />
          ))}
          {isLoading === 'fetch' && <Loader />}
        </ul>
      ) : (
        !isLoading && (
          <p className={styles.text}>You don't have saved contacts yet</p>
        )
      )}
    </div>
  );
};

export default ContactsList;
