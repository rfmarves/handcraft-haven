/**import the fetch card function and create a card */
import { fetchCardData } from "../lib/data"
import { Product } from "../lib/definitions"

/**calls the product type defined in the definintions */
type ProductCardProp = {
  products: Product
}

/**wraps fucntion that calls the fetchCardData and later insert this data
 *using js map method into the Product card.
 */
export default async function CardWrapper() {
  const data = await fetchCardData()
  console.log(data)

  return (
    <div>
      {data.map((items) => (
        <div key={items.id}>
          <ProductCard products={items} />
        </div>
      ))}
    </div>
  )
}

/**create the card to contain the data being sent */
export function ProductCard({ products }: ProductCardProp) {
  return (
    /* Content item name and category are currently displayed on the card
    no Image url was available so I could not include image url paths.
    */
    <div>
      <h3>{products.name}</h3>

      <p>{products.category}</p>

      {/* Actions to view items and also add items to card. Will complete the logic.
      view will redirect to the product detail page and provide detail information of the item.

      Add to cart will allow user to add items to card automatically. Will use the local storage to 
      keep items added to cart. 
      */}
      <div>
        <button>View</button>

        <button>Add to Cart</button>
      </div>
    </div>
  )
}
