function ProductCard({ product }) {
  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-500 mb-2">${product.price}</p>
      <div className="flex items-center">
        <span className="text-yellow-400">{'⭐'.repeat(Math.round(product.rating.rate))}</span>
        <span className="ml-2 text-gray-600">({product.rating.count})</span>
      </div>
    </div>
  );
}

export default ProductCard;
