import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { FormSubmit } from './FormSubmit/FormSubmit';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name: this.state.name,
          number: Number.parseInt(this.state.number),
        },
      ],
      name: '',
      number: '',
    });
  };

  render() {
    const { contacts, name, number } = this.state;
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
        <Contacts contacts={contacts} name={name} />
      </div>
    );
  }
}
