import s from './Phonebook.module.css';
const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={s.li} key={contact.id}>
            {contact.name} : {contact.number}
            <button
              className={s.button}
              type="button"
              onClick={() => {
                deleteContacts(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
