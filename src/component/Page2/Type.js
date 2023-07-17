import React from "react";
import s from './style.module.css'


export function form(unit,value,AC,metric,text,id){
    const isValid=(value===null)||(value.length>0)||(value===0);
    debugger;
    return(isValid?<><div className={s.form}><label className={s.lform}>{unit}{((unit==='SKU')||(unit==='Name')?' ': (` ${metric}`))}:</label>
    <input type="text" placeholder={unit} name={unit} id={id} value={value} className={unit} 
    onChange={(e) => AC(e.target.value)}/></div><div className={s.tip}>{text}</div></>:<><div className={s.formErorr}><label className={s.lform}>{unit}{((unit==='SKU')||(unit==='Name')?' ':(` ${metric}`))}:</label>
    <input type="text" placeholder={unit} name={unit} id={id} value={value} className={unit}
    onChange={(e) => AC(e.target.value)}/></div><div className={s.tip}>{text}</div></>)}   


const Type = (props) => {
const tip=(text)=>{return(<div className={s.tip}>{text}</div>)}
let tip_S='*Please provide DVD size in MB';
let tip_B='*Please provide book weight in kg';
let tip_F='*Please provide dimensions in H*W*L format';

 const switchAtt=(props)=>{
    switch (props.option){
        case 'DVD':return(form('Size',props.Size,props.setSize,'MB',tip_S,'size'));break;
        case 'Book':return(form('Weight',props.Weight,props.setWeight,'Kg',tip_B,'weight'));break;
        case 'Furniture':
            return(<>
            {form('Height',props.Height,props.setHeight,'m','','height')}
            {form('Width',props.Width,props.setWidth,'m','','width')}
            {form('Lenght',props.Length,props.setLength,'m','','length')}
            {tip(tip_F)}</>);break;}}
    return(<div className={s.subForm}>{switchAtt(props)}</div>)};

  export default Type;