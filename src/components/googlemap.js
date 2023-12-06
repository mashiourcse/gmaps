import React, { useContext, useState } from 'react';
import MapContext from '../Map_context/MapContext';

const inputStyle = {
  width: '800px', // Set the desired width here
};

const GoogleMap = () => {
  const {location, setLocation, mapUrl3} = useContext(MapContext);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      /> */}
    <div style={{margin: '5px'}}>
    {/* <span>Latitude: </span><input
        type="number"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        
      />

    <span style={{paddingLeft: '5px'}}>Longitude: </span><input
        type="number"
        placeholder="Enter a location"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      /> */}
     <input
        type="text"
        placeholder="Location"
        value={location}
        style={inputStyle} 
        onChange={(e) => setLocation(e.target.value)}
        
      />
</div>
      <iframe
        title="Google Map"
        src={mapUrl3}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    
    </div>
  );
};

export default GoogleMap;
