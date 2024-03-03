import { useState, useId } from "react";
import css from "./RegisterForm.module.css";

const INITIAL_STATE = {
    name: "",
    email: "",
    password: ""
}

const RegisterForm = ({ onSubmit }) => {
   const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = (e) => {
    const {name, value} = e.target;
  
    setState({
        ...state,
        [name]: value,
    })
 }

  const handleSubmit = (e, data) => { 
    e.preventDefault();
    onSubmit({ ...state });
    reset();
};

  const reset = () => {
    setState({...INITIAL_STATE});
}


    const inputNameId = useId();
    const inputEmailId = useId();
    const inputPasswordID = useId();

    return (
        <form onSubmit={handleSubmit}>
            <div className={css.block}>
              <label htmlFor={inputNameId} className={css.label}>Name</label>
              <input className={css.input}
                 type="text"
                 name="name"
                 value={state.name}
                 id={inputNameId}
                 onChange={handleChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required/>  
            </div>
            <div className={css.block}>
              <label htmlFor={inputEmailId} className={css.label}>Email</label>
              <input className={css.input}
                 type="email"
                 name="email"
                 value={state.email}
                 id={inputEmailId}
                 onChange={handleChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required/>
            </div>
            <div className={css.block}>
                <label htmlFor={inputPasswordID} className={css.label}>Password</label>
                <input className={css.input}
                 type="password"
                 name="password"
                 value={state.password}
                 id={inputPasswordID}
                 onChange={handleChange}
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required/>
            </div>  
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;