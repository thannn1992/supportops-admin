import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./auth.module.css";

export default async function AuthLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>D</span>
          <span>SupportOps</span>
        </div>
        <nav className={styles.nav}>
          <Link className="active" href={`/${locale}`}>
            Dashboard
          </Link>
          <Link href={`/${locale}/team`}>Team</Link>
          <Link href={`/${locale}/projects`}>Projects</Link>
          <Link href={`/${locale}/calendar`}>Calendar</Link>
        </nav>
        <Link className={styles.ctaLink} href={`/${locale}/login`}>
          Login/Register
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
