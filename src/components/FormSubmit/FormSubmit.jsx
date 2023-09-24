import React from 'react';
import PropTypes from 'prop-types';

export const FormSubmit = ({ name, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Phonebook</h1>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

FormSubmit.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
