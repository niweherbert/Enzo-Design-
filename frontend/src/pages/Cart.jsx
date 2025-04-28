import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <p className="mb-4">Items will be shown here...</p>
      <Link to="/checkout" className="bg-green-500 text-white px-4 py-2 rounded">
        Proceed to Checkout
      </Link>
    </div>
  );
}
