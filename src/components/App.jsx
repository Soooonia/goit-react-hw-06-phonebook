import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';

function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList
      />
    </div>
  );
}
export default App;

