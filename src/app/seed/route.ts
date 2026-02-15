import bcrypt from 'bcrypt';
import postgres from "postgres"
import { categories, users, products, reviews } from "../lib/placeholder-data"

/**establish a database connection using the postgres lib and the database url*/
const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" })

/**seed products data into the database */
async function seedCategories() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `
  const insertCategories = await Promise.all(
    categories.map(
      async (category) => {
        sql`INSERT INTO categories (id, name)
        VALUES (${category.id}, ${category.name})
         ON CONFLICT (id) DO NOTHING;`;
        }),
  );

  return insertCategories
}

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      image_filename VARCHAR(255),
      role VARCHAR(50) NOT NULL
    );
  `
  const insertUsers = await Promise.all(
    users.map(
      async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        sql`INSERT INTO users (id, name, email, password, image_filename, role)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.image_filename}, ${user.role})
         ON CONFLICT (id) DO NOTHING;`;
        },
    ),
  );
  return insertUsers
}

async function seedProducts() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category_id UUID REFERENCES categories(id),
      image_filename VARCHAR(255),
      seller_id UUID REFERENCES users(id),
      price INT NOT NULL,
      description TEXT,
      featured BOOLEAN DEFAULT FALSE
    );
  `
  const insertProducts = await Promise.all(
    products.map(
      async (product) => {
        sql`INSERT INTO products (id, name, category_id, image_filename, seller_id, price, description, featured)
        VALUES (${product.id}, ${product.name}, ${product.category_id}, ${product.image_filename}, ${product.seller_id}, ${product.price}, ${product.description}, ${product.featured})
         ON CONFLICT (id) DO NOTHING;`;
        },
    ),
  );
  return insertProducts
}

const seedReviews = async () => {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`  CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id UUID REFERENCES products(id),
    user_id UUID REFERENCES users(id),
    rating INT NOT NULL,
    comment TEXT
  );`
  const insertReviews = await Promise.all(
    reviews.map(
      async (review) => {
        sql`INSERT INTO reviews (id, product_id, user_id, rating, comment)
        VALUES (${review.id}, ${review.product_id}, ${review.user_id}, ${review.rating}, ${review.comment})
         ON CONFLICT (id) DO NOTHING;`;
        },
    ),
  );
}


/**export and run the function to create and connect to the database */
export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedCategories(),
      seedUsers(),
      seedProducts(),
      seedReviews(),
    ]);

    return Response.json({ message: `Database seeded successfully` })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
