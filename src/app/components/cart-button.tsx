"use client"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import styles from "../page.module.css"

export default function CartButton() {
  const handleCartClick = () => {
    console.log("Shopping cart clicked")
    // Cart logic goes here
  }

  return (
    <>
      <ShoppingCartIcon
        onClick={handleCartClick}
        className={styles.cartButton}
      />
    </>
  )
}
