import styles from "../page.module.css";
import HandcraftHeader from "../components/handcraft-header";
import HandcraftFooter from "../components/handcraft-footer";

const products = [
  { id: "p-1", name: "Handmade Ceramic Mug", price: "$24", image: "/file.svg" },
  { id: "p-2", name: "Woven Tote Bag", price: "$38", image: "/globe.svg" },
  { id: "p-3", name: "Soy Candle Set", price: "$18", image: "/window.svg" },
  { id: "p-4", name: "Knitted Scarf", price: "$29", image: "/file.svg" },
  { id: "p-5", name: "Wooden Serving Board", price: "$42", image: "/globe.svg" },
  { id: "p-6", name: "Handmade Earrings", price: "$15", image: "/window.svg" },
];

export default function CatalogPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HandcraftHeader />

        <div className={styles.intro}>
          <h2>Catalog</h2>
          <p>Browse handcrafted products from our community of artisans.</p>
        </div>

        <div className={styles.content} style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
          <div style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
              <input style={inputStyle} placeholder="Search products (placeholder)" />
              <select style={inputStyle} defaultValue="all">
                <option value="all">All categories</option>
                <option value="ceramics">Ceramics</option>
                <option value="textiles">Textiles</option>
                <option value="wood">Wood</option>
                <option value="jewelry">Jewelry</option>
              </select>
              <select style={inputStyle} defaultValue="featured">
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            <section className="gridCards">
              {products.map((p) => (
                <a
                  key={p.id}
                  href={`/product/${p.id}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    border: "1px solid rgba(0,0,0,0.10)",
                    borderRadius: 16,
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 10px 26px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ height: 160, display: "grid", placeItems: "center", background: "rgba(0,0,0,0.03)" }}>
                    <img src={p.image} alt="" style={{ width: 72, height: 72, opacity: 0.9 }} />
                  </div>
                  <div style={{ padding: 14 }}>
                    <div style={{ fontWeight: 800, marginBottom: 6 }}>{p.name}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 700 }}>{p.price}</span>
                      <span style={{ fontSize: 13, opacity: 0.75 }}>View</span>
                    </div>
                  </div>
                </a>
              ))}
            </section>

            <style>{`
              .gridCards{
                display:grid;
                grid-template-columns: 1fr;
                gap: 16px;
              }
              @media (min-width: 700px){
                .gridCards{ grid-template-columns: repeat(2, 1fr); }
              }
              @media (min-width: 1024px){
                .gridCards{ grid-template-columns: repeat(3, 1fr); }
              }
            `}</style>
          </div>
        </div>

        <HandcraftFooter />
      </main>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.18)",
  minWidth: 220,
};
