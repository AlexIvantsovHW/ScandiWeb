import React, { useState } from "react";
import axios from "axios";
class InputForm{

  constructor(name,type,placeholder,id,value){
    this.name=name;
    this.type=type;
    this.placeholder=placeholder;
    this.id=id;
    this.value;
  };

   getInput(){
    return(<div>
      <input 
      type={this.type} 
      placeholder={this.placeholder} 
      name={this.name} id={this.id} 
      value={this.value}/></div>)
  } 
}

  const Type=(props)=>{
  if(props.option==='DVD'){
    return(<div><input type="text" placeholder="Size" name={"Size"} id="Size" value={props.Size} onChange={(e)=>props.setSize(e.target.value)}/></div>)
  }else if(props.option==='Book'){
    return(
    <div><input type="text"placeholder="Weight" name={"Weight"} id="Weight" value={props.Weight} onChange={(e)=>props.setWeight(e.target.value)}/></div>
    )}else if(props.option==='Furniture'){
      return(
      <div>
        <div><input type="text" placeholder="Length" name={"Length"} id="Length" value={props.Length} onChange={(e)=>props.setLength(e.target.value)}/></div>
        <div><input type="text" placeholder="Height" name={"Height"} id="Height" value={props.Height} onChange={(e)=>props.setHeight(e.target.value)}/></div>
        <div><input type="text" placeholder="Width" name={"Width"} id="Width" value={props.Width} onChange={(e)=>props.setWidth(e.target.value)}/></div>
      </div>
      )
    }else{return null;}
}

function FormComponent (props){
  const [SKU,setSKU]=useState('SKU');
  const [Name,setName]=useState('Name');
  const [Price,setPrice]=useState(0);
  const [Size,setSize]=useState(0);
  const [Weight,setWeight]=useState(0);
  const [Length,setLength]=useState(0);
  const [Height,setHeight]=useState(0);
  const [Width,setWidth]=useState(0);

  const handleSubmit=()=>{
    if(SKU.length===0){alert ('Required!')}
    else if(Name.length===0){alert ('Required!')}
    else if(Price.length===0){alert ('Required!')}
    else{
      let fData=new FormData();
      fData.append('SKU',SKU);
      fData.append('Name',Name);
      fData.append('Price',Price);
      fData.append('Size',Size);
      fData.append('Weight',Weight);
      fData.append('Length',Length);
      fData.append('Height',Height);
      fData.append('Width',Width);
      
      axios({
        method: 'post',
        url: 'http://localhost/my-app/src/server/data.php',
        data: fData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response)
        alert('New Item Successfully Added.');  
    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
}
    }
  
  
  
 function selection(){
  var x=document.getElementById('select');
  var value=x.value;
  return (props.switchOpt(value));
 }
    


     return(
      <form onSubmit={handleSubmit}>
      <div><input type="text" placeholder="SKU" name={"SKU"} id="SKU" value={SKU} onChange={(e)=>setSKU(e.target.value)}/></div>
      <div><input type="text" placeholder="Name" name={"Name"} id="Name" value={Name} onChange={(e)=>setName(e.target.value)}/></div>
      <div><input type="text" placeholder="Price" name={"Price"} id="Price" value={Price} onChange={(e)=>setPrice(e.target.value)}/></div>
      <div>
        <label>Switch type</label>
        
        <select id="select" onChange={selection}>
        <option value="zero" selected> </option>
	<option value="DVD">DVD</option>
	<option value="Book">Book</option>
	<option value="Furniture">Furniture</option>
</select></div>

<Type
option={props.option} 
switchOpt={props.switchOpt} 
setWeight={setWeight} 
setSize={setSize} Size={Size}
setLength={setLength} Length={Length}
setWidth={setWidth} Width={Width}
setHeight={setHeight} Height={Height}/> 
<div><button onClick={handleSubmit}>Submit</button></div>
    </form>
)
   
}

export default FormComponent;
