/**fetch all the data needed from the database
 *1. Product Data
 */

import postgres from "postgres"
import { Product } from "./definitions"

/**establish sql connection and use the sql variable to make calls to the database */
const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" })

/**async fetch product data from the database.  Check the datatype being returned from the database*/
export async function fetchCardData() {
  /**try catch to handle and process errors */
  try {
    const data = await sql<Product[]>`SELECT * FROM products`
    console.log("data fetched,", data)
    return data
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch revenue data.")
  }
}

// export async function GET() {
//   try {
//     return Response.json(await fetchCardData)
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }
