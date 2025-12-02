'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    website: '',
    services: [],
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const serviceOptions = [
    'Website Build',
    'Redesign',
    'SEO',
    'PPC',
    'Monthly Maintenance',
    'Not Sure'
  ]

  const budgetOptions = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Not Sure'
  ]

  const timelineOptions = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate at least one service is selected
    if (formData.services.length === 0) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          fullName: '',
          email: '',
          businessName: '',
          website: '',
          services: [],
          budget: '',
          timeline: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black mb-6 md:mb-8 break-words tracking-tight leading-[1.05] text-center">
            Get in Touch
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight max-w-3xl mx-auto text-center">
            Have a question? Want to start a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all text-base"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all text-base"
                  placeholder="your@email.com"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-black mb-2">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all text-base"
                  placeholder="Your Business Name"
                />
              </div>

              {/* Website (Optional) */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-black mb-2">
                  Website <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all text-base"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-black mb-3">
                  What services are you interested in? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {serviceOptions.map((service) => (
                    <div key={service} className="flex items-start">
                      <input
                        type="checkbox"
                        id={`service-${service}`}
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="mt-1 mr-3 w-5 h-5 text-[#00A5FF] border-gray-300 rounded focus:ring-[#00A5FF] flex-shrink-0"
                      />
                      <label htmlFor={`service-${service}`} className="text-base text-gray-700 leading-relaxed cursor-pointer">
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.services.length === 0 && (
                  <p className="text-sm text-red-500 mt-2">Please select at least one service</p>
                )}
              </div>

              {/* Budget Dropdown */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">
                  Budget <span className="text-red-500">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all text-base bg-white"
                >
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Timeline Dropdown */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-black mb-2">
                  Timeline <span className="text-red-500">*</span>
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all text-base bg-white"
                >
                  <option value="">Select a timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A5FF] focus:ring-2 focus:ring-[#00A5FF]/20 transition-all resize-none text-base"
                  placeholder="Tell us about your project, goals, or any questions you have..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
                  <p className="font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800">
                  <p className="font-medium">Something went wrong. Please try again or contact us directly at hello@yeelden.com</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || formData.services.length === 0}
                  className="w-full bg-[#00A5FF] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#0095E6] transition-all duration-300 shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
