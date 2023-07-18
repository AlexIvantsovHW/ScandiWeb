import React, { useState } from "react";
import {Formik,Form} from "formik";
import './Style.css'
import { validateSchema } from './FormAttributes';
import { ff} from "./FormComponents";
import axios from "axios";
import {Navigate } from 'react-router-dom';



//_________________COMPONENT______________________________________________________
const ProdAdd = (props) => {
  const [List,setList]=useState(false);

//________________ Formik data
const initialValues = {sku:"",name:"",price:"",size:"",weight:"",length:"",width:"",height:""};

const onSubmit = (values) => {
  debugger;
  let fData = new FormData();
  fData.append("sku", values.sku);
  fData.append("name", values.name);
  fData.append("price", values.price);
  fData.append("size", values.size);
  fData.append("weight",values.weight);
  fData.append("length",values.length);
  fData.append("height",values.height);
  fData.append("width", values.width);
  axios({
    method:"post",
    url:"http://localhost/my-app/src/server/data.php",
    data: fData,
    config: { headers: { "Content-Type": "multipart/form-data" } },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response.response.data);
    });
  console.log("Form submit data", values);
  setList(true);

};

if(List){return(<Navigate to='/prodList'/>) }
//_________________Tips
const tip=(text)=>{return(<div className={'tip'}>{text}</div>)}
let tip_S='*Please provide DVD size in MB';
let tip_B='*Please provide book weight in kg';
let tip_F='*Please provide dimensions in H*W*L format';
const handleChange=(e)=>{let value=e.target.value;props.switchAC(value);}
//________________ Type swithcer
function TypeSwitch(){
  switch (props.option){
    case 'dvd':return(<div className="Form_Control"><div>{ff('input','number','Size (MB)','size','size','input size data')}{tip(tip_S)}</div></div>);break;
    case 'book':return(<div className="Form_Control"><div>{ff('input','number','Weight (KG)','weight','weight','input weight data')}{tip(tip_B)}</div></div>);break;
    case 'furniture':
        return(<div className="Form_Control">
          <div>
          {ff('input','number','Height (m)','height','height','input height data')}
          {ff('input','number','Width (m)','width','width','input width data')}
          {ff('input','number','Length (m)','length','length','input length data')}
        {tip(tip_F)}
          </div>
                </div>);break;}
}
  return (
          <Formik initialValues={initialValues} validationSchema={validateSchema}  onSubmit={async (values, { resetForm }) => {
            await onSubmit(values)
            resetForm()
          }}>    
            <Form>
              <div className="container">
                <div className="header">
                    <div className="subHeadTxt">Product Add</div>
                    <div className="subHead"><button type='submit' className="btnDel">Save</button> </div>
                    <div className="subHead"><button className="btnDel" type='reset'>Cancel</button></div>    
                </div> 
                <div className="body">
                  <div className="subBody">
                  {ff('input','text','SKU','sku','sku','input sku data')} 
                    {ff('input','text','Name','name','name','input name')}
                    {ff('input','number','Price ($)','price','price','input price value')} 
                     <div className="Form_Control">
                        <label htmlFor={'label'} className='label'>Type Switcher</label>
                        <select onChange={handleChange} id='productType'>
                            <option value=''></option>
                            <option value='dvd'>DVD</option>
                            <option value='book'>Book</option>
                            <option value='furniture'>Furniture</option>
                        </select>
                    </div>
                  {TypeSwitch(props)}
                </div>
                  </div>
              </div>
            </Form>
          </Formik>);};

export default ProdAdd;
