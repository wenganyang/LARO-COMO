import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, phone, email, service, message } = req.body

  try {
    console.log('收到预约咨询:')
    console.log('姓名:', name)
    console.log('电话:', phone)
    console.log('邮箱:', email)
    console.log('服务类型:', service)
    console.log('留言:', message)

    // 使用 Formsubmit 发送邮件
    const formsubmitResponse = await fetch('https://formsubmit.co/ajax/wenganyang@163.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        service: service || '未选择',
        message: message || '无留言',
        _subject: '新的预约咨询 - LAGO COMO'
      })
    })

    if (formsubmitResponse.ok) {
      res.status(200).json({ 
        success: true, 
        message: '预约信息已提交！我们会尽快与您联系。' 
      })
    } else {
      throw new Error('Formsubmit 提交失败')
    }
  } catch (error) {
    console.error('提交失败:', error)
    res.status(500).json({ 
      success: false, 
      message: '提交失败，请稍后重试。' 
    })
  }
}
