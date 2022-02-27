import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

const RegisterPages = () => {
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    /*Desestructura formData*/
    name,
    email,
    password1,
    password2,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      {/* saber el tipo de dato del form  <form onSubmit={(ev => onSubmit(ev))} > */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />

        {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />

        {!isValidEmail(email) && <span>Email no valido</span>}

        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />

        {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {/* password mayor a 6 caracteres */}
        {password1.trim().length  < 6 && password1.trim().length > 0  && <span>La contraseña debe de tener 6 carateres</span> }
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />

        {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}


        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPages;
