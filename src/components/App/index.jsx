import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import styles from './styles.module.css';

function App() {
  const [contacts, SetContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, SetFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    SetContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = id => {
    SetContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = evt => {
    SetFilter(evt.currentTarget.value);
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
}

export default App;
