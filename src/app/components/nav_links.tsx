"use client"

/**import home, user-circle, tag, user */
import {
  HomeIcon,
  TagIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid"

/**navigations uses the Link library and usePathname */
import Link from "next/link"
import { usePathname } from "next/navigation"
import CartButton from "./cart-button"
import styles from "../page.module.css"
import clsx from "clsx"

/**links arrays */
const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Sellers Profile",
    href: "/sellers",
    icon: UserGroupIcon,
  },
  {
    name: "Product Listings",
    href: "/dashboard/products",
    icon: TagIcon,
  },
  {
    name: "Login",
    href: "/login",
    icon: UserIcon,
  },
]

/**export the link function. use map to assigne the links to the respective areas */
export default function Navlinks() {
  const pathname = usePathname()

  return (
    <nav
      className={clsx(
        "flex items-center gap-3 h-[56px] px-4",
        "bg-white text-black-900", // 👈 lock text color
        "border-b shadow-sm",
        styles.nav,
      )}
    >
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-black-900 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              styles.headerlinks,
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className={styles.headericons} />
            {/* <p className="hidden md:block">{link.name}</p> */}
          </Link>
        )
      })}
      {/**add the cartButon here */}
      <CartButton />
    </nav>
  )
}
