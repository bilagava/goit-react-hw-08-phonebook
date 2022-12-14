import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.authBox}>
      <NavLink className={styles.link} to="/register">
        <Button variant="dark">Create account</Button>
      </NavLink>
      <NavLink className={styles.link} to="/login">
        <Button variant="success"> Log In</Button>
      </NavLink>
    </div>
  );
}
