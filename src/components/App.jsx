import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { FormSubmit } from './FormSubmit/FormSubmit';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: this.state.number,
        },
      ],
      name: '',
      number: '',
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { name, number, filter } = this.state;
    return (
      <div>
        <FormSubmit
          nameInputId={this.nameInputId}
          numberInputId={this.numberInputId}
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h1>Contacts</h1>
        {this.state.contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        ) : (
          <p>Your phonebook is empty. Add first contact!</p>
        )}

        {this.state.contacts.length > 0 && (
          <Contacts contacts={visibleContacts} />
        )}
      </div>
    );
  }
}
