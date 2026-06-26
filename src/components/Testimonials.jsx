// src/components/Testimonials.jsx

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechNova",
    rating: 5,
    review:
      "DataFlow AI transformed our operations. Tasks that previously took hours are now automated in minutes. The analytics dashboard is simply outstanding.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "CloudSync",
    rating: 5,
    review:
      "The AI workflow engine and predictive analytics helped us improve efficiency by more than 70%. Deployment was seamless.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Operations Lead",
    company: "NextGen Labs",
    rating: 5,
    review:
      "An elegant platform with powerful automation capabilities. Our teams now focus on innovation instead of repetitive manual work.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 px-6 bg-[#D9E8E2]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-[#FF9932] font-semibold">

            Testimonials

          </span>

          <h2 className="mt-4 text-5xl font-bold font-mono text-[#172B36]">

            Trusted by Teams Worldwide

          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">

            Organizations rely on our AI-powered automation platform
            to streamline workflows, improve productivity, and unlock
            real-time business insights.

          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              {/* Avatar */}

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full bg-[#114C5A] flex items-center justify-center text-white text-xl font-bold font-mono">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3 className="font-semibold text-lg text-[#172B36]">

                    {item.name}

                  </h3>

                  <p className="text-gray-500 text-sm">

                    {item.role}

                  </p>

                  <p className="text-[#114C5A] text-sm font-medium">

                    {item.company}

                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex gap-1 mt-6">

                {Array.from({ length: item.rating }).map((_, index) => (
                  <span
                    key={index}
                    className="text-[#FFC801] text-xl"
                  >
                    ★
                  </span>
                ))}

              </div>

              {/* Review */}

              <p className="mt-6 text-gray-600 leading-8">

                "{item.review}"

              </p>

            </div>

          ))}

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <h3 className="text-4xl font-bold text-[#114C5A]">

              120K+

            </h3>

            <p className="mt-2 text-gray-600">

              Active Users

            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <h3 className="text-4xl font-bold text-[#114C5A]">

              99.9%

            </h3>

            <p className="mt-2 text-gray-600">

              Platform Uptime

            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <h3 className="text-4xl font-bold text-[#114C5A]">

              500+

            </h3>

            <p className="mt-2 text-gray-600">

              Enterprise Clients

            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <h3 className="text-4xl font-bold text-[#114C5A]">

              4.9/5

            </h3>

            <p className="mt-2 text-gray-600">

              Customer Rating

            </p>

          </div>

        </div>

      </div>
    </section>
  );
}