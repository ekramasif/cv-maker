import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <span className="text-xl font-semibold">CV Maker</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <Link
                href="/create"
                className="px-6 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              Professional CV Builder • 100% Free
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create a Professional CV
              <br />
              <span className="text-gray-600">in Minutes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build a LaTeX-inspired curriculum vitae with our intuitive builder.
              Perfect for professionals, academics, and job seekers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/create"
                className="px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                Start Building for Free
              </Link>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • No sign up • No hidden fees
            </p>
          </div>

          {/* Visual Preview */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-lg shadow-xl bg-white p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-900 w-3/4"></div>
                  <div className="h-3 bg-gray-200 w-full"></div>
                  <div className="h-3 bg-gray-200 w-5/6"></div>
                  <div className="h-3 bg-gray-200 w-full"></div>
                  <div className="pt-4 space-y-2">
                    <div className="h-3 bg-gray-300 w-2/3"></div>
                    <div className="h-2 bg-gray-200 w-full"></div>
                    <div className="h-2 bg-gray-200 w-full"></div>
                    <div className="h-2 bg-gray-200 w-4/5"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-gray-300 w-1/2"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 w-full"></div>
                    <div className="h-2 bg-gray-200 w-5/6"></div>
                    <div className="h-2 bg-gray-200 w-full"></div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="h-3 bg-gray-300 w-2/3"></div>
                    <div className="h-2 bg-gray-200 w-full"></div>
                    <div className="h-2 bg-gray-200 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600 mt-1">Free Forever</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">8+</div>
              <div className="text-sm text-gray-600 mt-1">CV Sections</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">PDF</div>
              <div className="text-sm text-gray-600 mt-1">Export</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">ATS</div>
              <div className="text-sm text-gray-600 mt-1">Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Stand Out
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional features designed to help you create the perfect CV
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4 font-bold">
                TX
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                LaTeX-Inspired Design
              </h3>
              <p className="text-gray-600">
                Professional typography and formatting inspired by academic LaTeX templates.
              </p>
            </div>

            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4 font-bold">
                RT
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-Time Preview
              </h3>
              <p className="text-gray-600">
                See your CV update instantly as you type. What you see is what you get.
              </p>
            </div>

            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4 font-bold">
                EX
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                PDF Export
              </h3>
              <p className="text-gray-600">
                Download your CV as a professional PDF ready for printing and sharing.
              </p>
            </div>

            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4 font-bold">
                SV
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Save & Resume
              </h3>
              <p className="text-gray-600">
                Save your progress as JSON and continue editing anytime, anywhere.
              </p>
            </div>

            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4 font-bold">
                AT
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ATS-Friendly
              </h3>
              <p className="text-gray-600">
                Structured format optimized for Applicant Tracking Systems.
              </p>
            </div>

            <div className="border border-gray-200 p-8 hover:border-gray-900 transition-colors">
              <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center mb-4 font-bold">
                8+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Complete Sections
              </h3>
              <p className="text-gray-600">
                Include experience, education, skills, projects, certifications, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Create your professional CV in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enter Your Information
              </h3>
              <p className="text-gray-600">
                Fill in your details using our intuitive forms. Add experience, education, skills, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Customize & Preview
              </h3>
              <p className="text-gray-600">
                Watch your CV take shape in real-time. Adjust sections and content as needed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Download & Apply
              </h3>
              <p className="text-gray-600">
                Export your CV as PDF and start applying to your dream opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Always free, no hidden costs
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="border-2 border-gray-900 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Forever</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-600">No credit card required</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">All CV sections included</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time preview</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Unlimited PDF exports</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Save and resume editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">No registration required</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">LaTeX-inspired design</span>
                </li>
              </ul>

              <Link
                href="/create"
                className="block w-full py-4 bg-gray-900 text-white font-semibold text-center hover:bg-gray-800 transition-colors"
              >
                Start Building Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Professional CV?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals creating stunning CVs. No signup required.
          </p>
          <Link
            href="/create"
            className="inline-block px-12 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gray-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm">CV</span>
              </div>
              <span className="font-semibold">CV Maker</span>
            </div>
            <div className="text-sm text-gray-600 text-center md:text-left">
              <p>© 2024 CV Maker. All rights reserved.</p>
              <p className="mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
