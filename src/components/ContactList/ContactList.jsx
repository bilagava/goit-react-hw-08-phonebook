import React from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/items/items-slice';

const ContactsList = () => {
  const contacts = useSelector(state => state.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const searchName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <ul className={styles.list}>
      {searchName().map(({ name, number, id }) => (
        <li key={id}>
          {name} : {number}
          <button className={styles.btn} onClick={() => dispatch(remove(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
