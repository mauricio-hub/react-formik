import React from "react";
import "../styles/styles.css";
import { useFormik,Formik, Field,Form,ErrorMessage } from "formik";
import * as Yup from 'yup';


export const FormikComponents = () => {

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
                    .required('Requerido')
    })

  });

  return (
    <div>
      <h1>Formik Components</h1>

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
              <label htmlFor="firstName">First Name</label>
               {/* Field contrla los elementos del formulario */}
              <Field name='firstName' type='text'/>
              <ErrorMessage name='firstName' component="span" />


              <label htmlFor="lastName">Last Name</label>
              <Field name='lastName' type='text'/>
              <ErrorMessage name='lastName' component="span" />

              <label htmlFor="email">Email</label>
              <Field name='email' type='text'/>
              <ErrorMessage name='email' component="span" />

              <label htmlFor="jobType">Job type</label>
                <Field name='jobType' as="select">
                  <option value="">Pick something</option>
                  <option value="devleoper">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">It Senior</option>
                  <option value="it-jr">It Jr</option>
                </Field>
                <ErrorMessage name='jobType' component="span" />

              <label >
              <Field name='terms' type='checkbox'/>
                Terms and conditions</label>
              <ErrorMessage name='terms' component="span" />


              <button type="submit">Submit</button>
        </Form>
          )
        }

      </Formik>
    </div>
  );
};
