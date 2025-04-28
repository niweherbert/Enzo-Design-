import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Custom Sandal", price: 20 },
  { id: 2, name: "Custom T-shirt", price: 15 },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link to="/cart" className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
