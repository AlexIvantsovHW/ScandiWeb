import './Style.css'
import * as Yup from 'yup';

// --------------------Formik input parameters-----------------
export const initialValues={sku: "",name: "",price: "",DVD:"",Book:"",Furniture:""}
export const onSubmit=(values)=>{console.log('Form data',values)}

export const validateSchema=Yup.object({
  sku:Yup.string().required('Required'),
  name:Yup.string().required('Required'),
  price:Yup.number().required('Required'),
/*   size:Yup.number().required('Required'),
  length:Yup.number().required('Required'),
  width:Yup.number().required('Required'),
  height:Yup.number().required('Required'),
  weight:Yup.number().required('Required'), */
})

  // --------------------Formik error function-----------------
  export function TextError (props){return(<div className="error">{props.children}</div>)}
