import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../content/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");
    const [toast, setToast] = useState(""); // flash message

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [productId, products]);
    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Product data */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Gallery */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="order-2 sm:order-1 sm:w-[18%] flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
                            {productData.image.map((item, index) => {
                                const isActive = item === image;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => setImage(item)}
                                        className={`flex-shrink-0 w-20 h-24 sm:w-full sm:h-24 rounded-md overflow-hidden border transition-all ${
                                            isActive ? "border-gray-900 ring-2 ring-gray-900" : "border-gray-200 hover:border-gray-300"
                                        }`}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <img
                                            src={item}
                                            alt={productData.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Main image */}
                        <div className="order-1 sm:order-2 flex-1">
                            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                                <img
                                    className="w-full h-auto object-cover"
                                    src={image}
                                    alt={productData.name}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="lg:pl-6 lg:sticky lg:top-24 self-start">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">{productData.name}</h1>
                            <span className="text-price">{currency}{productData.price}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex items-center gap-1">
                                <img src={assets.star_icon} className="w-4 h-4" alt="" />
                                <img src={assets.star_icon} className="w-4 h-4" alt="" />
                                <img src={assets.star_icon} className="w-4 h-4" alt="" />
                                <img src={assets.star_icon} className="w-4 h-4" alt="" />
                                <img src={assets.star_dull_icon} className="w-4 h-4" alt="" />
                            </div>
                            <p className="text-meta">(122 reviews)</p>
                        </div>

                        {/* Description */}
                        <p className="mt-5 text-gray-600">
                            {productData.description}
                        </p>

                        {/* Size selector */}
                        <div className="mt-8">
                            <div className="flex items-center justify-between mb-3">
                                <p className="font-medium">Select size</p>
                                {size && <span className="text-meta">Selected: {size}</span>}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {productData.sizes.map((item, index) => {
                                    const isSelected = item === size;
                                    return (
                                        <button
                                            onClick={() => setSize(item)}
                                            className={`px-4 py-2 rounded-md border text-sm transition-all ${
                                                isSelected
                                                    ? "bg-gray-900 text-white border-gray-900"
                                                    : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100"
                                            }`}
                                            key={index}
                                            aria-pressed={isSelected}
                                            aria-label={`Select size ${item}`}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                                           {/* CTA */}
                    <div className="mt-6 flex items-center gap-3">
                        <button
                            onClick={() => {
                                if (!size) return;
                                addToCart(productData._id, size);
                                setToast("Product added to cart");
                                setTimeout(() => setToast(""), 1800);
                            }}
                            className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                                size
                                    ? "bg-gray-900 text-white hover:bg-gray-800"
                                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                            }`}
                            disabled={!size}
                        >
                            ADD TO CART
                        </button>
                        <button className="px-6 py-3 rounded-md text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors">
                            BUY NOW
                        </button>
                    </div>

                    {/* Flash / toast */}
                    {toast && (
                        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
                            <div className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md shadow-lg">
                                {toast}
                            </div>
                        </div>
                    )}

                        {/* Trust badges */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-meta">
                            <div className="border rounded-md px-3 py-3">100% Original Product</div>
                            <div className="border rounded-md px-3 py-3">Cash on Delivery Available</div>
                            <div className="border rounded-md px-3 py-3">Easy 7-day Returns</div>
                        </div>
                    </div>
                </div>

                {/* Description & Reviews */}
                <div className="mt-16">
                    <div className="flex">
                        <b className="border px-5 py-3 text-sm">Description</b>
                        <p className="border px-5 py-3 text-sm">Reviews (122)</p>
                    </div>
                    <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, ullam quisquam. Molestias aliquid in quam ad, culpa dolores adipisci repudiandae!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla saepe exercitationem sed magnam perferendis?
                        </p>
                    </div>
                </div>

                {/* Related products */}
                <div className="mt-16">
                    <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
                </div>
            </div>
        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};

export default Product;