// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-[#172B36] text-white">

      {/* Newsletter */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="bg-[#114C5A] rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="font-mono text-3xl font-bold">

              Stay Ahead with AI Insights

            </h2>

            <p className="mt-3 text-gray-200 max-w-xl">

              Receive the latest product updates, automation tips,
              AI trends, and exclusive early-access features directly
              in your inbox.

            </p>

          </div>

          <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-[#172B36] rounded-xl px-5 py-3 outline-none min-w-[260px]"
            />

            <button
              type="submit"
              className="bg-[#FFC801] hover:bg-[#FF9932]
              transition duration-300
              rounded-xl
              px-7
              py-3
              font-semibold
              text-[#172B36]"
            >
              Subscribe
            </button>

          </form>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-5 gap-10">

          {/* Logo */}

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-[#FFC801] text-[#172B36] flex items-center justify-center font-bold font-mono">

                AI

              </div>

              <div>

                <h2 className="font-mono text-2xl font-bold">

                  DataFlow AI

                </h2>

                <p className="text-sm text-gray-400">

                  Intelligent Data Automation

                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-8 max-w-md">

              Empowering organizations with AI-driven workflow
              automation, predictive intelligence, and enterprise-scale
              data orchestration.

            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-mono text-lg mb-5">

              Product

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#features" className="hover:text-[#FFC801] transition">Features</a></li>

              <li><a href="#pricing" className="hover:text-[#FFC801] transition">Pricing</a></li>

              <li><a href="#" className="hover:text-[#FFC801] transition">Integrations</a></li>

              <li><a href="#" className="hover:text-[#FFC801] transition">API</a></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-mono text-lg mb-5">

              Company

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#" className="hover:text-[#FFC801] transition">About</a></li>

              <li><a href="#" className="hover:text-[#FFC801] transition">Blog</a></li>

              <li><a href="#testimonials" className="hover:text-[#FFC801] transition">Customers</a></li>

              <li><a href="#faq" className="hover:text-[#FFC801] transition">Support</a></li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="font-mono text-lg mb-5">

              Connect

            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#" className="hover:text-[#FFC801] transition">LinkedIn</a></li>

              <li><a href="#" className="hover:text-[#FFC801] transition">GitHub</a></li>

              <li><a href="#" className="hover:text-[#FFC801] transition">Twitter</a></li>

              <li><a href="#" className="hover:text-[#FFC801] transition">Contact</a></li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">

            © {new Date().getFullYear()} DataFlow AI. All rights reserved.

          </p>

          <div className="flex gap-6 text-sm text-gray-500">

            <a href="#" className="hover:text-[#FFC801] transition">
              Privacy
            </a>

            <a href="#" className="hover:text-[#FFC801] transition">
              Terms
            </a>

            <a href="#" className="hover:text-[#FFC801] transition">
              Cookies
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}