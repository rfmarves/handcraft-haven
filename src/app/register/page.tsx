import styles from "./page.module.css";

export default function RegisterPage() {
  return (
      <main className={styles.main}>
        <div className={styles.intro}>
          <h2>Create your account</h2>
        </div>
        <div className={styles.content}>
            {/* Responsive grid: 1 col on mobile, 2 cols on desktop */}
            <form className={styles.registerGrid}>
              <Field label="Display name">
                <input
                  className={styles.input}
                  type="text"
                  name="displayName"
                  required
                  placeholder="e.g., Paola Crafts"
                />
              </Field>

              <Field label="Email address">
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  required
                  placeholder="name@email.com"
                />
              </Field>

              <Field label="Password">
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  required
                  minLength={8}
                  placeholder="At least 8 characters"
                />
              </Field>

              <Field label="Image filename:">
                <input
                  className={styles.input}
                  type="url"
                  name="imageUrl"
                  placeholder="my-photo.jpg"
                />
              </Field>

              {/* Full-width row */}
              <div className={styles.doubleColumn}>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.legend}>
                    Account type
                  </legend>
                  <div className={styles.radioGroup} >
                    <label className={styles.radioLabelStyle}>
                      <input
                        type="radio"
                        name="accountType"
                        value="buyer"
                        defaultChecked
                      />
                      <span>Buyer</span>
                    </label>
                    <label className={styles.radioLabelStyle}>
                      <input type="radio" name="accountType" value="seller" />
                      <span>Seller</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Full-width buttons */}
                <button type="button" className={`${styles.button} ${styles.doubleColumn}`}>
                  Create account
                </button>
            </form>
                <p className={styles.loginLink}>
                  Already have an account? <a href="/login">Go to login</a>
                </p>
        </div>
      </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className={styles.label}>
      <span className={styles.inputLabelSpan} >{label}</span>
      {children}
    </label>
  );
}
