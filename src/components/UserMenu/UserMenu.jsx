import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/authOperations';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div className={styles.userMenuBox}>
      <p className={styles.userEmail}>{email}</p>
      <Button variant="info" onClick={() => dispatch(logOutUser())}>
        Log Out
      </Button>
    </div>
  );
}
