import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Details() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const API = "https://dummyjson.com/carts";

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((d) => {
                const allProducts = d.carts.flatMap((cart) => cart.products);
                const single = allProducts.find((p) => p.id == id);
                setProduct(single);
            });
    }, [id]);

    if (!product) return <p className="text-white p-4">Loading...</p>;

    return (
        <div className="w-3xl mx-auto p-6 text-white">
            <Link to="/" className="text-pink-400 underline">← Back</Link>

            <div className="bg-gray-900 p-5 rounded-xl mt-4 shadow">
                <img
                    src={product.thumbnail}
                    alt="img"
                    className="rounded-lg m-auto object-cover mb-4"/>

                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                <p className="opacity-80 mb-2">Category: {product.category}</p>
                <p className="text-xl font-semibold mb-2">Price: ${product.price}</p>
                <p className="opacity-80">Quantity: {product.quantity}</p>
            </div>
        </div>
    );
}
