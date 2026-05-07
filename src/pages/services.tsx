import Head from 'next/head'
import Image from 'next/image'
import { Briefcase, Heart, Shirt, User } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ServicesPage = () => {
  const services = [
    {
      icon: Briefcase,
      title: '商务套装',
      description: '专为商务场合设计，展现专业自信的形象。精选优质面料，修身剪裁，让您在商务场合脱颖而出。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elegant%20business%20suit%20black%20navy%20color%20professional%20formal%20wear%20studio%20lighting&image_size=portrait_4_3',
      price: '¥8,800起',
      features: ['意大利进口面料', '30天定制周期', '终身免费保养'],
    },
    {
      icon: Heart,
      title: '婚礼礼服',
      description: '见证人生最重要的时刻，为您打造独一无二的婚礼礼服。精致细节，完美剪裁，让您成为最耀眼的新郎。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20wedding%20tuxedo%20black%20tie%20elegant%20formal%20groom%20attire%20golden%20lighting&image_size=portrait_4_3',
      price: '¥12,800起',
      features: ['手工刺绣细节', '量身定制版型', '免费礼服收纳'],
    },
    {
      icon: Shirt,
      title: '休闲西装',
      description: '兼顾舒适与时尚，适合日常休闲场合。轻松随意的风格中不失精致品味，展现独特的个人魅力。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=casual%20blazer%20sport%20coat%20light%20color%20relaxed%20style%20modern%20fashion%20studio&image_size=portrait_4_3',
      price: '¥5,800起',
      features: ['轻薄透气面料', '舒适版型设计', '多样化颜色选择'],
    },
    {
      icon: User,
      title: '衬衫定制',
      description: '衬衫是男士着装的基础，定制衬衫完美贴合身形，展现精致品味。多种领型、袖型可供选择。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=premium%20custom%20dress%20shirt%20white%20blue%20cotton%20elegant%20formal%20wear%20close%20up&image_size=portrait_4_3',
      price: '¥1,800起',
      features: ['高支棉面料', '个性化刺绣', '多种领型选择'],
    },
  ]

  return (
    <>
      <Head>
        <title>LAGO COMO | 定制服务</title>
        <meta name="description" content="提供商务套装、婚礼礼服、休闲西装、衬衫定制等高端男士定制服务" />
      </Head>

      <Navbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-6">
            定制服务
          </h1>
          <p className="text-charcoal-300 max-w-2xl mx-auto">
            为每一位绅士提供专属定制服务，从商务到休闲，从日常到庆典
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-charcoal-50 rounded-2xl overflow-hidden hover-lift"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-gradient-gold text-white text-sm font-medium rounded-full">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-charcoal-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-500 mb-4">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 bg-white border border-charcoal-200 rounded-full text-sm text-charcoal-600"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors"
                  >
                    了解详情
                    <span className="text-lg">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal-900 to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            不确定选择哪项服务？
          </h2>
          <p className="text-charcoal-300 max-w-2xl mx-auto mb-8">
            预约私人顾问，我们将根据您的需求为您推荐最适合的定制方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300"
          >
            预约私人顾问
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ServicesPage
