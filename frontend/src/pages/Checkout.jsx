import axios from 'axios';
import { useState } from 'react';

export default function Checkout() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/payment/pay', {
        amount: 30, // Example amount
        phoneNumber,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Payment failed');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <input
        type="text"
        placeholder="Enter your phone number"
        className="border p-2 mb-4 block w-full"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        onClick={handlePayment}
        className="bg-purple-600 text-white px-6 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}
