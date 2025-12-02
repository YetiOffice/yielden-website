export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-b from-blue-50/40 via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black mb-6 md:mb-8 break-words tracking-tight leading-[1.05]">
            Privacy Policy
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
              Yeelden ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Information We Collect</h2>
            <p className="mb-6 text-lg md:text-xl">
              We collect information that you provide directly to us, such as when you request a free audit, contact us, or use our services. This may include your name, email address, phone number, business information, and website URL.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">How We Use Your Information</h2>
            <p className="mb-6 text-lg md:text-xl">
              We use the information we collect to provide, maintain, and improve our services, communicate with you, process your requests, and send you marketing communications (with your consent).
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Data Security</h2>
            <p className="mb-6 text-lg md:text-xl">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mt-8 mb-4 tracking-tight">Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at{' '}
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

