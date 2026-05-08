import Head from 'next/head'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError(data.message || '提交失败，请稍后重试')
      }
    } catch (err) {
      setError('提交失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: '电话咨询',
      content: '13248006376',
      subContent: '周一至周日 9:00-21:00',
    },
    {
      icon: Mail,
      title: '邮件咨询',
      content: 'wenganyang@163.com',
      subContent: '24小时内回复',
    },
    {
      icon: MapPin,
      title: '门店地址',
      content: '浙江省温州市鹿城区白麓里3-1507',
      subContent: '白麓里3号楼',
    },
    {
      icon: Clock,
      title: '营业时间',
      content: '周一至周日',
      subContent: '10:00 - 22:00',
    },
  ]

  return (
    <>
      <Head>
        <title>LAGO COMO | 联系我们</title>
        <meta name="description" content="联系我们，预约私人顾问，开启您的定制之旅" />
      </Head>

      <Navbar />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-sm tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h1 className="font-serif text-5xl font-bold text-white mb-6">
            联系我们
          </h1>
          <p className="text-charcoal-300 max-w-2xl mx-auto">
            预约私人顾问，我们将为您提供专业的定制咨询服务
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900 mb-8">
                预约咨询
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      电话 *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                      placeholder="请输入您的电话"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="请输入您的邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    服务类型
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">请选择服务类型</option>
                    <option value="business">商务套装</option>
                    <option value="wedding">婚礼礼服</option>
                    <option value="casual">休闲西装</option>
                    <option value="shirt">衬衫定制</option>
                    <option value="other">其他服务</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    留言
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-charcoal-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                    placeholder="请描述您的需求..."
                  />
                </div>
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitted || loading}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : loading
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-gradient-gold text-white hover:shadow-lg hover:shadow-gold-500/25'
                  }`}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      提交中...
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      提交成功
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      提交预约
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-semibold text-charcoal-900">
                联系方式
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 bg-charcoal-50 rounded-2xl hover-lift"
                  >
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gold-600 font-medium">{info.content}</p>
                    <p className="text-charcoal-500 text-sm">{info.subContent}</p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-br from-charcoal-900 to-charcoal-800 rounded-2xl text-white">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  VIP专属服务
                </h3>
                <p className="text-charcoal-300 mb-4">
                  我们为VIP客户提供专属定制服务，包括一对一私人顾问、优先预约、专属面料选择等特权。
                </p>
                <a
                  href="tel:+8613248006376"
                  className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  立即拨打 VIP专线
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactPage
