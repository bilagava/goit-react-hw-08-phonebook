import Button from 'react-bootstrap/Button';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/authOperations';
import styles from './Register.module.css';
import { setAuthStatus } from 'redux/contactsActions';
import { Loader } from 'components/Loader/Loader';

export default function Register() {
  const authStatus = useSelector(state => state.auth.authStatus);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authStatus === 'RegError') {
      Notiflix.Notify.failure('Error: incorrectly entered email or password');
    }
  }, [authStatus]);

  useEffect(() => {
    return () => dispatch(setAuthStatus());
  }, [dispatch]);

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      return alert('Все поля должны быть заполнены');
    }

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <form className={styles.registerForm} onSubmit={handleFormSubmit}>
      <label className={styles.label}>
        Name
        <input
          placeholder="Name"
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>

      <label className={styles.label}>
        Email
        <input
          placeholder="Email"
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Password
        <input
          placeholder="Password"
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </label>
      {authStatus === 'RegPending' ? (
        <Loader />
      ) : (
        <Button type="submit" variant="primary" className={styles.button}>
          Create account
        </Button>
      )}
    </form>
  );
}
