import React from "react";
import "../styles/styles.css";
import { useFormik } from "formik";
import * as Yup from 'yup';


export const FormikYupBasic = () => {
  
   //getFieldProps establece el name , onBlur , onChange, y value 

  //useformik se inicializa siempre como objeto vacio
  //desestructuramos la const formik que es igual al hook
  const {  handleSubmit, errors ,touched,getFieldProps} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    //definimos el objeto validation schema
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .max(15,'Debe de tener 15 caracteres o menos' )
                    .required('Requerido'),
      lastName:  Yup.string()
                    .max(15,'Debe de tener 15 caracteres o menos' )
                    .required('Requerido'),
      email:     Yup.string().email('Email no tiene un formato valido')
                    .required('Requerido'),
    })

  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
          {/*...getFieldProps regresa un objeto por eso se esta desestructurando
          onBlur = {handleBlur} , onChange={handleChange} , value={values.firstname}
          */}

        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>

        <input type="text" {...getFieldProps("lastName")}/>
         {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="text" {...getFieldProps('email')} />
         {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
