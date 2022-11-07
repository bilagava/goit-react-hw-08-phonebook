import { useSelector } from 'react-redux';
import styles from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <h1 className={styles.title}> Phonebook</h1>
          <div className={styles.homeBox}>
            <h2 className={styles.text}>
              Create an account or log in to start using your Phonebook.
            </h2>
          </div>
        </>
      ) : (
        <h2>You are registered with Phonebook</h2>
      )}
    </>
  );
}
