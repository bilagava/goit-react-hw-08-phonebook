import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import styles from './styles.module.css';
import ContactsList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? ''
  );

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }

    const findNumber = contacts.find(contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in use.`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phoneboock</h1>
      <ContactForm onSubmit={addContact} arr={contacts} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter onChangeFilter={changeFilter} valueFilter={filter} />
      {contacts.length > 0 && (
        <ContactsList
          deleteContact={deleteContact}
          contacts={filterContacts()}
        />
      )}
    </div>
  );
};

export default App;
