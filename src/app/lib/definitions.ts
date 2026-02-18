/**define the product data types that will be used
 */

export type Category = {
  id: string
  name: string
}

export type Product = {
  id: string
  name: string
  category_id: string
  image_filename: string
  seller_id: string
  price: number
  description: string
  featured: boolean
}

export type Review = {
  id: string
  product_id: string
  user_id: string
  rating: number
  comment: string
}

export type User = {
  id: string
  name: string
  email: string
  password: string
  image_filename: string
  role: "buyer" | "seller"
}

// maybe needed for other features
// thought it'd be a good idea to have now.
export type Order = {
  id: string
  buyer_id: string
  product_id: string
  quantity: number
  total_price: number
  status: "pending" | "shipped" | "delivered"
}

export type Cart = {
  id: string
  user_id: string
  items: CartItem[]
}

export type CartItem = {
  id: string
  cart_id: string
  product_id: string
  quantity: number
}

export type ProductDetails = {
  details: string
}
