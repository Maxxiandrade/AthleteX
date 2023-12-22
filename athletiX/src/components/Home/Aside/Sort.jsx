import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortItems } from '../../../redux/actions/actions';
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

const Sort = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSort = (e) => {
    const sort = e.target.value;
    setSelectedOption(sort);
    dispatch(sortItems(sort));
  };

  return (
    <div>
      <div onClick={toggleOptions} className="cursor-pointer border-b border-stone-400 flex items-center">
        Sort {showOptions ? <HiChevronUp/> : <HiChevronDown/>}
      </div>
      {showOptions && (
        <div className="border border-gray-300 p-2 mt-2">
          <div className="cursor-pointer">
            <label>
              <input
                type="radio"
                value="A"
                checked={selectedOption === 'A'}
                onChange={handleSort}
              />{' '}
              Price-High to low
            </label>
          </div>
          <div className="cursor-pointer">
            <label>
              <input
                type="radio"
                value="B"
                checked={selectedOption === 'B'}
                onChange={handleSort}
              />{' '}
              Price-Low to High
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sort;