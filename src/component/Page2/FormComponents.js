import React from "react";
import {Formik,Form,Field,ErrorMessage} from "formik";
import { TextError } from "./FormAttributes";


export function ff(as,type,label, id, name,placeholder) {
    return (
      <div className="FormControl">
        <label htmlFor={id} className="label">{label}</label>
        <Field as={as} id={id} name={name} placeholder={placeholder}  type={type} className='Add_input'/>
        <ErrorMessage name={name} component={TextError} className='Error'/>
      </div>);}
