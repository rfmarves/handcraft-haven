import styles from "../page.module.css";


export default function RegisterPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        

        <div className={styles.intro}>
          <h2>Create your account</h2>
          <p>Register as a user or seller.</p>
        </div>

        <div
          className={styles.content}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 16px",
            boxSizing: "border-box",
          }}
        >
          <section
            style={{
              width: "100%",
              maxWidth: 920,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.10)",
              borderRadius: 18,
              boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
              padding: 24,
            }}
          >
            <div style={{ marginBottom: 18 }}>
              <h3 style={{ margin: 0, fontSize: 22 }}>Sign up</h3>
              <p style={{ margin: "6px 0 0", opacity: 0.75, fontSize: 14 }}>
                Create an account to buy crafts or sell your handmade products.
              </p>
            </div>

            {/* Responsive grid: 1 col on mobile, 2 cols on desktop */}
            <form className="registerGrid">
              <Field label="Display name">
                <input
                  style={inputStyle}
                  type="text"
                  name="displayName"
                  required
                  placeholder="e.g., Paola Crafts"
                />
              </Field>

              <Field label="Email address">
                <input
                  style={inputStyle}
                  type="email"
                  name="email"
                  required
                  placeholder="name@email.com"
                />
              </Field>

              <Field label="Password">
                <input
                  style={inputStyle}
                  type="password"
                  name="password"
                  required
                  minLength={8}
                  placeholder="At least 8 characters"
                />
              </Field>

              <Field label="Image URL (optional)">
                <input
                  style={inputStyle}
                  type="url"
                  name="imageUrl"
                  placeholder="https://example.com/my-photo.jpg"
                />
              </Field>

              {/* Full-width row */}
              <div style={{ gridColumn: "1 / -1" }}>
                <fieldset
                  style={{
                    border: "1px solid rgba(0,0,0,0.12)",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <legend style={{ padding: "0 8px", fontWeight: 700 }}>
                    Account type
                  </legend>

                  <div
                    style={{
                      display: "flex",
                      gap: 18,
                      flexWrap: "wrap",
                      paddingTop: 8,
                    }}
                  >
                    <label style={radioLabelStyle}>
                      <input
                        type="radio"
                        name="accountType"
                        value="user"
                        defaultChecked
                      />
                      <span>User</span>
                    </label>

                    <label style={radioLabelStyle}>
                      <input type="radio" name="accountType" value="seller" />
                      <span>Seller</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Full-width buttons */}
              <div style={{ gridColumn: "1 / -1", display: "grid", gap: 10 }}>
                <button type="button" style={buttonStyle}>
                  Create account
                </button>

                <p style={{ margin: 0, fontSize: 14, textAlign: "center" }}>
                  Already have an account? <a href="/login">Go to login</a>
                </p>
              </div>
            </form>

            {/* CSS-in-JS media query */}
            <style>{`
              .registerGrid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 14px;
              }
              @media (min-width: 900px) {
                .registerGrid {
                  grid-template-columns: 1fr 1fr;
                  gap: 16px;
                }
              }
            `}</style>
          </section>
        </div>

      
      </main>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontWeight: 700 }}>{label}</span>
      {children}
    </label>
  );
}

const formGridStyle: React.CSSProperties = {
  // We attach a class for media queries (since inline styles can't do @media)
} as React.CSSProperties;

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.18)",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  fontWeight: 800,
};

const radioLabelStyle: React.CSSProperties = {
  display: "flex",
  gap: 8,
  alignItems: "center",
};
