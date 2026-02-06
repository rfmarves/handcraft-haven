import Image from "next/image"
import styles from "../page.module.css"
import Navlinks from "./nav_links"
import clsx from "clsx"

export default function HandcraftHeader() {
  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200",
        styles.header,
      )}
    >
      <h1 className={clsx("flex ")}>
        <Image
          //   className={styles.logo}
          src="/handcraft-haven-logo.svg"
          alt="Handcraft Haven logo"
          width={50}
          height={50}
          priority
        />
        Handcraft Haven
      </h1>
      <Navlinks />
    </header>
  )
}
