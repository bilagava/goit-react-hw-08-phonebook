import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';
import { useEffect } from 'react';
import { ContactsItem } from './ContactsItem/ContactsItem';
import { Loader } from 'components/Loader/Loader';
import styles from './styles.module.css';

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
    <ul className={styles.list}>
      {contacts.length > 0
        ? searchName().map(({ name, id, phone }) => (
            <ContactsItem name={name} key={id} id={id} phone={phone} />
          ))
        : !isLoading && <p>You dont have contacts</p>}
      {isLoading === 'fetch' && <Loader />}
    </ul>
  );
};

export default ContactsList;
