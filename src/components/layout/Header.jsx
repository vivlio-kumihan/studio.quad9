"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  const [isVisivle, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > lastScrollY && currentScrollY > 80
        ? setIsVisible(false)
        : setIsVisible(true);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={styles.header}
      style={{ transform: isVisivle ? "translate(0)" : "translateY(-100%)" }}
    >
      <div className={styles.container}>
        <h1 className={styles.logo}>Studio Quad9</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
