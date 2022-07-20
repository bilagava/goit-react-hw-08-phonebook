import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import styles from './styles.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
