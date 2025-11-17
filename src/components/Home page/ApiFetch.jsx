import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/CartSlice'

export default function ApiFetch() {
    const [data, setData] = useState([]);
    const [love, setLove] = useState({});
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const API = "https://dummyjson.com/carts";

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((d) => {
                const allProducts = d.carts.flatMap((cart) => cart.products);
                setData(allProducts);
                console.log(allProducts)
            });

        const saved = localStorage.getItem("loveData");
        if (saved) setLove(JSON.parse(saved));
    }, []);

    function handleLove(id) {
        const prev = love[id] || { liked: false, count: 0 };
        const updatedData = {
            ...love,
            [id]: {
                liked: !prev.liked,
                count: prev.liked ? prev.count - 1 : prev.count + 1,
            },
        };
        setLove(updatedData);
        localStorage.setItem("loveData", JSON.stringify(updatedData));
    }

    // Filter data based on search and category
    const filteredData = data.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = item.price.toString().includes(search);

        return matchesSearch || matchesPrice;
    });

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Search Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-50 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredData.slice(0, 20).map((item) => (
                    <Link to={`/details/${item.id}`}>
                        <div
                            key={item.id}
                            className="bg-gray-100 text-black rounded-xl shadow p-4 flex flex-col">

                            <img src={item.thumbnail} alt="img"
                                className="rounded w-40 h-40 m-auto object-cover" />

                            <h2 className="text-sm font-bold mb-1">{item.title.slice(0, 20)}</h2>
                            <h2 className="text-sm font-semibold mb-1">${item.price}</h2>
                            <div className="mt-auto flex items-center justify-between">
                                {/* Add to Cart button */}
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    dispatch(addToCart(item))
                                }}
                                    className="bg-gray-200 border border-blue-300 text-white px-2 py-1 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-95 hover:border-red-300 transition-all duration-300">
                                    🛒
                                </button>
                                {/* Love or Unlove button */}
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    handleLove(item.id);
                                }}
                                    className=" bg-gray-200 px-1 py-1 border border-red-300 rounded-full text-xl cursor-pointer hover:bg-gray-100 hover:scale-95 hover:border-blue-300 transition-all duration-300">
                                    {love[item.id]?.liked ? "❤️" : "🩶 "}
                                </button>


                                {/* <span className="font-bold text-pink-400">
                                {love[item.id]?.count || 0}
                            </span> */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
}
