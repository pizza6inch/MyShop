import "./ProductCard.css";
import Star from "../../../assets/Star.svg";
import StarEmpty from "../../../assets/StarEmpty.svg";
function ProductCard({ product }) {
  if (!product) return <div>Product not found</div>;
  return (
    <div className="Product-card">
      <img src="https://fakeimg.pl/250x100/000000/" alt={product.name} />
      <div className="Title">{product.title}</div>
      <div className="Info-Wrapper">
        <div className="Price">${product.price}</div>
        <div className="Rating">
          <div className="Star">
            {Array.from({ length: product.rating }, (_, index) => (
              <img key={index} src={Star} alt={`Star ${index + 1}`} />
            ))}
          </div>
          <div className="StarEmpty">
            {Array.from({ length: 5 - product.rating }, (_, index) => (
              <img key={index} src={StarEmpty} alt={`Star ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="Comments">({product.comments})</div>
      </div>
    </div>
  );
}

export default ProductCard;
