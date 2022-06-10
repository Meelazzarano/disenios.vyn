import React, { useState } from 'react';

const ItemCounter = ({onAdd}) => {

  const [count, setCount] = useState(1);

  const handleSubstract = () => {
    if (count > 1) {
      setCount((counter) => counter - 1);
    }
  };
  const handleAdd = () => {
      setCount((counter) => counter + 1);
  };

  return (
    <div>
      <div className='flex'>
        <button className="mx-2 text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded" onClick={handleSubstract}>-</button>
        <span className='py-1 m-2'>{count}</span>
        <button className="mx-2 text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded" onClick={handleAdd}>+</button>
        <span className='py-1 m-2'> Metros </span>
      </div>
      <button className="block m-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={() => onAdd (count)}> Agregar a Mi carrito</button>
    </div>
  );
};

export default ItemCounter;