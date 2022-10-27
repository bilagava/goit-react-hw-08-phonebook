import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import styles from './styles.module.css';
import { LoaderDelete } from '../../Loader/Loader';
import { useSelector } from 'react-redux';
// import Notiflix from 'notiflix';
import { useEffect } from 'react';

export const ContactsItem = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    return () => {
      if (isLoading === id) {
        // Notiflix.Notify.failure()
        alert(`You have removed ${name} contact from your list`);
      }
    };
  }, [id, isLoading, name]);

  return (
    <li>
      {name}: {phone},
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
        {isLoading === id && <LoaderDelete />}
      </button>
    </li>
  );
};
