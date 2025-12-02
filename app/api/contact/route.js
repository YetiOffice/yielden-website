export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { fullName, email, businessName, services, budget, timeline, message } = body
    
    if (!fullName || !email || !businessName || !services || services.length === 0 || !budget || !timeline || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Save to a database
    // 3. Send to a CRM system
    // For now, we'll just log it and return success
    
    console.log('Contact form submission:', {
      fullName,
      email,
      businessName,
      website: body.website || 'Not provided',
      services,
      budget,
      timeline,
      message,
      submittedAt: new Date().toISOString()
    })

    // TODO: Implement actual email sending or database storage
    // Example: await sendEmail({ to: 'hello@yeelden.com', subject: 'New Contact Form Submission', body: ... })
    // Example: await db.contacts.create({ data: { ... } })

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

