import React from 'react'
import GoogleMap from '../components/googlemap'
import AddressCard from '../components/AddressCard'
import CardList from '../components/CardList';

export const MainPage = () => {

    const addresses = [
        { name: 'Smart Framework', details: 'Details 1' },
        { name: 'Brain Station 23', details: 'Details 2' },
        // Add more addresses as needed
      ];

  return (
    <div>

        <GoogleMap/>

        <div >
        <CardList addresses={addresses} />
    </div>
    </div>
  )
}
