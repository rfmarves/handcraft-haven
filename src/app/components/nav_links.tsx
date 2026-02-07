"use client"

/**import home, user-circle, tag, user */
import {
  SlHome,
  SlTag,
  SlUser,
  SlLogin,
  SlBasket
} from "react-icons/sl";

/**navigations uses the Link library and usePathname */
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../page.module.css"

/**links arrays */
const links = [
  {
    name: "Home",
    href: "/",
    icon: SlHome,
  },
  {
    name: "Sellers Profile",
    href: "/sellers",
    icon: SlUser,
  },
  {
    name: "Product Listings",
    href: "/dashboard/products",
    icon: SlTag,
  },
  {
    name: "Login",
    href: "/login",
    icon: SlLogin,
  },
  {
    name: "Cart",
    href: "/cart",
    icon: SlBasket,
  }
]

/**export the link function. use map to assigne the links to the respective areas */
export default function Navlinks() {
  const pathname = usePathname()

  return (
    <nav className={styles.navBlock} >
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={styles.navLink}
          >
            <LinkIcon className={styles.headericons} />
          </Link>
        )
      })}
    </nav>
  )
}
