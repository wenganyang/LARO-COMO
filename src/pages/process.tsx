import Head from 'next/head'
import Image from 'next/image'
import { Calendar, Ruler, Palette, Scissors, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProcessPage = () => {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: '预约咨询',
      description: '预约私人顾问，了解您的需求和风格偏好。我们提供线上咨询和到店服务两种方式。',
      image: 'https://images.unsplash.com/photo-1551632811-56173d1650c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Ruler,
      number: '02',
      title: '精准量体',
      description: '资深裁缝为您进行专业量体，记录超过30个精准数据，确保西装完美贴合身形。',
      image: 'https://images.unsplash.com/photo-1527549993586-dff825b37782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Palette,
      number: '03',
      title: '面料选择',
      description: '在我们的面料库中挑选心仪的面料，从意大利羊毛到英国精纺，应有尽有。',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Scissors,
      number: '04',
      title: '匠心制作',
      description: '由资深裁缝手工缝制，超过200道工序，历时30天精心打造您的专属西装。',
      image: 'https://images.unsplash.com/photo-1544471314-99d502154e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: CheckCircle,
      number: '05',
      title: '试穿调整',
      description: '完成制作后进行试穿，根据您的反馈进行微调，确保完美贴合。',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <>
      <Head>
        <title>LAGO COMO | 定制流程</title>
        <meta name="description" content="了解我们的定制流程，从预约咨询到完美交付，每一步都追求极致" />
      </Head>

      <Navbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
            Custom Process
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-6">
            定制流程
          </h1>
          <p className="text-charcoal-300 max-w-2xl mx-auto">
            从预约到交付，每一步都精心安排，只为呈现最完美的定制体验
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 -translate-y-1/2" />
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={600}
                          height={400}
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-gold-500 font-serif text-6xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-charcoal-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-500 mb-6">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="flex items-center gap-2 text-gold-600 font-medium">
                        <span>下一步</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-charcoal-900 to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-gold-400 mb-2">30</div>
              <p className="text-charcoal-300 text-sm">定制周期(天)</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-gold-400 mb-2">30+</div>
              <p className="text-charcoal-300 text-sm">量体数据(项)</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-gold-400 mb-2">200+</div>
              <p className="text-charcoal-300 text-sm">制作工序</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-gold-400 mb-2">2</div>
              <p className="text-charcoal-300 text-sm">试穿次数</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <p className="text-charcoal-300 text-sm">满意保证</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-4">
            准备好开始您的定制之旅了吗？
          </h2>
          <p className="text-charcoal-500 max-w-2xl mx-auto mb-8">
            立即预约，开启属于您的专属定制体验
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-white font-semibold rounded-full hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300"
          >
            立即预约
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ProcessPage
