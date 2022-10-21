import ContactsList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import styles from './styles.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phoneboock</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
