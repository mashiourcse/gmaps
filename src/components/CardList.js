import React from 'react';
import AddressCard from './AddressCard';

const CardList = ({ addresses }) => {
  return (
    <div className="card-list">
      {addresses.map((address, index) => (
        <AddressCard
          key={index}
          name={address.name}
          details={address.details}
        />
      ))}
    </div>
  );
};

export default CardList;
