import React, { useContext } from 'react';
import MapContext from '../Map_context/MapContext';

const AddressCard = ({name, details}) => {
    const {location, setLocation, mapUrl3} = useContext(MapContext
        );

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{details}</p>
        
        <button className="btn btn-primary" onClick={()=>{
            setLocation(name)
        }} >{name}</button>
      </div>
    </div>
  );
}

export default AddressCard;
