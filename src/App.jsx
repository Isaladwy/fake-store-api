import { useEffect } from 'react';

function App() {
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data);
    }
    fetchProducts()
  }, []);

  return <div></div>;
}

export default App;
