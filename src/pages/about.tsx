import Head from 'next/head'
import Image from 'next/image'
import { Award, History, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutPage = () => {
  const milestones = [
    { year: '1920', event: '品牌创立于上海，开启百年定制传奇' },
    { year: '1950', event: '成为上海知名定制品牌，服务政商名流' },
    { year: '1980', event: '引入意大利顶级面料，提升品质标准' },
    { year: '2000', event: '开设多家分店，服务网络覆盖全国' },
    { year: '2024', event: '传承百年匠心，持续创新发展' },
  ]

  const stats = [
    { icon: History, value: '100+', label: '年品牌历史' },
    { icon: Users, value: '50,000+', label: '尊贵客户' },
    { icon: Award, value: '100+', label: '荣誉奖项' },
    { icon: Globe, value: '20+', label: '城市门店' },
  ]

  return (
    <>
      <Head>
        <title>LAGO COMO | 关于我们</title>
        <meta name="description" content="了解LAGO COMO的品牌故事和传承历史" />
      </Head>

      <Navbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-6">
            关于我们
          </h1>
          <p className="text-charcoal-300 max-w-2xl mx-auto">
            传承百年匠心工艺，为每一位绅士打造独一无二的着装体验
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-600 text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-6">
                百年传承，<br />匠心定制
              </h2>
              <p className="text-charcoal-500 mb-6">
                自1920年创立以来，LAGO COMO始终秉承"品质至上，匠心独运"的理念。
                我们的创始人李先生是一位技艺精湛的裁缝，他相信每一位男士都值得拥有一套
                完美贴合身形的西装。
              </p>
              <p className="text-charcoal-500 mb-8">
                历经百年风雨，我们始终坚持手工定制的传统工艺，同时不断引入国际顶级面料
                和现代设计理念。如今，LAGO COMO已成为国内高端定制领域的标杆品牌，
                服务过无数政商名流和社会精英。
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-charcoal-900">{stat.value}</div>
                      <div className="text-sm text-charcoal-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold/20 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20tailor%20workshop%20vintage%20craftsmanship%20elegant%20interior%20warm%20lighting%20professional&image_size=portrait_4_3"
                  alt="LAGO COMO 工作室"
                  width={500}
                  height={667}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal-900 to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
              History
            </p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              品牌历程
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold-500/30 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-gold-400 font-serif text-2xl font-bold mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-charcoal-300">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-charcoal-900" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm tracking-widest uppercase mb-4">
              Philosophy
            </p>
            <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-4">
              品牌理念
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-charcoal-50 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-serif text-2xl font-bold">品</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                品质至上
              </h3>
              <p className="text-charcoal-500">
                我们只选用全球顶级面料，每一件西装都经过严格的品质把控。
              </p>
            </div>
            <div className="p-8 bg-charcoal-50 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-serif text-2xl font-bold">匠</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                匠心独运
              </h3>
              <p className="text-charcoal-500">
                传承百年手工技艺，每一针每一线都凝聚着裁缝师傅的心血。
              </p>
            </div>
            <div className="p-8 bg-charcoal-50 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-serif text-2xl font-bold">专</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                专属定制
              </h3>
              <p className="text-charcoal-500">
                一对一服务，根据您的身形和喜好，打造独一无二的着装艺术品。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            体验百年传承的定制服务
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            预约私人顾问，开启您的专属定制之旅
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-charcoal-900 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
          >
            立即预约
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage
