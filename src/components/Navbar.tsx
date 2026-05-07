import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: '首页', href: '/' },
    { name: '定制服务', href: '/services' },
    { name: '精选面料', href: '/fabrics' },
    { name: '定制流程', href: '/process' },
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">L</span>
            </div>
            <span className={`font-serif text-xl font-bold ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}>
              LAGO COMO
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold-600 ${
                  isScrolled ? 'text-charcoal-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+864008888888" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-charcoal-700' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              400-888-8888
            </a>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-gold text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
            >
              预约咨询
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-charcoal-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl p-6 mt-2 animate-scale-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-charcoal-700 text-lg font-medium hover:text-gold-600 transition-colors py-2 border-b border-charcoal-100"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a 
                  href="tel:+864008888888" 
                  className="flex items-center gap-2 text-charcoal-700"
                >
                  <Phone className="w-4 h-4" />
                  400-888-8888
                </a>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-gradient-gold text-white text-center font-medium rounded-full"
              >
                预约咨询
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
