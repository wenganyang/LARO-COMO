import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: '定制服务',
      links: ['商务套装', '婚礼礼服', '休闲西装', '衬衫定制'],
    },
    {
      title: '精选面料',
      links: ['意大利羊毛', '英国羊毛', '亚麻面料', '真丝混纺'],
    },
    {
      title: '关于我们',
      links: ['品牌故事', '工艺传承', '门店信息', '预约服务'],
    },
  ]

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-xl font-bold">LAGO COMO</span>
            </div>
            <p className="text-charcoal-400 mb-6 max-w-sm">
              传承百年工艺，为您定制独一无二的高端西装。我们致力于为每一位客户打造完美的着装体验。
            </p>
            <div className="space-y-3">
              <a href="tel:+864008888888" className="flex items-center gap-3 text-charcoal-400 hover:text-gold-500 transition-colors">
                <Phone className="w-5 h-5" />
                400-888-8888
              </a>
              <a href="mailto:contact@lagocomo.com" className="flex items-center gap-3 text-charcoal-400 hover:text-gold-500 transition-colors">
                <Mail className="w-5 h-5" />
                contact@lagocomo.com
              </a>
              <div className="flex items-center gap-3 text-charcoal-400">
                <MapPin className="w-5 h-5" />
                温州市鹿城区人民东路108号
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-charcoal-400 hover:text-gold-500 transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-charcoal-700">
          <p className="text-charcoal-400 text-sm">
            &copy; {currentYear} LAGO COMO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-charcoal-400 hover:text-gold-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-charcoal-400 hover:text-gold-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-charcoal-400 hover:text-gold-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
