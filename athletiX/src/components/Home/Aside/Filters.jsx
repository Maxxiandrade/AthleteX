import React, { useEffect, useState } from 'react';
import { brandFilters, sportFilters, clearFilters, movePage } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";


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
    setShowBrands(null)
    setShowSports(null)
  };

  const toggleBrands = ()=>{
    setShowBrands((prev)=>!prev)
  }

  const toggleSports = ()=>{
    setShowSports((prev)=>!prev)
  }



  const handleBrandFilter=(e)=>{
    dispatch(movePage(1))
    dispatch(clearFilters())
    setSelectedBrand(null)
    const brand = e.target.value
    setSelectedBrand(brand);
    dispatch(brandFilters(brand))
 
  }

  const handleSportFilter=(e)=>{
    dispatch(movePage(1))
    dispatch(clearFilters())
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
    <div className='cursor-pointer border  font-normal'>

      <label className='cursor-pointer border'>
        <input type="radio" value="nike" onChange={handleBrandFilter} checked={selectedBrand === 'nike'} /> Nike
      </label>
      <br /> 
      <label className='cursor-pointer'>
        <input type="radio" value="adidas" onChange={handleBrandFilter} checked={selectedBrand === 'adidas'}/> Adidas
      </label>
      <br />
      <label className='cursor-pointer '>
        <input type="radio" value="Wilson" onChange={handleBrandFilter} checked={selectedBrand === 'Wilson'}/> Wilson
      </label>
      <br />
      <label className='cursor-pointer'>
        <input type="radio" value="G-Fitness" onChange={handleBrandFilter} checked={selectedBrand === 'G-Fitness'}/> G-Fitness
      </label>
      <br />
      <label className='cursor-pointer'>
        <input type="radio" value="DRB" onChange={handleBrandFilter} checked={selectedBrand === 'DRB'}/> DRB
      </label>
    </div>
    </>
  );

  const sportsOptions = (
    <>
    <div className='cursor-pointer  font-normal'>
      <label className='cursor-pointer  '>
        <input type="radio" value="futbol" onChange={handleSportFilter} checked={selectedSport === 'futbol'} /> Soccer
      </label>
      <br />
      <label className='cursor-pointer'>
        <input type="radio" value="basketball" onChange={handleSportFilter} checked={selectedSport === 'basketball'}/> Basketball
      </label>
      <br />
      <label className='cursor-pointer'>
        <input type="radio" value="Tenis" onChange={handleSportFilter} checked={selectedSport === 'Tenis'}/> Tenis
      </label>
      <br />
      <label className='cursor-pointer'>
        <input type="radio" value="Gim" onChange={handleSportFilter} checked={selectedSport === 'Gim'}/> Gim
      </label>
      <br />
      <label className='cursor-pointer'>
        <input type="radio" value="Contact" onChange={handleSportFilter} checked={selectedSport === 'Contact'}/> Contact 
      </label>
    </div>
    </>
  );

  return (
    <>
    <div>
    <div onClick={toggleOptions} className='cursor-pointer font-medium flex items-center border-b border-stone-400'>
  Filters{showOptions ? <HiChevronUp /> : <HiChevronDown />}
</div>
      {showOptions && (
      <div>
        <div onClick={toggleBrands} className='cursor-pointer  font-medium flex items-center border-b border-stone-400'>Brands{showBrands ? <HiChevronUp /> : <HiChevronDown />}</div>
        {showBrands && brandsOptions}
        
        <div onClick={toggleSports} className='cursor-pointer  font-medium flex items-center border-b border-stone-400'>Sports{showSports ? <HiChevronUp /> : <HiChevronDown />}</div>
        {showSports && sportsOptions}
        {showSports || showBrands ? <><p className='cursor-pointer' onClick={handleClear}>Clear filters</p></> : ''}
      </div>
      )}
    </div>
    </>
  );
};

export default Filters;