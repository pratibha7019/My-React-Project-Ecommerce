
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>

        <div className="product-actions">
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button
            className="go-back-btn"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
    const styles = {
    container: {
        maxWidth: "800px",
        margin: "50px auto",
        padding: "30px",
        boxShadow: "0 0 20px rgba(138, 43, 226, 0.5)",
        borderRadius: "15px",
        backgroundColor: "#1e1e2f",
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: "center",
        color: "#f8f8ff"
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 0 15px #8a2be2"
    },
    name: {
        fontSize: "2.5rem",
        marginBottom: "15px",
        color: "#da70d6", // orchid/neon violet
        textShadow: "0 0 5px #ff00ff"
    },
    description: {
        fontSize: "1.2rem",
        marginBottom: "20px",
        color: "#c0c0ff"
    },
    price: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#39ff14", // neon green
        marginBottom: "25px",
        textShadow: "0 0 5px #00ff00"
    },
    button: {
        padding: "14px 30px",
        fontSize: "1.1rem",
        backgroundColor: "#8a2be2", // blue violet
        color: "#fff",
        border: "2px solid #da70d6",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textShadow: "0 0 3px #fff"
    }
};
