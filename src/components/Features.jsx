import { useEffect, useState } from "react";

const features = [
  {
    id: 0,
    title: "AI Workflow Engine",
    description:
      "Automate repetitive business processes with intelligent workflow orchestration.",
    stat: "99.9% Accuracy",
    color: "bg-[#114C5A]",
  },
  {
    id: 1,
    title: "Predictive Analytics",
    description:
      "Forecast business outcomes using real-time machine learning models.",
    stat: "340% Faster",
    color: "bg-[#FFC801]",
  },
  {
    id: 2,
    title: "Secure Cloud Sync",
    description:
      "Enterprise-grade encrypted synchronization across all connected systems.",
    stat: "AES-256",
    color: "bg-[#FF9932]",
  },
  {
    id: 3,
    title: "Smart API Integrations",
    description:
      "Connect CRMs, databases, spreadsheets and cloud platforms effortlessly.",
    stat: "150+ APIs",
    color: "bg-[#172B36]",
  },
  {
    id: 4,
    title: "Live Monitoring",
    description:
      "Track every automation in real time with intelligent notifications.",
    stat: "24/7",
    color: "bg-[#114C5A]",
  },
  {
    id: 5,
    title: "Decision Intelligence",
    description:
      "Generate AI-powered recommendations from millions of records instantly.",
    stat: "AI Powered",
    color: "bg-[#FFC801]",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [mobile, setMobile] = useState(window.innerWidth < 768);

  // Detect resize

  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="bg-[#F1F6F4] py-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-[#FF9932] font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="mt-4 text-5xl font-bold font-mono text-[#172B36]">

            Powerful AI Capabilities

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">

            Discover how intelligent automation transforms data into business
            decisions through modern AI infrastructure.

          </p>

        </div>

        {/* Desktop */}

        {!mobile && (

          <div className="grid lg:grid-cols-3 gap-6 auto-rows-[220px]">

            {features.map((feature, index) => (

              <div

                key={feature.id}

                onMouseEnter={() => setActiveIndex(index)}

                className={`
                rounded-3xl
                cursor-pointer
                p-8
                transition-all
                duration-300
                shadow-lg
                ${
                  activeIndex === index
                    ? "scale-105 shadow-2xl bg-white"
                    : "bg-white hover:shadow-xl"
                }

                ${index === 0 ? "lg:col-span-2" : ""}
                ${index === 4 ? "lg:col-span-2" : ""}
                `}
              >

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl ${feature.color}`}
                >
                  ⚡
                </div>

                <h3 className="mt-8 text-2xl font-bold font-mono text-[#172B36]">

                  {feature.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-7">

                  {feature.description}

                </p>

                <div className="mt-8">

                  <span className="inline-block bg-[#D9E8E2] text-[#114C5A] px-4 py-2 rounded-full font-semibold">

                    {feature.stat}

                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Mobile Accordion will be added in Part 2 */}
        {/* Mobile Accordion */}

{mobile && (
  <div className="space-y-4">

    {features.map((feature, index) => (
      <div
        key={feature.id}
        className="rounded-2xl bg-white shadow-lg overflow-hidden transition-all duration-300"
      >
        {/* Header */}

        <button
          onClick={() =>
            setActiveIndex(activeIndex === index ? -1 : index)
          }
          className="w-full flex items-center justify-between px-6 py-5 text-left"
        >
          <div className="flex items-center gap-4">

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${feature.color}`}
            >
              ⚡
            </div>

            <div>

              <h3 className="font-mono text-lg font-bold text-[#172B36]">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500">
                {feature.stat}
              </p>

            </div>

          </div>

          <span
            className={`text-2xl transition-transform duration-300 ${
              activeIndex === index ? "rotate-45" : ""
            }`}
          >
            +
          </span>

        </button>

        {/* Content */}

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            activeIndex === index
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">

            <div className="px-6 pb-6">

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

              <button
                className="mt-5 bg-[#FFC801] hover:bg-[#FF9932]
                transition px-5 py-2 rounded-lg font-semibold"
              >
                Learn More
              </button>

            </div>

          </div>
        </div>

      </div>
    ))}

  </div>
)}

      </div>

    </section>
  );
}