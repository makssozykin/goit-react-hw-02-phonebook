import React from 'react';
import PropTypes from 'prop-types';
import css from './FormSubmit.module.css';

export const FormSubmit = ({
  nameInputId,
  numberInputId,
  name,
  number,
  onChange,
  onSubmit,
}) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css['form-label']} htmlFor={nameInputId}>
        Name
        <input
          className={css['form-input']}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={onChange}
          required
        />
      </label>
      <label className={css['form-label']} htmlFor={numberInputId}>
        Number
        <input
          className={css['form-input']}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={onChange}
          required
        />
      </label>
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
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
