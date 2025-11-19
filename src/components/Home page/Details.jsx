import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, setSelectedProduct, increase, decrease } from "../../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Details() {
    const navigate = useNavigate()
    const { items = [] } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const API = "https://dummyjson.com/carts";

    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(d => {
                const allProducts = d.carts.flatMap(cart => cart.products);
                const single = allProducts.find(p => p.id == id);
                setProduct(single);
            });
    }, [id]);

    if (!product) return <p className="text-red-600 text-center p-4">Loading...</p>;

    // Cart এ product আছে কি check
    const cartItem = items.find(i => i.id == product.id);

    return (
        <div className="w-3xl mx-auto p-6 text-white">
            <button onClick={() => navigate(-1)}
                className="text-pink-400 underline">
                ← Back
            </button>

            <div className="bg-gray-900 p-5 rounded-xl mt-4 shadow">
                <img src={product.thumbnail} className="rounded-lg m-auto object-cover mb-4" />

                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                <p className="opacity-80 mb-2">Category: {product.category}</p>
                <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>

                {/* Increase / Decrease buttons */}
                {cartItem && (
                    <div className="flex items-center gap-4 mb-3">
                        <button onClick={() => dispatch(decrease(product.id))} className="px-3 bg-gray-300 rounded text-black cursor-pointer">
                            -
                        </button>

                        <span className="text-xl font-bold">{cartItem.quantity}</span>

                        <button onClick={() => dispatch(increase(product.id))} className="px-3 bg-gray-300 rounded text-black cursor-pointer">
                            +
                        </button>
                    </div>
                )}

                {/* Add to Cart button */}
                {!cartItem && (
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="bg-gray-200 border border-blue-300 text-black px-2 py-1 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-95 hover:border-red-300 transition-all duration-300 mb-3"
                    >
                        🛒 Add to Cart
                    </button>
                )}

                {/* Checkout button */}
                <Link to="/singlecheckout">
                    <button
                        onClick={() => dispatch(setSelectedProduct(cartItem || product))}
                        className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
}
