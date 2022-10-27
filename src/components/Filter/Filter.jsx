import React from 'react';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/contactsActions';

const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        onChange={e => dispatch(filter(e.currentTarget.value))}
        value={value}
        type="text"
      />
    </label>
  );
};

export default Filter;
