import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import './CSS/Payments.css';

function Payment() {
    // const [amount,setAmount] = useState('');
    // const[amt , setamount] = useState('');
    const{getTotalCartAmount}=useContext(ShopContext)

  const handlePayment =(e)=>{
      e.preventDefault();
      if(getTotalCartAmount()===0){
        alert("please select product")

      }else{
        var options = {
            key: "rzp_test_AQcWvXY8SA8Atg",
            key_secret: "1WMZLTjpqygf6r5ZczGkt1YN",
            amount: getTotalCartAmount()*100,
            currency: 'INR',
            name: 'antique',
            description: 'Payment for products',
            handler: function (response) {
              alert(response.razorpay_payment_id);
            },
            prefill: {
                    name: "yamuna",
                    email: "yamunaramasamy69@gmail.com",
                    contact: "6383812363"
                },
                notes:{
                  address:"Razorpay Corporate Office"
                },
                theme: {
                        color: '#3399cc'
                    } 
      };
        var pay = new window.Razorpay(options);
        pay.open();
  }}

    return (
        <div className="payment">
            <h2>Payment</h2>
            <br/>
           <h1> {getTotalCartAmount()}</h1>
            <br/><br/>
            <button onClick={(e)=>{handlePayment(e)}}>submit</button>
        </div>
    )
}

export default Payment;