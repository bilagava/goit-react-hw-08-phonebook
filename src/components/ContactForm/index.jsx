import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  hadleNameChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleNumberChange = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  checkName() {
    const { name, number } = this.state;
    const nameArray = this.props.arr.map(arr => arr.name.toLowerCase());
    if (nameArray.includes(name.toLowerCase())) {
      alert(`${name} is alredy in contacts`);
    } else {
      this.props.onSubmit(name, number);
      this.setState({ name: '', number: '' });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.checkName();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.form}>
        <label className={styles.label}>
          Name
          <input
            value={this.state.name}
            onChange={this.hadleNameChange}
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
            value={this.state.number}
            onChange={this.handleNumberChange}
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
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
