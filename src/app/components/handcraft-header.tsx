import Image from "next/image";
import CartButton from "../components/cart-button";
import styles from "../page.module.css";

export default function HandcraftHeader() {
    return (
        <header className={styles.header}>
            <h1>
            <Image
            //   className={styles.logo}
            src="/handcraft-haven-logo.svg"
            alt="Handcraft Haven logo"
            width={100}
            height={100}
            priority
            />
            Handcraft Haven
            </h1>
            <CartButton />
        </header>
    )
}