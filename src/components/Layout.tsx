
import Link from 'next/link'
import '../styles/globals.css'

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/"><img src="/logo.png" alt="MSADDI logo" className="h-10"/></Link>
          <nav className="space-x-4">
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-gray-100 text-center py-4 mt-10">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MSADDI. All rights reserved.</p>
      </footer>
    </>
  )
}
