'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const scrollToSection = (e, sectionId) => {
    if (isHomePage) {
      e.preventDefault()
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-black">
            Yeelden
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-gray-700 hover:text-black transition-colors">
                  Home
                </a>
                <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-700 hover:text-black transition-colors">
                  Services
                </a>
                <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-gray-700 hover:text-black transition-colors">
                  Portfolio
                </a>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-700 hover:text-black transition-colors">
                  About
                </a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-700 hover:text-black transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link href="/" className="text-gray-700 hover:text-black transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-black transition-colors">
                  Portfolio
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
                  Contact
                </Link>
              </>
            )}
          </nav>
          {isHomePage ? (
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-[#00A5FF] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0095E6] transition-colors"
            >
              Get a Free Audit
            </a>
          ) : (
            <Link
              href="/audit"
              className="bg-[#00A5FF] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0095E6] transition-colors"
            >
              Get a Free Audit
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

