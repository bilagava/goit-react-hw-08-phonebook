import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button className={styles.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
