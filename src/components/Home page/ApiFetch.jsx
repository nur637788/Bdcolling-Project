import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { toggleFavorite } from "../../Redux/favoriteSlice";
import { FaCartPlus } from "react-icons/fa";


export default function ApiFetch() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.favorites);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

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

    // Search Filter data
    const filteredData = data.filter((item) => {
        const matchTitle = item.title.toLowerCase().includes(search.toLowerCase());
        const matchPrice = item.price.toString().includes(search);
        return matchTitle || matchPrice;
    });

    //  PAGINATION on Filtered Data
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const currentItems = filteredData.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

    return (
        <div className="max-w-6xl mx-auto p-5">
            {/* Search Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">

                {currentItems.map((item) => {

                    // ✅ now CALCULATED here — FIXED
                    const isFav = items.some((fav) => fav.id === item.id);

                    return (
                        <Link key={item.id} to={`/details/${item.id}`}>
                            <div className="bg-gray-100 text-black rounded-md shadow-blue-300 p-4 flex flex-col relative hover:-translate-y-1 hover:shadow-md duration-200">

                                <img src={item.thumbnail} alt="img"
                                    className="rounded w-full h-full object-cover" />
                                <h2 className="text-sm font-bold mt-2">{item.title.slice(0, 20)}</h2>
                                <h2 className="text-sm font-semibold mb-1">${item.price}</h2>

                                <div className="mt-auto flex items-center justify-between">
                                    {/* Add to Cart button*/}
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        dispatch(addToCart(item));
                                    }}
                                        className="flex items-center justify-center bg-gray-200 border border-blue-300 text-white w-10 h-10 rounded-full cursor-pointer hover:bg-gray-300 hover:scale-90 duration-300">
                                        <FaCartPlus className="text-black text-xl" />
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

            {/* Pagination */}
            <div className="my-5 flex justify-between items-center border-t border-gray-300 pt-4">

                {/* Previous Button */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-40">
                    Previous
                </button>

                {/* Number Buttons */}
                <div className="space-x-2 hidden md:block">
                    {pageNumbers.map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`px-3 py-1 rounded cursor-pointer 
                            ${currentPage === num
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200"
                                }`}>
                            {num}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-40">
                    Next
                </button>
            </div>
        </div>
    );
}
