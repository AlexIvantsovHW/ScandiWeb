import { React } from 'react';

const Property=(props)=>{

    let property;

    
    {if (props.prop==='MB') {
      (property='Size');
    } else if (props.prop==='KG') {
      (property='Weight');
    } else {
      (property='Dimensions');
    }
}
    return(
        <div className='property'>
            <h3>{property}100{props.prop}</h3>
        </div>
    )
}
export default Property;