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

  console.log('收到预约咨询:')
  console.log('姓名:', name)
  console.log('电话:', phone)
  console.log('邮箱:', email)
  console.log('服务类型:', service)
  console.log('留言:', message)

  res.status(200).json({ 
    success: true, 
    message: '预约信息已提交！我们会尽快与您联系。' 
  })
}
