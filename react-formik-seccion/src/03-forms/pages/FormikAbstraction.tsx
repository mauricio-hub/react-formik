import React from "react";
import "../styles/styles.css";
import { Formik,Form } from "formik";
import * as Yup from 'yup';

import { MyTextInput,MySelect, MyCheckBox }  from "../components";

export const FormikAbstraction= () => {



  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
          initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              terms:false,
              jobType:''
            }
          }
          onSubmit = {(values)=>{
            console.log(values)
          }}

          validationSchema={ Yup.object({
            firstName: Yup.string()
                          .max(15,'Debe de tener 15 caracteres o menos' )
                          .required('Requerido'),
            lastName:  Yup.string()
                          .max(15,'Debe de tener 15 caracteres o menos' )
                          .required('Requerido'),
            email:     Yup.string().email('Email no tiene un formato valido')
                          .required('Requerido'),
            terms:     Yup.boolean()
                          .oneOf([true],'Debe de acceptar las condiciones'),
            jobType:  Yup.string()
                      .notOneOf(['it-jr'],'Esta opcion no esta permitidas')
                      .required('Requerido'),
          }) }

      >
        {( formik )=>(
            <Form >
              <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"/>
             {/*  <label htmlFor="firstName">First Name</label>
              <Field name='firstName' type='text'/>
              <ErrorMessage name='firstName' component="span" /> */}
            <MyTextInput
            label="Last Name"
            name="lastName"
            placeholder="Last Name"/>

            <MyTextInput
            label="Email"
            name="email"
            placeholder="Email"/>

              <MySelect label="Job Type" name="jobType">
                  <option value="">Pick something</option>
                  <option value="devleoper">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">It Senior</option>
                  <option value="it-jr">It Jr</option>
              </MySelect>

              <MyCheckBox label="Terms & Conditions" name="terms" />


              <button type="submit">Submit</button>
        </Form>
          )
        }

      </Formik>
    </div>
  );
};
