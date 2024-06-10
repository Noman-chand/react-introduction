import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from '../Fetures/apiSlice';

function AllItems() {
  const { productsData } = useSelector((state) => state.apiData);
const dispatch = useDispatch();

  return (
    <>
      <div className="text-gray-800 text-xl text-center pt-4">Ecommerce Product Cart</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {productsData.map((item, index) => (
          <div key={index} className="w-full">
            <div className="shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer group">
              <div className="overflow-hidden relative">
                <img
                  className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                  src={item.image}
                  alt={item.title}
                />
                <div className="flex justify-center">
                  <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <a href="#" className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                    </a>
                    <a href="#" className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                    </a>
                    <a href="#" className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                    </a>
                    <a href="#" className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-heart transition duration-300 ease-in-out flex justify-center items-center text-gray-100"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-white">
                <a href="#" className="">
                  <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                    {item.title}
                  </h1>
                </a>
                <div className="flex py-2">
                  <p className="mr-2 text-xs text-gray-600">{item.price}</p>
                  <p className="mr-2 text-xs text-red-600 line-through">500 $</p>
                </div>
                <div className="flex">
                  <div className="">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                 <button onClick={ ()=> dispatch(addToCart(item.id))}>  <FaCartPlus /> </button>  

                  </div>
               
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllItems;
