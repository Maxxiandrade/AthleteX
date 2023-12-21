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
      <label>
        <input type="checkbox" value="Wilson" /> Wilson
      </label>
      <label>
        <input type="checkbox" value="G-Fitness" /> G-Fitness
      </label>
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
      <label>
        <input type="checkbox" value="Tenis" /> Tenis
      </label>
      <label>
        <input type="checkbox" value="Gim" /> Gim
      </label>
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