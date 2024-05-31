import React, { useState } from "react";
import './CSS/CheckoutPage.css'
import { Link } from "react-router-dom";

const CheckoutPage = () => {
    const [formData,setFormData] = useState({
        name: "",
        email: "",
        address: "",
        mobileno: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const checkout = async (e) => {
        console.log("form submitted",formData);
        let response;
            await fetch('http://localhost:4000/checkout', {
                method: 'POST',
                headers: {
                    Accept:'application/form-data',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle successful checkout
                console.log('Checkout successful!');
            } else {
                console.error('Error during checkout:', response.statusText);
            }
        }

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            <form onSubmit={checkout}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={changeHandler}
                    required
                />
                <label htmlFor="mobileno">Mobile No:</label>
                <input
                    type="text"
                    id="mobileno"
                    name="mobileno"
                    value={formData.mobileno}
                    onChange={changeHandler}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <div className="payments">
                <h3>Going to payment page</h3>
                <Link to='/payment'><button>Payment</button></Link>
            </div>
        </div>
    );
};

export default CheckoutPage;
