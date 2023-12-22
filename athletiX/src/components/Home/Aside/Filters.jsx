import React, { useEffect, useState } from 'react';
import { brandFilters, sportFilters, clearFilters } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
const Filters = () => {

  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [showBrands, setShowBrands] = useState(false)
  const [showSports, setShowSports] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedSport, setSelectedSport] = useState(null);


  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const toggleBrands = ()=>{
    setShowBrands((prev)=>!prev)
  }

  const toggleSports = ()=>{
    setShowSports((prev)=>!prev)
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleBrandFilter=(e)=>{
    setSelectedBrand(null)
    const brand = e.target.value
    setSelectedBrand(brand);
    dispatch(brandFilters(brand))
 
  }

  const handleSportFilter=(e)=>{
    const sport = e.target.value
    dispatch(sportFilters(sport))
    setSelectedSport(sport);
    
  }
  document.querySelectorAll('input[type="checkbox"][value^="brand"]').forEach((checkbox) => {
    if (checkbox.value !== brand) {
      checkbox.checked = false;
    }
  });

  const handleClear = ()=>{
    dispatch(clearFilters())
    setSelectedBrand(null)
    setSelectedSport(null)
  }
  const brandsOptions = (
    <>
    <div className='cursor-pointer border border-gray-300'>

      <label className='cursor-pointer border border-gray-300'>
        <input type="radio" value="nike" onChange={handleBrandFilter} checked={selectedBrand === 'nike'} /> Nike
      </label>
      <br />
      <label>
        <input type="radio" value="adidas" onChange={handleBrandFilter} checked={selectedBrand === 'adidas'}/> Adidas
      </label>
      <br />
      <label>
        <input type="radio" value="Wilson" onChange={handleBrandFilter} checked={selectedBrand === 'Wilson'}/> Wilson
      </label>
      <br />
      <label>
        <input type="radio" value="G-Fitness" onChange={handleBrandFilter} checked={selectedBrand === 'G-Fitness'}/> G-Fitness
      </label>
    </div>
    </>
  );

  const sportsOptions = (
    <>
    <div className='cursor-pointer border border-gray-300'>
      <label className='cursor-pointer border border-gray-300 '>
        <input type="radio" value="futbol" onChange={handleSportFilter} checked={selectedSport === 'futbol'} /> Soccer
      </label>
      <br />
      <label>
        <input type="radio" value="basketball" onChange={handleSportFilter} checked={selectedSport === 'basketball'}/> Basketball
      </label>
      <br />
      <label>
        <input type="radio" value="Tenis" onChange={handleSportFilter} checked={selectedSport === 'Tenis'}/> Tenis
      </label>
      <br />
      <label>
        <input type="radio" value="Gim" onChange={handleSportFilter} checked={selectedSport === 'Gim'}/> Gim
      </label>
      <br />
      <label>
        <input type="radio" value="Contact" onChange={handleSportFilter} checked={selectedSport === 'Contact'}/> Contact 
      </label>
    </div>
    </>
  );

  return (
    <>
    <div>
      <div onClick={toggleOptions} className='cursor-pointer '>Filter:</div>
      {showOptions && (
      <div>
        <div onClick={toggleBrands} className='cursor-pointer border border-gray-300'>Brands</div>
        {showBrands && brandsOptions}
        
        <div onClick={toggleSports} className='cursor-pointer border border-gray-300'>Sports</div>
        {showSports && sportsOptions}
        {showSports || showBrands ? <><p className='cursor-pointer' onClick={handleClear}>Clear filters</p></> : ''}
      </div>
      )}
    </div>
    </>
  );
};

export default Filters;