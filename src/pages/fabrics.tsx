import Head from 'next/head'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FabricsPage = () => {
  const fabrics = [
    {
      name: '意大利羊毛',
      origin: '意大利',
      description: '源自意大利顶级羊毛产区，精选优质美利奴羊毛，柔软细腻，光泽度高，穿着舒适透气。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=premium%20wool%20fabric%20texture%20close%20up%20luxury%20material%20dark%20blue%20grey%20colors&image_size=landscape_16_9',
      features: ['100%纯羊毛', '柔软舒适', '自然光泽', '四季皆宜'],
      weight: '280-320g/m²',
    },
    {
      name: '英国羊毛',
      origin: '英国',
      description: '传承英国百年纺织工艺，采用传统精纺技术，面料紧密厚实，具有卓越的保暖性能和挺括感。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=british%20wool%20fabric%20texture%20close%20up%20luxury%20material%20charcoal%20grey%20navy&image_size=landscape_16_9',
      features: ['传统精纺工艺', '厚实挺括', '保暖性强', '经典质感'],
      weight: '320-380g/m²',
    },
    {
      name: '亚麻面料',
      origin: '法国',
      description: '法国优质亚麻，天然透气，吸湿性强，适合春夏季节穿着，展现优雅的休闲风格。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=linen%20fabric%20texture%20close%20up%20natural%20breathable%20material%20beige%20cream%20colors&image_size=landscape_16_9',
      features: ['天然透气', '吸湿排汗', '轻盈舒适', '夏季首选'],
      weight: '180-220g/m²',
    },
    {
      name: '真丝混纺',
      origin: '意大利',
      description: '真丝与羊毛的完美结合，兼具真丝的光泽与羊毛的保暖，触感丝滑，尽显奢华品质。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=silk%20blend%20fabric%20texture%20close%20up%20luxurious%20shiny%20material%20deep%20burgundy%20color&image_size=landscape_16_9',
      features: ['真丝混纺', '光泽亮丽', '触感丝滑', '奢华品质'],
      weight: '240-280g/m²',
    },
  ]

  return (
    <>
      <Head>
        <title>LAGO COMO | 精选面料</title>
        <meta name="description" content="精选来自意大利、英国、法国的顶级面料，为您打造高品质定制西装" />
      </Head>

      <Navbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
            Premium Fabrics
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-6">
            精选面料
          </h1>
          <p className="text-charcoal-300 max-w-2xl mx-auto">
            甄选全球顶级面料，只为呈现最完美的着装体验
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {fabrics.map((fabric, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={fabric.image}
                      alt={fabric.name}
                      width={800}
                      height={450}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gold-100 text-gold-700 text-sm font-medium rounded-full">
                      {fabric.origin}
                    </span>
                    <span className="text-charcoal-400 text-sm">
                      {fabric.weight}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-charcoal-900 mb-4">
                    {fabric.name}
                  </h3>
                  <p className="text-charcoal-500 mb-6">
                    {fabric.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {fabric.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-gold-600" />
                        <span className="text-charcoal-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-white font-medium rounded-full hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-300"
                  >
                    预约面料品鉴
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal-900 to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-gold-400 mb-2">50+</div>
              <p className="text-charcoal-300">面料品种</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-gold-400 mb-2">12</div>
              <p className="text-charcoal-300">产地国家</p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <p className="text-charcoal-300">正品保证</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default FabricsPage
