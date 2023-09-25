import React from 'react';
import PropTypes from 'prop-types';

export const FormSubmit = ({
  nameInputId,
  numberInputId,
  name,
  number,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={onChange}
          required
        />
      </label>
      <label htmlFor={numberInputId}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

FormSubmit.propTypes = {
  nameInputId: PropTypes.string.isRequired,
  numberInputId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
