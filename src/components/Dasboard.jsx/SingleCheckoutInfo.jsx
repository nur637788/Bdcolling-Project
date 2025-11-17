import React, { useEffect, useState } from "react";

export default function Admin() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("order"));
        setOrders(data || []);
    }, []);

    // DELETE ORDER
    const deleteOrder = (id) => {
        if (!confirm("Are you sure you want to delete this order?")) return;

        const filtered = orders.filter(order => order.id !== id);

        localStorage.setItem("order", JSON.stringify(filtered));
        setOrders(filtered);

        alert("Order deleted successfully!");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl text-center font-bold mb-4">Single Orders Info 🗂</h1>

            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                orders.map(order => (
                    <div key={order.id} className="border p-4 rounded mb-4">

                        <h2 className="font-bold">Order #{order.id}</h2>
                        <p>Name: {order.name}</p>
                        <p>Phone: {order.phone}</p>
                        <p>Address: {order.address}</p>
                        <p>Date: {order.date}</p>

                        <h3 className="font-semibold mt-2">Products:</h3>

                        {/* CASE 1: Multiple product */}
                        {order.items && (
                            <ul className="list-disc ml-6">
                                {order.items.map(p => (
                                    <li key={p.id}>
                                        {p.title} (x{p.quantity}) - ${p.total.toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* CASE 2: Single product */}
                        {order.selectedProduct && (
                            <ul className="list-disc ml-6">
                                <li>
                                    {order.selectedProduct.title} (x{order.selectedProduct.quantity})
                                    - ${order.selectedProduct.total.toFixed(2)}
                                </li>
                            </ul>
                        )}

                        {/* TOTAL PRICE */}
                        <p className="font-bold mt-2">
                            Total: $
                            {order.totalPrice
                                ? order.totalPrice.toFixed(2)
                                : order.selectedProduct?.total.toFixed(2)}
                        </p>

                        <button
                            onClick={() => deleteOrder(order.id)}
                            className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                        >
                            Delete Order
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
