import styles from "../page.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function HandcraftFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <p>© 2024 Handcraft Haven.</p>
                <p>
                    Crafted with ❤️ by Handcraft Haven Team.
                </p>
            </div>
            <div className={styles.socialIcons}>
                <a href="https://www.facebook.com/handcrafthaven" className={styles.footerLink}><FaFacebook size={20} /></a>
                <a href="https://www.instagram.com/handcrafthaven" className={styles.footerLink}><FaInstagram size={20} /></a>
            </div>
        </footer>
    )
}
