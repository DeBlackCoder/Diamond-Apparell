import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Diamond Apparell",
  description: "Elegant clothing and bags by Diamond Apparell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <img src="/preciouslogo.png" alt="Diamond Apparell Logo" className="logo" />
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Diamond Apparell. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
