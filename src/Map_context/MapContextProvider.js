import React, { useState } from 'react'
import MapContext from './MapContext';
export const MapContextProvider = ({ children }) => {
    const [myVariable, setMyVariable] = useState('default value');
  
    const [location, setLocation] = useState('Chittagong'); // Hardcoded location for testing
    const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  
    
    const mapUrl = `http://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;
   // const mapUrl2 = `https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, 8th Avenue, New York, NY, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`;
  const mapUrl3 = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    return (
      <MapContext.Provider value={{ location,setLocation, mapUrl3 }}>
        {children}
      </MapContext.Provider>
    );
  };
  
