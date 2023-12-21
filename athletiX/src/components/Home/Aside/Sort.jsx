import React, { useState } from 'react';

const Sort = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSort = (criteria) => {
    // Lógica para manejar el ordenamiento según el criterio seleccionado
    console.log(`Ordenar por ${criteria}`);
    // Aquí podrías realizar la lógica para ordenar los elementos
    // según el criterio seleccionado (de mayor a menor precio, etc.)
  };

  return (
    <div>
      <div onClick={toggleOptions} className="cursor-pointer">
        Sort
      </div>
      {showOptions && (
        <div className="border border-gray-300 p-2 mt-2">
          <div onClick={() => handleSort('price-high-to-low')} className="cursor-pointer">
          <input type="checkbox" value="Tenis" /> Price-High to low
          
          </div>
          <div onClick={() => handleSort('price-low-to-high')} className="cursor-pointer">
          <input type="checkbox" value="Tenis" /> Price-Low to High
          </div>
          {/* Agrega más opciones de ordenamiento según sea necesario */}
        </div>
      )}
    </div>
  );
};

export default Sort;