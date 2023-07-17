import { React} from "react";
import s from "./style.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const  ProdList=(props)=>{
  let deleteId=[];
  const massDelete=()=>{

    let fData= new FormData();
    fData.append("id",1);

    const url="http://localhost/my-app/src/server/TestPHP.php";
    debugger;
   /*  const data=JSON.stringify(props.ReqData.Data.deleteID); */
    const data=JSON.stringify('txt')/* JSON.stringify([55,65]) */;
    axios({
      method: "post",
      url: url,
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response.response.data);
    });
    debugger;
  }
  const IdToDell=(id)=>{
    deleteId.push(id);
    props.deleteIdAC(id);

  }

  const propWay=props.ReqData.Data.products;
  const itemElements = propWay.map((el) => {
    return (
      <div className={s.ProdContainer}>
        <input 
        className={s.btn_chk}
        type='checkbox' name={el.SKU} checked={el?.isChecked||false}
        onChange={()=>IdToDell(el.id)}/>
        <div className={s.cont}><div className={s.subContL}>SKU:</div><div className={s.subContR}>{el.SKU}</div></div>
        <div className={s.cont}><div className={s.subContL}>Name:</div><div className={s.subContR}>{el.Name}</div></div>
        <div className={s.cont}><div className={s.subContL}>Price:</div><div className={s.subContR}>{el.Price}$</div></div>
        <div className={s.cont}><div className={s.subContL}>Size:</div><div className={s.subContR}>{el.Size}</div></div>
      </div>
    );
  });
  return (
    <div className={s.PLcontainer}>
      <div className={s.header}>
        <div className={s.subHeadTxt}>Product List</div>
        {/* <div className={s.subHead}><NavLink to="/prodAdd"><button className={s.btnAdd}>Add</button></NavLink></div> */}
        <div className={s.subHead}><button className={s.btnDel} onClick={massDelete}>Mass delete</button></div>
     </div>
      
      <div className={s.subcontainer}>
        
        <form>
          {itemElements}
        </form>
      </div>
    </div>
  );
}

export default ProdList;
