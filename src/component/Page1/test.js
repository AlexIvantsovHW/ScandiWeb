import { React} from "react";

import axios from "axios";
;

const  Test=()=>{
  
const OnClick=()=>{
   let fData= new FormData();
    fData.append(1);
    fData.append(2);
    fData.append(3);
    
    axios({
        method: "post",
        url: "http://localhost/my-app/src/server/MidleLayer.php",
        data: fData,
      }).then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });
}
  return (
    <div >
      <button onClick={OnClick}>Test</button>
    </div>
  );
}

export default Test;
