import { useState } from 'react';
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/phonebookSlice';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'Redux/selectors';



function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const nameInput = nanoid();
  const phoneInput = nanoid();

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const target = e.currentTarget;
    if (target.name === "name") {
      setName(target.value);
    }
    if (target.name === "number") {
      setNumber(target.value);
    }
  };
  
const reset = () => {
  setName('');
  setNumber('');
};
  
  const handleSubmit = e => {
    e.preventDefault();
    const data = { id: nanoid(), name, number };
    contacts.find(option => option.name === data.name)
    ? alert(`${data.name} is already in contacts`)
    : dispatch(addContact(data));
    reset();
  };

  

    return (
      <div className={css.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor={nameInput}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={nameInput}
              required
            />
          </label>
          <label htmlFor={phoneInput}>
            Phone
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={phoneInput}
              required
            />
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }

export default ContactForm;
