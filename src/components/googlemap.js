import React, { useState } from 'react';

const GoogleMap = () => {
  
  const [location, setLocation] = useState('New+York'); // Hardcoded location for testing
  const [latitude, setLatitude] = useState(0);
const [longitude, setLongitude] = useState(0);

  // Construct the Google Maps URL with the user's entered location
  const mapUrl = `http://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      /> */}
    <div style={{margin: '5px'}}>
    <span>Latitude: </span><input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        
      />

    <span style={{paddingLeft: '5px'}}>Longitude: </span><input
        type="text"
        placeholder="Enter a location"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
</div>
      <iframe
        title="Google Map"
        src={mapUrl}
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
