import { ErrorMessage, Field } from 'formik';
import { React } from 'react';
import { TextError } from './FormAttributes';

export default function Input(props){
    const {label,id,name,type,...rest}=props;
    return(
        <div className="FormControl">
        <label htmlFor={id}>{label}</label>
        <Field id={id} name={name} type={type} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
      </div>
    )
}