import { ProductDetails } from "../lib/definitions"

/**get the productid and query the database for review based on that product */
export default function ReviewRatings(prop: ProductDetails) {
  /**get the product id and pass it to the database */
  const detail = prop.details || "No reviews available"
  console.log("Current product detail", detail)
  return (
    <>
      <h5>Reviews</h5>
      <p>{detail}</p>
    </>
  )
}
