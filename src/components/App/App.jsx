import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import styles from './styles.module.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? ''
  );

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
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
    localStorage.setItem('contacts', JSON.stringify(contacts));
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
