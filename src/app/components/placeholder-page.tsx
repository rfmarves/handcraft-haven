import Link from "next/link";

export default function PlaceholderPage({
  title,
  description,
  backHref = "/",
  backLabel = "Back",
}: {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "24px 16px" }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 14,
          padding: 18,
          background: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
            {description && (
              <p style={{ marginTop: 8, opacity: 0.8 }}>
                {description}
              </p>
            )}
          </div>

          <Link href={backHref} style={{ textDecoration: "underline", alignSelf: "center" }}>
            ← {backLabel}
          </Link>
        </div>

        <div style={{ marginTop: 14, padding: 14, borderRadius: 12, background: "#fafafa", border: "1px solid #eee" }}>
          <p style={{ margin: 0 }}>
            UI placeholder for demo. This page will be connected to database/server logic later.
          </p>
        </div>
      </div>
    </main>
  );
}
