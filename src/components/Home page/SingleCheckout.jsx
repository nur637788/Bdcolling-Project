import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function SingleCheckout() {
    const { selectedProduct } = useSelector(state => state.cart);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleForm = (e) => {
        e.preventDefault();

        // VALIDATION
        if (name.length < 3) {
            alert("Name must be at least 3 characters!");
            return;
        }

        if (phone.length !== 11) {
            alert("Phone number must be 11 digits!");
            return;
        }

        if (address.length < 10) {
            alert("Address must be at least 10 characters!");
            return;
        }

        // ORDER OBJECT
        const order = {
            id: Date.now(),
            name,
            phone,
            address,
            selectedProduct,
            date: new Date().toLocaleString()
        };

        // SAVE TO LOCALSTORAGE (ADMIN PAGE WILL READ THIS)
        const oldOrders = JSON.parse(localStorage.getItem("order")) || [];
        oldOrders.push(order);
        localStorage.setItem("order", JSON.stringify(oldOrders));

        alert("Order placed successfully!");

        // Clear form
        setName("");
        setPhone("");
        setAddress("");
    };

    if (!selectedProduct) {
        return <h2 className="text-center text-xl mt-10">No product selected for checkout</h2>;
    }

    return (
        <div className="w-2xl mx-auto p-6 border rounded m-5 ">
            <h1 className="text-2xl text-center font-bold mb-4">Checkout Form 🛄</h1>

            {/* Product Summary */}
            <div className="border p-4 rounded mb-6">
                <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

                <div className="flex justify-between mb-2 border-b pb-2">
                    <div>
                        <p className="font-medium">{selectedProduct.title}</p>
                        <p className="text-sm text-gray-600">
                            Qty: {selectedProduct.quantity}
                        </p>
                    </div>

                    <p className="font-semibold">
                        ${selectedProduct.total.toFixed(2)}
                    </p>
                </div>

                <div className="flex justify-between mt-4 text-lg font-bold">
                    <p>Total ({selectedProduct.quantity} items)</p>
                    <p>${selectedProduct.total.toFixed(2)}</p>
                </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleForm} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                        type="number"
                        placeholder="01XXXXXXXXX"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Full Address</label>
                    <textarea
                        placeholder="House, Road, City"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="w-full p-2 border rounded"
                        rows="3"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold">
                    Confirm Order
                </button>
            </form>
        </div>
    );
}
