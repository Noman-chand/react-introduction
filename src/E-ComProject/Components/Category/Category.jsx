import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();
  const { productsData } = useSelector((state) => state.apiData);
  const uniqueCategories = [...new Set(productsData.map((item) => item.category))];


  const moveToButton = (category) => {
    navigate(`/cate/${category}`);
    
  };

  return (
    <div className='flex items-center justify-center bg-fuchsia-100 mt-1'>
      <div className='w-full max-w-lg px-10 py-8 bg-pink-100 rounded-lg shadow-xl'>
        <h2 className='text-3xl font-bold mb-4'>Category</h2>
        <div className='max-w-md mx-auto space-y-6'>
          {uniqueCategories.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h1 className="mb-3 text-3xl font-extrabold text-center">{item}</h1>
              <div className="text-sm text-gray-500 -mb-2">{item.category}</div>
              <button onClick={() => moveToButton(item)} className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg hover:bg-indigo-800 h-12 px-6 m-2 text-lg">Explore {item}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
