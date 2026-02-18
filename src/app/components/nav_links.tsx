"use client"

/**import home, user-circle, tag, user */
import {
  SlHome,
  SlTag,
  SlUser,
  SlLogin,
  SlBasket
} from "react-icons/sl";
import { PiStorefrontLight } from "react-icons/pi";
/**navigations uses the Link library and usePathname */
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../page.module.css"

/**links arrays */
let links = [
  {
    name: "Home",
    href: "/",
    icon: SlHome,
  },
  {
    name: "Sellers Profile",
    href: "/sellers",
    icon: PiStorefrontLight,
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
export default function Navlinks({ userSession }: { userSession: any }) {
  if (userSession) {
    // If the user is logged in, show the profile and logout links instead of login
    links[3] = {
      name: "Dashboard",
      href: "/dashboard",
      icon: SlUser,
    };
  }
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
