import { useField ,ErrorMessage} from 'formik'

interface Props {
    label: string;
    name: string;
    [x:string]: any
}


export const MyCheckBox = ({label,...props}:Props) => {

const [field/* meta */] = useField({...props,type:'checkbox'})

/* del field sacamos
console.log(field)
name:
onBlur
onChange
value*/

  return (
    <>
        <label>
        <input  type='checkbox' {...field} {...props} />
          {label}
        </label>
        <ErrorMessage name= {props.name} component="span" className='custom-span-error-class'/>
        {/* {
            meta.touched && meta.error && (
                <span className='error'>{meta.error}</span>
            )
        } */}
    </>
  )
}
