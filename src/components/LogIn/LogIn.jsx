import Notiflix from 'notiflix';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './LogIn.module.css';
import { logInUser } from 'redux/authOperations';
import { useEffect } from 'react';
import { setAuthStatus } from 'redux/contactsActions';
import { Loader } from 'components/Loader/Loader';

export default function LogIn() {
  const authStatus = useSelector(state => state.auth.authStatus);

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authStatus === 'LogError') {
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
    if (email === '' || password === '') {
      return Notiflix.Notify.failure(
        'Error: incorrectly entered email or password'
      );
      // alert('Все поля должны быть заполнены');
    }
    dispatch(logInUser({ email, password }));
  };

  return (
    <form className={styles.loginForm} onSubmit={handleFormSubmit}>
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
      {authStatus === 'LogPending' ? (
        <Loader />
      ) : (
        <Button type="submit" variant="primary" className={styles.button}>
          Log in
        </Button>
      )}
    </form>
  );
}
