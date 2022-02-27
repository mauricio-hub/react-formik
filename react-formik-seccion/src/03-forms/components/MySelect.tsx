import { useField,ErrorMessage } from 'formik'

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x:string]: any
}


export const MySelect = ({label,...props}:Props) => {

const [field/* meta */] = useField(props)

/* del field sacamos
name:
onBlur
onChange
value*/

  return (
    <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        <ErrorMessage name= {props.name} component="span" className='custom-span-error-class'/>
       {/*  {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        } */}
    </>
  )
}
