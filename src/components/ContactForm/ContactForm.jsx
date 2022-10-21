import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import styles from './styles.module.css';
import { add } from '../../redux/items/items-slice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactsValue = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleNumberChange = e => {
    const currentTarget = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (currentTarget === 'name') {
      setName(value);
    }
    if (currentTarget === 'number') {
      setNumber(value);
    }
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const nameValue = contactsValue.map(value => value.name.toLowerCase());

    if (nameValue.includes(name.toLowerCase())) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(add({ name, number, id: nanoid() }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          value={name}
          onChange={handleNumberChange}
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          value={number}
          onChange={handleNumberChange}
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
