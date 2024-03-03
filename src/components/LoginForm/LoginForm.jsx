import { useState, useId } from 'react';

import css from './LoginForm.module.css';


const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({...INITIAL_STATE});

  const handleChange = (e) => {
    const {name, value} = e.target;
  
    setState({
        ...state,
        [name]: value,
    })
 }

  const handleSubmit = (e) => { 
    e.preventDefault();
    onSubmit({...state});
    reset();
    
};

  const reset = () => {
    setState({...INITIAL_STATE});
}

  const inputEmailId = useId();
  const inputPasswordId = useId();

  return (
         <form onSubmit={handleSubmit}>
            <label htmlFor={inputEmailId} >Email</label>
            <input className={css.input}
                 type="email"
                 name="email"
                 value={state.email}
                 id={inputEmailId}
                 onChange={handleChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
            />
            
            <label htmlFor={inputPasswordId} className={css.label}>Password</label>
            <input className={css.input}
                 type="password"
                 name="password"
                 value={state.password}
                 id={inputPasswordId}
                 onChange={handleChange}
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
            />
           
            <button type="submit" className={css.addButton}>Login</button>
        </form>
            );
}

export default LoginForm;