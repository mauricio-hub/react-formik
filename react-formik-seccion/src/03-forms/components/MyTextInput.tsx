import { ErrorMessage, useField } from 'formik'

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x:string]: any
}


export const MyTextInput = ({label,...props}:Props) => {

  const [field] = useField(props)
/* const [field,meta] = useField(props) */

/* del field sacamos
console.log(field)
name:
onBlur
onChange
value*/

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input  className='text-input' {...field} {...props} />
        <ErrorMessage name= {props.name} component="span" className='custom-span-error-class'/>
       {/*  {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        } */}
    </>
  )
}
