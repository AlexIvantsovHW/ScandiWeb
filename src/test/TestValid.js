const PropertyTest=(data)=>{

  {   if (data==='MB') {
          (property='Size');
        } else if (data==='KG') {
          (property='Weight');
        } else {
          (property='Dimensions');
        }
  }
  return(property) 
}
module.exports=PropertyTest;