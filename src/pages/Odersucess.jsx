import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundColor: "#0a0a0a", // dark background to make neon colors pop
            padding: "20px",
            fontFamily: "'Segoe UI', sans-serif",
            color: "#fff" // Ensures text is readable against dark background
        },
        title: {
            fontSize: "3rem",
            color: "#8A2BE2", // Neon Violet
            marginBottom: "20px",
            textShadow: "0 0 10px #8A2BE2, 0 0 20px #8A2BE2, 0 0 30px #8A2BE2" // Neon effect
        },
        message: {
            fontSize: "1.5rem",
            color: "#E6E6FA", // Lavender color for softer contrast
            marginBottom: "30px",
            textShadow: "0 0 10px #E6E6FA, 0 0 20px #E6E6FA" // Neon effect
        },
        button: {
            padding: "12px 25px",
            fontSize: "1.2rem",
            backgroundColor: "#FF00FF", // Neon magenta
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background 0.3s ease",
            textDecoration: "none",
            textShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF",
            boxShadow: "0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF"
        },
        buttonHover: {
            backgroundColor: "#BA55D3", // Deep Orchid for hover effect
            textShadow: "0 0 15px #BA55D3, 0 0 30px #BA55D3"
        }
    };

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
        e.target.style.textShadow = styles.buttonHover.textShadow;
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
        e.target.style.textShadow = styles.button.textShadow;
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>🎉 Order Placed Successfully!</h1>
            <p style={styles.message}>Thank you for shopping with us.</p>
            <a
                href="/"
                style={styles.button}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Go to Home
            </a>
        </div>
    );
}
