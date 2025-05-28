import Link from 'next/link'
import '../styles/globals.css'

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/">
            <img src="/logo.png" alt="MSADDI logo" className="h-12" />
          </Link>
          <nav className="space-x-4 rtl:space-x-reverse">
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-100 text-center py-4 mt-10">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MSADDI. All rights reserved.
        </p>
      </footer>
    </>
  );
}
