import propTypes from 'prop-types';
import React, { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({handleSubmit}) => {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
// const handleChangeName = e => {
//   const { value } = e.target;
//   setName(value);
// };

// const handleChangeNumber = e => {
//   const { value } = e.target;
//   setNumber(value);
// };
  const handleChangeName = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    // handleSubmit(name, number);
    // setName('');
    // setNumber('');
    // const form = event.currentTarget;
    handleSubmit({ name: name, number: number });
    setName('');
    setNumber('');
  };
   
 

    return (
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.formLabel}>Name </label>
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChangeName}
        />
        <label className={css.formLabel}>Number </label>
        <input
          className={css.formNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChangeName}
        />
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
