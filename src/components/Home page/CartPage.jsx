import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increase, decrease } from "../../Redux/CartSlice";
import { setSelectedProduct } from "../../Redux/CartSlice";

import { Link } from "react-router-dom";

export default function Cart() {
    const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

            {items.length === 0 ? (
                <p className="text-lg">Cart is Empty 📪</p>
            ) : (
                <div className="space-y-4">

                    {items.map(item => (
                        <div key={item.id} className="flex flex-wrap gap-4 items-center justify-between p-4 border rounded">
                            <div className="flex items-center gap-4">
                                <img src={item.thumbnail} className="w-20 h-20 rounded" />
                                <div>
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p>${item?.total ? item.total.toFixed(2) : '0.00'}</p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                {/* quantity Plus Minus buttons */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => dispatch(decrease(item.id))}
                                        className="px-3 py-1 bg-gray-300 rounded cursor-pointer" >
                                        -
                                    </button>

                                    <span className="text-lg font-semibold">{item.quantity}</span>

                                    <button
                                        onClick={() => dispatch(increase(item.id))}
                                        className="px-3 py-1 bg-gray-300 rounded cursor-pointer">
                                        +
                                    </button>
                                </div>

                                {/* Product Checkout button */}
                                <div>
                                    <Link to="/singlecheckout">
                                        <button
                                            onClick={() => dispatch(setSelectedProduct(item))}
                                            className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer">
                                            Checkout
                                        </button>
                                    </Link>
                                </div>
                                {/* Product Remove button */}
                                <div>
                                    <button
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                        className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded cursor-pointer">
                                        Remove
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}

                    {/* All Checkout button */}
                    <div className="text-right mt-6 border-t pt-3 space-y-2">
                        <h2 className="text-xl font-bold">Total Items: {totalQuantity}</h2>
                        <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
                        <Link to="/totalcheckout">
                            <button className="mt-2 bg-green-600 hover:bg-green-700 hover:scale-95 duration-300 text-white px-5 py-2 rounded cursor-pointer">
                                Checkout All
                            </button>
                        </Link>
                    </div>

                </div>
            )}
        </div>
    );
}
