// This contains all fetch/get requests for the project

import postgres from "postgres"
import { 
  Category,
  Product,
  Review,
  User,
  Order,
  Cart,
  CartItem
 } from "./definitions"

/**establish sql connection and use the sql variable to make calls to the database */
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" })

export async function fetchCategory() {
  /**try catch to handle and process errors */
  try {
    const data = await sql<Category[]>`SELECT * FROM categories`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch category data.")
  }
}

export async function fetchProduct() {
  try {
    const data = await sql<Product[]>`SELECT * FROM products`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch product data.")
  } 
}

export async function fetchReview() {
  try {
    const data = await sql<Review[]>`SELECT * FROM reviews`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch review data.")
  } 
}

export async function fetchUser() {
  try {
    const data = await sql<User[]>`SELECT * FROM users`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch user data.")
  }
}

export async function fetchOrder() {
  try {
    const data = await sql<Order[]>`SELECT * FROM orders`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch order data.")
  }
}

export async function fetchCart() {
  try {
    const data = await sql<Cart[]>`SELECT * FROM carts`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch cart data.")
  }
}

export async function fetchCartItem() {
  try {
    const data = await sql<CartItem[]>`SELECT * FROM cart_items`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch cart item data.")
  }
}