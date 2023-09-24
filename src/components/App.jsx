import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';
import { FormSubmit } from './FormSubmit/FormSubmit';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

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
        },
      ],
      name: '',
    });
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <FormSubmit
          name={name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Contacts contacts={contacts} name={name} />
      </div>
    );
  }
}
