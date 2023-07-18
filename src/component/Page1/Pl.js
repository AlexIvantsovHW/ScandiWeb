import { React, useState} from "react";
import s from "./style.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const  ProdList=(props)=>{
  const [Id, setId] = useState(0)

const Delete=()=>{
  // POST ID TO DELETE FROM DB
  let fData= new FormData();
  fData.append("id",Id);
        axios({
        method: "post",
        url: "http://localhost/my-app/src/server/delete.php",
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
  // UPDATE PRODUCT LIST FROM THE DB
        const url2="http://localhost/my-app/src/server/data.php";
        axios
            .get(url2).then(response=>response.data)
            .then((data)=>{props.formAC({data})});
}

  const propWay=props.ReqData.Data.products;
  const itemElements = propWay.map((el) => {
  let Type; 
  if(el.size){Type= <div className={s.cont}><div className={s.subContL}>Size (MB):</div><div className={s.subContR}>{el.size}</div></div>}
  else if(el.weight){Type= <div className={s.cont}><div className={s.subContL}>Weight (Kg):</div><div className={s.subContR}>{el.weight}</div></div>}
  else{
    Type=(
      <div>
        <div className={s.cont}><div className={s.subContL}>Height (m):</div><div className={s.subContR}>{el.height}</div></div>
        <div className={s.cont}><div className={s.subContL}>Width (m):</div><div className={s.subContR}>{el.width}</div></div>
        <div className={s.cont}><div className={s.subContL}>Length (m):</div><div className={s.subContR}>{el.length}</div></div>
      </div>)
     } 
  //__________________________ MAIN COMPONENT BODY__________________________   
    return (
      <div className={s.ProdContainer}>
        <div className="chk_cont"><input className="delete-checkbox" type="checkbox" onChange={() => {Delete(setId(el.id))}}/></div>
        <div className={s.cont}><div className={s.subContL}>SKU:</div><div className={s.subContR}>{el.sku}</div></div>
        <div className={s.cont}><div className={s.subContL}>Name:</div><div className={s.subContR}>{el.name}</div></div>
        <div className={s.cont}><div className={s.subContL}>Price ($):</div><div className={s.subContR}>{el.price}</div></div>
        {Type}
      </div>
    );    
  });
  
  return (
    <div className={s.PLcontainer}>
      <div className={s.header}>
        <div className={s.subHeadTxt}>Product List</div>
        <div className={s.subHead}><button id='delete-product-btn' className={s.btnDel}  onClick={Delete}>MASS DELETE</button></div>
        <div className={s.subHead}><NavLink to='/prodAdd'><button className={s.btnDel}>ADD</button></NavLink></div>
     </div>  
      <div className={s.subcontainer}>
        <form >
          {itemElements}
        </form>
      </div>
    </div>
  );
}
export default ProdList;