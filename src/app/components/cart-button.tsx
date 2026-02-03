"use client";

import styles from "../page.module.css";

export default function CartButton() {
    const handleCartClick = () => {
        console.log("Shopping cart clicked");
        // Cart logic goes here
    };

    return (
    <button 
        className={styles.cartButton} 
        onClick={handleCartClick}
        aria-label="Shopping cart"
    >
        🛒
    </button>
    )
}