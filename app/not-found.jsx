import Button from '@/components/Button'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black mb-6 md:mb-8 break-words tracking-tight leading-[1.05]">
            Page Not Found
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed tracking-slight">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 leading-relaxed tracking-slight">
              Let's get you back on track. Return to our homepage to explore our services, view our portfolio, or get in touch with us.
            </p>
            <Button href="/" variant="primary" className="px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#00A5FF]/20 hover:shadow-xl hover:shadow-[#00A5FF]/30 hover:scale-[1.02] active:scale-[0.98]">
              Return to Homepage
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

