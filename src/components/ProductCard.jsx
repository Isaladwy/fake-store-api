function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div>
        <span>{'⭐'.repeat(Math.round(product.rating.rate))}</span>
        <span>{product.rating.count}</span>
      </div>
    </div>
  );
}

export default ProductCard;
