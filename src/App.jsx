import { useEffect, useState } from 'react';
import Loader from './components/Loader';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return <div className="text-center text-red-500 py-20">{error}</div>;

  return (
    <div>
      <h1>Product Listing</h1>
      <div>
        {products.map((product) => (
          <span>Product ({product.id})</span>
        ))}
      </div>
    </div>
  );
}

export default App;
