import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { toggleFavorite } from "../../Redux/favoriteSlice";

export default function ApiFetch() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.favorites);

    const API = "https://dummyjson.com/carts";

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((d) => {
                const allProducts = d.carts.flatMap((cart) => cart.products);
                setData(allProducts);
            })
            .catch(() => setData([]));
    }, []);
    if (!data || data.length === 0) {
        return <p className="text-red-600 text-center p-4">Loading...</p>;
    }

    // Filter data
    const filteredData = data.filter((item) => {
        const matchTitle = item.title.toLowerCase().includes(search.toLowerCase());
        const matchPrice = item.price.toString().includes(search);
        return matchTitle || matchPrice;
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Search Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                {filteredData.slice(0, 30).map((item) => {

                    // ✅ now CALCULATED here — FIXED
                    const isFav = items.some((fav) => fav.id === item.id);

                    return (
                        <Link key={item.id} to={`/details/${item.id}`}>
                            <div className="bg-gray-100 text-black rounded-xl shadow p-4 flex flex-col relative hover:-translate-y-2 duration-200">

                                <img src={item.thumbnail} alt="img"
                                    className="rounded w-full h-40 object-cover" />
                                <h2 className="text-sm font-bold mt-2">{item.title.slice(0, 20)}</h2>
                                <h2 className="text-sm font-semibold mb-1">${item.price}</h2>

                                <div className="mt-auto flex items-center justify-between">
                                    {/* Add to Cart button*/}
                                    <button onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            dispatch(addToCart(item));
                                        }}
                                        className="bg-gray-200 border border-blue-300 text-white w-10 h-10 rounded-full cursor-pointer hover:bg-gray-300 hover:scale-90 duration-300">
                                        🛒
                                    </button>

                                    {/* Favorite button*/}
                                    <button onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            dispatch(toggleFavorite(item));
                                        }}
                                        className="bg-gray-200 border border-blue-300 text-white w-10 h-10 rounded-full hover:bg-gray-300 hover:scale-90 duration-300 text-2xl cursor-pointer">
                                        {isFav ? "❤️" : "🤍"}
                                    </button>
                                </div>
                            </div>
                        </Link>
                    );
                })}

            </div>
        </div>
    );
}
