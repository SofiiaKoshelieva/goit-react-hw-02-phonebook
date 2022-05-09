import s from './Phonebook.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.filter}
        type="text"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};
export default Filter;
