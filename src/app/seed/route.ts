/**insert data into the database and use  import the postgress library to establish a databse connection
 * {Please be careful when making changes.}
 *
 */
import postgres from "postgres"
import { Products } from "../lib/placeholder-categorydata"

/**establish a database connection using the postgres lib and the database url*/
const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" })

/**seed products data into the database */
async function seedProduct() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(100) NOT NULL,
      image VARCHAR(255)
    );
  `

  const insertProducts = await Promise.all(
    Products.map(
      async (product) => sql`INSERT INTO products (name, category, image)
        VALUES (${product.name}, ${product.category}, ${product.image})
         ON CONFLICT (id) DO NOTHING;`,
    ),
  )

  return insertProducts
}

/**export and run the function to create and connect to the database */
export async function GET() {
  try {
    const result = await sql.begin((sql) => [seedProduct()])

    return Response.json({ message: `Database seeded successfully` })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
