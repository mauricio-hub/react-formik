import { ChangeEvent, FormEvent, useState } from "react";

//recibo cualquier tipo de dato
export const useForm =<T> (initState:T) => {

    //inicializo el estado
    const [formData, setFormData] = useState(initState);

      const onChange = (event:ChangeEvent<HTMLInputElement>)=>{
          ///console.log(event.target.name);
          setFormData({
            ...formData,
            [event.target.name] : event.target.value
          })

      }
    //resetear el formulario
   const resetForm = () => {
       setFormData({...initState})
   }


   const isValidEmail = ( email: string ) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


//retorno estado del formulario y el onChange
    return {
        /* aqui con el operador spread se desestructuro formData */
        ...formData,
        isValidEmail,
        formData,
        onChange,
        resetForm
    }
}