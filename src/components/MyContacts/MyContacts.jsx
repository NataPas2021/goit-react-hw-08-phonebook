import { useEffect } from 'react';
import Form from '../Form/Form';
import ContactsList from '../Contacts/ContactsList';
import Filter from '../Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllContacts } from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import css from './MyContacts.module.css';

const MyContacts = () => { 
  const contacts = useSelector(selectAllContacts);
  const {items, isLoading, error} = contacts;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  
    return (
      <div className={css.container}>
         <Form />
         <h3>Contacts</h3>
         <Filter name='filter' />
         {error && <p>{error}</p>}
         {isLoading && <p>...Loading</p>}
         {items.length === 0 ?  'There is no contacts yet. Add first one :)' : <ContactsList />}
      </div>
     );             
 };


export default MyContacts;