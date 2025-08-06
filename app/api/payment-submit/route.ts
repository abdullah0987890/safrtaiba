import { supabase } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const form = await req.formData()

    const fullName = form.get('full_name')?.toString()
    const transactionId = form.get('transaction_id')?.toString()
    const screenshotFile = form.get('screenshot') as File

    if (!fullName || !transactionId || !screenshotFile) {
      console.error('Missing Fields:', { fullName, transactionId, screenshotFile })
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const fileExt = screenshotFile.name.split('.').pop()
    const fileName = `screenshots/${Date.now()}.${fileExt}`

    const arrayBuffer = await screenshotFile.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from('quraandazi') 
      .upload(fileName, buffer, {
        contentType: screenshotFile.type,
      })

    if (uploadError) {
      console.error('Storage upload error:', uploadError)
      return NextResponse.json({ error: 'Failed to upload screenshot' }, { status: 500 })
    }

    const { data: urlData } = supabase.storage
      .from('quraandazi') 
      .getPublicUrl(fileName)

    const screenshotUrl = urlData.publicUrl

    const { error: dbError } = await supabase.from('quraandazi').insert([ 
      {
        full_name: fullName,
        transaction_id: transactionId,
        screenshot_url: screenshotUrl,
        status: 'pending',
      },
    ])

    if (dbError) {
      console.error('Insert error:', dbError)
      return NextResponse.json({ error: 'Failed to save payment' }, { status: 500 })
    }
    

    return NextResponse.json({ message: '✅ Payment submitted successfully!' })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
