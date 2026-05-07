import Head from 'next/head'
import Image from 'next/image'
import { ArrowDown, Award, Clock, Shield, Star } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage = () => {
  const features = [
    {
      icon: Award,
      title: '匠心工艺',
      description: '传承百年定制工艺，每一针每一线都彰显品质',
    },
    {
      icon: Clock,
      title: '精工细作',
      description: '超过200道工序，历时30天精心打造',
    },
    {
      icon: Shield,
      title: '品质保证',
      description: '顶级面料，终身免费保养服务',
    },
    {
      icon: Star,
      title: '专属定制',
      description: '资深裁缝一对一服务，量身打造',
    },
  ]

  const testimonials = [
    {
      name: '张先生',
      role: '企业高管',
      content: '定制的西装完美贴合身形，面料舒适，细节精致。每次穿着都能感受到品质与匠心。',
      rating: 5,
    },
    {
      name: '李先生',
      role: '婚礼新郎',
      content: '婚礼当天的礼服让我成为全场焦点，定制过程专业贴心，强烈推荐！',
      rating: 5,
    },
    {
      name: '王先生',
      role: '商务人士',
      content: '穿着他们定制的西装出席重要会议，自信倍增。品质和服务都无可挑剔。',
      rating: 5,
    },
  ]

  return (
    <>
      <Head>
        <title>LAGO COMO | 高端男士西服定制</title>
        <meta name="description" content="传承百年工艺，为您定制独一无二的高端西装。提供商务套装、婚礼礼服、休闲西装等定制服务。" />
        <meta name="keywords" content="西装定制,男士定制,高端定制,礼服定制,商务西装" />
      </Head>

      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-600 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-down">
            <p className="text-gold-400 text-sm tracking-widest uppercase mb-6">
              Since 1920
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
              <span className="block">定制您的</span>
              <span className="text-gradient">专属优雅</span>
            </h1>
            <p className="text-charcoal-300 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
              传承百年匠心工艺，为每一位绅士打造独一无二的着装体验。
              从面料选择到版型设计，每一个细节都追求极致完美。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="px-8 py-4 bg-gradient-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300"
              >
                探索定制服务
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                预约咨询
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#features">
              <ArrowDown className="w-8 h-8 text-white/60" />
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm tracking-widest uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-4">
              我们的优势
            </h2>
            <p className="text-charcoal-500 max-w-2xl mx-auto">
              百年传承的精湛工艺，为您呈现无与伦比的定制体验
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-charcoal-50 rounded-2xl hover-lift"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-charcoal-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal-900 to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold/20 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20men%20tailored%20suit%20on%20mannequin%20in%20elegant%20showroom%20with%20warm%20lighting%20and%20golden%20accents&image_size=portrait_4_3"
                  alt="高端定制西装展示"
                  width={500}
                  height={667}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
                About Luxury Tailor
              </p>
              <h2 className="font-serif text-4xl font-bold text-white mb-6">
                百年传承，<br />匠心定制
              </h2>
              <p className="text-charcoal-300 mb-6">
                自1920年创立以来，LAGO COMO始终秉承"品质至上，匠心独运"的理念。
                我们的资深裁缝团队拥有数十年的定制经验，每一件西装都经过超过200道工序的精心打造。
              </p>
              <p className="text-charcoal-300 mb-8">
                我们精选来自意大利、英国的顶级面料，结合现代美学与传统工艺，
                为每一位客户量身定制独一无二的着装艺术品。
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors"
              >
                了解更多
                <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm tracking-widest uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-4">
              客户评价
            </h2>
            <p className="text-charcoal-500 max-w-2xl mx-auto">
              来自尊贵客户的真实反馈
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-charcoal-50 rounded-2xl hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <p className="text-charcoal-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal-900">{testimonial.name}</p>
                    <p className="text-sm text-charcoal-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            开启您的定制之旅
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            预约私人顾问，体验专属定制服务。让我们为您打造完美的着装艺术品。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-charcoal-900 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            >
              立即预约
            </Link>
            <a
              href="tel:+864008888888"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              电话咨询 400-888-8888
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default HomePage
