import React from "react";
import { useFormik } from "formik";
import s from './Style.css'
import * as Yup from 'yup' 

//________________ Formik data
const initialValues = {sku: "",name: "",price: "",};
const onSubmit = (values) => console.log("Form submit data", values);


const validationScheme=Yup.object({
  sku:Yup.string().required('Required'),
  name:Yup.string().required('Required'),
  price:Yup.string().required('Required'),
})
//________________ General data
const basicClass='classN';
const errorClass='clError';

//_________________COMPONENT______________________________________________________
const ProdAdd = () => {

  const formik = useFormik({
    initialValues,
     onSubmit,
     validate,
     /* validationScheme, */
     });

  function ff(type,label, id, name, value,placeholder,clname) {
    return (
      <div className={clname}>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} placeholder={placeholder} 
        className={clname} type={type} onChange={formik.handleChange}
        onBlur={formik.handleBlur} value={value} />
      </div>
    );
  }
  const errMess=formik.errors;
  const touchMess=formik.touched;
  const fv=formik.values;

  console.log("Error:", formik.errors);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div><button type="submit">Save</button></div>
      {errMess.sku && touchMess.sku?
     ( ff('text',"SKU", "sku", "sku", fv.sku,errMess.sku,"clError")):
      (ff('text',"SKU", "sku", "sku", fv.sku,'text data',"classN"))}


      {errMess.name && touchMess.name?
      ff('text',"Name", "name", "name", fv.name,errMess.name,"clError"):
      ff('text',"Name", "name", "name", fv.name,'text data',"classN")}

      {errMess.price && touchMess.price?
      ff('number',"Price", "price", "price", fv.price,errMess.price,'clError'):
      ff('number',"Price", "price", "price", fv.price,'text data','className')}   
    </form>
  );
};
export default ProdAdd;
