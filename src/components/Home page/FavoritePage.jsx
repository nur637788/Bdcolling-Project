import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, clearFavorites } from "../../Redux/favoriteSlice";
import { Link } from "react-router-dom";

export default function FavoritePage() {
    const { items } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    return (
        <div className="text-black p-5">
            <h1 className="text-xl md:text-3xl font-bold mb-4">Your Favorite Products</h1>

            <p className="mb-4 md:text-xl">
                Total Favorites: <span className="font-bold">{items.length}</span>
            </p>

            {items.length === 0 ? (
                <p>No favorite products yet.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                    {items.map((item) => (
                        <Link key={item.id} to={`/details/${item.id}`}>
                            <div className="bg-gray-300 p-4 rounded relative cursor-pointer shadow-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300">

                                <img
                                    src={item.thumbnail}
                                    className="w-40 h-40 object-cover rounded m-auto" />
                                {/* Unlove Button */}
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    dispatch(toggleFavorite(item));
                                }}
                                    className="absolute top-2 right-2 text-xl hover:scale-105 duration-300 cursor-pointer">
                                    ❌
                                </button>

                                <h2 className="font-bold text-lg mt-2">{item.title.slice(0, 22)}</h2>
                                <p className="opacity-80">Price: ${item.price}</p>

                            </div>
                        </Link>
                    ))}

                </div>
            )}

            {items.length > 0 && (
                <button
                    onClick={() => dispatch(clearFavorites())}
                    className="mt-5 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">
                    Clear All Favorites
                </button>
            )}
        </div>
    );
}
