import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = data => {
    const sameName = this.state.contacts.find(same => same.name === data.name);
    this.setState(prevState => {
      if (sameName) {
        alert(`${data.name} is already in contacts.`);
        return;
      }
      return {
        contacts: [
          ...prevState.contacts,
          { name: data.name, id: nanoid(), number: data.number },
        ],
      };
    });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContacts = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const normal = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normal)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          deleteContacts={this.deleteContacts}
        />
        <Filter value={this.filter} onChange={this.changeFilter} />
      </div>
    );
  }
}
export default Phonebook;
