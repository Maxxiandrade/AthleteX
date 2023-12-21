import React, { useState } from 'react';

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const brandsOptions = (
    <>
      <label>
        <input type="checkbox" value="nike" /> Nike
      </label>
      <label>
        <input type="checkbox" value="adidas" /> Adidas
      </label>
      {/* Agrega más marcas aquí según sea necesario */}
    </>
  );

  const sportsOptions = (
    <>
      <label>
        <input type="checkbox" value="soccer" /> Soccer
      </label>
      <label>
        <input type="checkbox" value="basketball" /> Basketball
      </label>
      {/* Agrega más deportes aquí según sea necesario */}
    </>
  );

  return (
    <>
      <span>Filter:</span>
      <select name="" id="" onChange={handleSelectChange}>
        <option value="">-- Select --</option>
        <option value="brands">Brands</option>
        <option value="sports">Sports</option>
      </select>

      {selectedOption === 'brands' && brandsOptions}
      {selectedOption === 'sports' && sportsOptions}
    </>
  );
};

export default Filters;