"use client";

import "./globals.css";

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathName = usePathname();

  console.log(pathName === "/dashboard/customers");

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.nav}>
          <Link
            href={"/dashboard/customers"}
            className={clsx([styles.button], {
              [styles.active]: pathName === "/dashboard/customers",
              [styles.link]: pathName !== "/dashboard/customers",
            })}
          >
            Customers
          </Link>
          <Link
            href={"/dashboard/invoices"}
            className={clsx([styles.button], {
              [styles.active]: pathName === "/dashboard/invoices",
              [styles.link]: pathName !== "/dashboard/invoices",
            })}
          >
            invoices
          </Link>
        </div>

        {children}
      </body>
    </html>
  );
}
