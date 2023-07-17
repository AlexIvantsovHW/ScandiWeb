import React, { useState } from "react";
import axios from "axios";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";
import Type, { form } from "./Type";


function FormComponent(props) {
  const [SKU, setSKU] = useState("SKU"),
        [Name, setName] = useState("Name"),
        [Price, setPrice] = useState(0),
        [Size, setSize] = useState(0),
        [Weight, setWeight] = useState(0),
        [Length, setLength] = useState(0),
        [Height, setHeight] = useState(0),
        [Width, setWidth] = useState(0);

  const handleDelete = () => {
    debugger;
    props.deleteIdAC();
  };
  const handleSubmit = () => {
    debugger;

      let fData = new FormData();
      fData.append("SKU", SKU);
      fData.append("Name", Name);
      fData.append("Price", Price);
      fData.append("Size", Size);
      fData.append("Weight", Weight);
      fData.append("Length", Length);
      fData.append("Height", Height);
      fData.append("Width", Width);

      axios({
        method: "post",
        url: "http://localhost/my-app/src/server/data.php",
        data: fData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
        fData=[];
        debugger;
        props.initAC();
        debugger;
  };

  function selection() {
    var x = document.getElementById("select");
    var value = x.value;
    return props.switchOpt(value);
  }

  return (
    <div className={s.cont}>
      <div className={s.header}>
        <div className={s.subHeadTxt}>Product Add</div>
        <div className={s.subHead}>
          <button className={s.btnSave} onClick={handleSubmit}>Save</button></div>
        <div className={s.subHead}><NavLink to="/prodList"><button className={s.btnCancel} onClick={handleDelete}>Cancel</button></NavLink></div>
      </div>
      <form onSubmit={handleSubmit} id="product_form">
        <div className={s.subContainer}>
          <div className={s.subForm}>
          {form('SKU',SKU,setSKU)}
          {form('Name',Name,setName)}
          {form('Price',Price,setPrice,'$','')}
            <div className={s.form}>
              <label className={s.lform}>Switch type</label>
              <select id="select" onChange={selection}>
                <option value="zero" selected>
                  Type switcher{" "}
                </option>
                <option value="DVD">DVD</option>
                <option value="Book">Book</option>
                <option value="Furniture">Furniture</option>
              </select>
            </div>
          </div>

          <Type option={props.option} Weight={Weight} setWeight={setWeight}
            setSize={setSize} Size={Size} setLength={setLength} Length={Length}
            setWidth={setWidth} Width={Width} setHeight={setHeight} Height={Height}/>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
