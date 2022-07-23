import React from 'react';
import { nanoid } from 'nanoid';
import ContactsList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import styles from './styles.module.css';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '066 459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '099 443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '067 645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '095 227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parse = JSON.parse(contacts);
    if (parse) {
      this.setState({ contacts: parse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => {
      return { contacts: [contact, ...prevState.contacts] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phoneboock</h1>
        <ContactForm onSubmit={this.addContact} arr={contacts} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} valueFilter={filter} />
        {contacts.length > 0 && (
          <ContactsList
            deleteContact={this.deleteContact}
            contacts={this.filterContacts()}
          />
        )}
      </div>
    );
  }
}

export default App;
