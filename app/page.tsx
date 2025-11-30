import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">CV Maker</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/create"
                className="px-6 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Create CV
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="border-b-2 border-gray-900 pb-8 mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            Professional CV Builder
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            Create a professional curriculum vitae using a LaTeX-inspired template.
            Designed for academics, researchers, and professionals who value clear,
            structured documentation of their qualifications and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-900 pb-1">
              Key Features
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span>•</span>
                <span>LaTeX-inspired typography and formatting</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Real-time preview as you type</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Export to PDF with perfect formatting</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Save and resume editing anytime</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>ATS-compatible clean structure</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>No registration required</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold uppercase mb-3 border-b border-gray-900 pb-1">
              Included Sections
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span>•</span>
                <span>Personal Information & Contact Details</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Education & Academic Qualifications</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Professional Experience</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Research Projects & Publications</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Technical Skills & Competencies</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Certifications & Awards</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Languages</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <Link
            href="/create"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Start Building Your CV
          </Link>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold uppercase mb-6 border-b-2 border-gray-900 pb-2">
            Design Philosophy
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">LaTeX-Inspired Formatting</h3>
              <p className="leading-relaxed">
                Our CV builder uses serif typography (Georgia, Times New Roman) and structured
                layouts inspired by professional LaTeX document templates. This provides a
                traditional, academic appearance that is widely recognized and respected in
                professional settings.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Content-First Approach</h3>
              <p className="leading-relaxed">
                The design prioritizes clarity and readability. Clean section separators,
                consistent spacing, and logical hierarchy ensure that your qualifications
                and experience are presented in the most effective manner.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Standards</h3>
              <p className="leading-relaxed">
                Following conventions used in academic and technical resumes, the template
                includes proper date formatting, institutional affiliations, and structured
                presentation of achievements. Suitable for applications to universities,
                research institutions, and professional organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold uppercase mb-6 border-b-2 border-gray-900 pb-2">
          How to Use
        </h2>

        <div className="space-y-6">
          <div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Enter Your Information</h3>
                <p className="text-gray-700">
                  Fill in your personal details, education, experience, and skills using the
                  structured forms. Each section can be expanded or collapsed as needed.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Review Live Preview</h3>
                <p className="text-gray-700">
                  View your CV in real-time as you make changes. The preview shows exactly
                  how your final document will appear when printed or exported to PDF.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 border-2 border-gray-900 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Export or Save</h3>
                <p className="text-gray-700">
                  Export your CV to PDF using your browser's print function, or save your
                  data as JSON to continue editing later. No account registration required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold uppercase mb-6 border-b-2 border-gray-900 pb-2">
            Technical Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Built With</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Next.js 15 (React Framework)</li>
                <li>TypeScript (Type Safety)</li>
                <li>Tailwind CSS (Styling)</li>
                <li>PDF Export via Browser Print</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Browser Compatibility</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Chrome, Firefox, Safari, Edge</li>
                <li>Modern browsers (2020+)</li>
                <li>Desktop and mobile devices</li>
                <li>JavaScript required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="border-2 border-gray-900 p-12 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">
            Ready to Create Your CV?
          </h2>
          <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
            Start building your professional curriculum vitae now. No registration,
            no payment, no unnecessary features—just a clean, effective CV builder.
          </p>
          <Link
            href="/create"
            className="inline-block px-12 py-4 bg-gray-900 text-white font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Create Your CV
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-gray-900 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-gray-600">
            <p className="font-bold text-gray-900 mb-2">CV Maker</p>
            <p>Professional CV Builder • LaTeX-Inspired Design</p>
            <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
