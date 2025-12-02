export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black mb-6 md:mb-8 break-words tracking-tight leading-[1.05]">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tracking-slight">
            <p className="text-xl mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mb-6">
              Please read these Terms of Service ("Terms") carefully before using Yeelden's website and services.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Agreement to Terms</h2>
            <p className="mb-6 text-lg md:text-xl">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our services.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Services</h2>
            <p className="mb-6 text-lg md:text-xl">
              Yeelden provides website development, SEO, PPC, and related digital marketing services. We deliver websites within one week of project kickoff, subject to client cooperation and timely content delivery.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Payment Terms</h2>
            <p className="mb-6 text-lg md:text-xl">
              Website build projects require a 50% deposit to begin work, with the remaining balance due upon completion. Monthly subscription plans are billed automatically on a recurring basis.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Intellectual Property</h2>
            <p className="mb-6 text-lg md:text-xl">
              Upon full payment, you own the website and its content. Yeelden retains the right to use your project in our portfolio and marketing materials unless otherwise agreed.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Limitation of Liability</h2>
            <p className="mb-6 text-lg md:text-xl">
              Yeelden shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@yeelden.com" className="text-[#00A5FF] hover:underline">
                hello@yeelden.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

