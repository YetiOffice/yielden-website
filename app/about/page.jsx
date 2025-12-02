'use client'

import Button from '@/components/Button'
import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const processRef = useRef(null)
  const statsRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const refs = [heroRef, missionRef, valuesRef, processRef, statsRef, teamRef]
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  const values = [
    {
      title: 'Speed Without Sacrifice',
      description: 'We deliver in one week without cutting corners. Quality and speed aren\'t mutually exclusive—they\'re our standard.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'bg-gradient-to-br from-[#00A5FF]/10 to-blue-100/20'
    },
    {
      title: 'Design With Purpose',
      description: 'Every element serves a purpose. We create beautiful designs that convert visitors into customers, not just look good.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'bg-gradient-to-br from-slate-200/50 to-slate-100/50'
    },
    {
      title: 'Technology That Works For You',
      description: 'We leverage AI and modern tools to streamline processes, reduce costs, and deliver better results faster.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'bg-gradient-to-br from-[#00A5FF]/10 to-blue-100/20'
    },
    {
      title: 'Partnership Over Transactions',
      description: 'We\'re not just building a website—we\'re building a long-term partnership focused on your growth and success.',
      icon: (
        <svg className="w-8 h-8 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'bg-gradient-to-br from-slate-200/50 to-slate-100/50'
    }
  ]

  const processSteps = [
    {
      title: 'Kickoff & Strategy',
      description: 'We start with a deep dive into your business goals, target audience, and competitive landscape to craft a tailored strategy.',
      number: '01'
    },
    {
      title: 'Wireframe & Layout',
      description: 'Before design, we map out the user journey and site structure to ensure optimal conversion paths and user experience.',
      number: '02'
    },
    {
      title: 'Design & Build',
      description: 'Your website comes to life with modern design, clean code, and AI-powered optimization—all delivered in one week.',
      number: '03'
    },
    {
      title: 'Launch & Optimization',
      description: 'We handle hosting, deployment, and initial optimization to ensure everything runs smoothly from day one.',
      number: '04'
    },
    {
      title: 'Ongoing Support or Growth Plan',
      description: 'Choose ongoing support or our Growth Plan for continuous improvements, SEO maintenance, and strategic guidance.',
      number: '05'
    }
  ]

  const stats = [
    { value: '1 Week', label: 'Delivery Time', description: 'From kickoff to launch' },
    { value: '98%', label: 'Client Retention', description: 'Long-term partnerships' },
    { value: '+85%', label: 'Average SEO Lift', description: 'Organic traffic growth' },
    { value: '+40%', label: 'Conversion Increase', description: 'More leads and sales' }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={heroRef}>
            {/* Left Column - Text */}
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black leading-[1.05] mb-6 md:mb-8 break-words tracking-tight">
                Building Websites That Grow Businesses.
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight max-w-2xl">
                We make high-performance, conversion-focused websites accessible, affordable, and fast for small businesses. No fluff, just results.
              </p>
            </div>

            {/* Right Column - Abstract Visual */}
            <div className={`transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#00A5FF]/15 via-blue-100/20 to-slate-100/40 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A5FF]/5 to-transparent"></div>
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#00A5FF]/25 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-2 border-[#00A5FF]/30 rounded-3xl rotate-12"></div>
                </div>
                <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#00A5FF]/20 rounded-xl rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-blue-300/25 rounded-lg rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & PHILOSOPHY SECTION */}
      <section className="py-24 md:py-32 bg-white" ref={missionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-8 md:mb-12 tracking-tight leading-[1.1] text-center">
              Our Mission & Philosophy
            </h2>
            <div className="space-y-8 md:space-y-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed tracking-slight mb-6">
                  At Yeelden, we believe that every small business deserves a website that works as hard as they do. Our philosophy is built on five core principles:
                </p>
              </div>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 tracking-tight">Transparent Pricing</h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                      No hidden fees, no surprises. You know exactly what you're paying and what you're getting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 tracking-tight">Fast One-Week Delivery</h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                      Speed doesn't mean sacrificing quality. We deliver professional websites in one week, guaranteed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 tracking-tight">High-Quality Design</h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                      Modern, clean aesthetics that build trust and guide visitors toward conversion without distraction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 tracking-tight">Smart Technology and Tools</h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                      We leverage AI and cutting-edge tools to streamline development and deliver better results faster.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00A5FF]/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 tracking-tight">Long-Term Partnership</h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                      We're not just building a website—we're building a partnership focused on your growth and success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Our Core Values
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className={`w-16 h-16 ${value.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 tracking-tight">{value.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed tracking-slight">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 md:py-32 bg-white" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Our Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              A simple, proven approach to building and optimizing your website.
            </p>
          </div>
          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 md:gap-8 items-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#00A5FF]/10 to-blue-100/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-semibold text-[#00A5FF]">{step.number}</span>
                </div>
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-slight">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / IMPACT SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Measurable Impact
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              Real results that drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#00A5FF] mb-3 tracking-tight">{stat.value}</div>
                <p className="text-lg md:text-xl font-semibold text-black mb-2">{stat.label}</p>
                <p className="text-sm md:text-base text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 md:py-32 bg-white" ref={teamRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Our Team
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-slight">
              A small, expert team focused on delivering exceptional results.
            </p>
          </div>
          <div className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-slight mb-8">
                Yeelden is built by a tight-knit team of designers, developers, and marketers who share a common goal: helping small businesses succeed online. We believe in staying small and focused, which allows us to maintain high standards, move quickly, and build genuine relationships with our clients.
              </p>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00A5FF]/20 to-blue-100/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Design & UX</h3>
                  <p className="text-sm md:text-base text-gray-600">Creating beautiful, conversion-focused designs</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-200/50 to-slate-100/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Development</h3>
                  <p className="text-sm md:text-base text-gray-600">Building fast, modern, scalable websites</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00A5FF]/20 to-blue-100/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#00A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-2">Marketing & Growth</h3>
                  <p className="text-sm md:text-base text-gray-600">Driving traffic, leads, and conversions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-blue-50/50 via-slate-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl shadow-lg p-12 md:p-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Ready to Grow?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight">
              Get a free audit and see how your website can perform.
            </p>
            <Button href="/audit" variant="primary" className="px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]">
              Get a Free Audit
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
