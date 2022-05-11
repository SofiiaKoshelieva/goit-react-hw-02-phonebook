import React, { Component } from 'react';
import s from './Phonebook.module.css';
class ContactForm extends Component {
  state = { name: '', number: '' };
  onInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <fieldset className={s.fieldset}>
          <label>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onInputChange}
            />
            <label>
              Phone
              <input
                className={s.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.onInputChange}
              />
            </label>
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </fieldset>
      </form>
    );
  }
}
export default ContactForm;
