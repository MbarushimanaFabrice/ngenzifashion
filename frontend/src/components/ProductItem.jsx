import React, { useContext } from "react";
import { ShopContext } from "../content/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            className="group block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200" 
            to={`/product/${id}`}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-50">
                <img
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    src={image[0]}
                    alt={name}
                />
                {/* Hover overlay with quick view effect */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                            Quick View
                        </div>
                    </div>
                </div>
                {/* Price badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-gray-800 shadow-sm">
                    {currency}{price}
                </div>
            </div>
            
            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-2 group-hover:text-gray-700 transition-colors duration-200 mb-2">
                    {name}
                </h3>
                
                {/* Price and Rating Row */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        {/* Star Rating */}
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg 
                                    key={i} 
                                    className={`w-3 h-3 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="text-xs text-gray-500 ml-1">(4.2)</span>
                        </div>
                    </div>
                    
                    {/* Price */}
                    <p className="text-lg font-bold text-gray-900">
                        {currency}{price}
                    </p>
                </div>
                
                {/* Add to Cart Button (appears on hover) */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;