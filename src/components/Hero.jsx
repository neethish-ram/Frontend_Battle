// src/components/Hero.jsx

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current.animate(
      [
        {
          opacity: 0,
          transform: "translateY(40px)",
        },
        {
          opacity: 1,
          transform: "translateY(0px)",
        },
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center bg-[#F1F6F4] pt-24"
    >
      {/* Background Blobs */}

      <div className="absolute w-96 h-96 bg-[#FFC801]/30 rounded-full blur-3xl -top-20 -left-24 animate-pulse"></div>

      <div className="absolute w-[450px] h-[450px] bg-[#FF9932]/20 rounded-full blur-3xl right-0 top-40 animate-pulse"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,76,90,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,76,90,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}

        <div>
          <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-[#114C5A]">
             AI Powered Workflow Automation
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight font-mono text-[#172B36]">
            Transform
            <span className="text-[#FF9932]"> Data </span>
            Into
            <br />
            Intelligent
            <span className="text-[#114C5A]"> Decisions</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Build AI-powered automation pipelines that collect, process,
            analyze and deliver insights in real time. Reduce manual work and
            accelerate business decisions with enterprise-grade intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-[#FFC801] hover:bg-[#FF9932] transition px-8 py-4 rounded-xl font-semibold shadow-lg">
              Start Free Trial
            </button>

            <button className="border-2 border-[#114C5A] text-[#114C5A] hover:bg-[#114C5A] hover:text-white transition px-8 py-4 rounded-xl font-semibold">
              Watch Demo
            </button>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-4xl font-bold text-[#114C5A]">120K+</h2>
              <p className="text-gray-500">Automated Tasks</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#114C5A]">99.9%</h2>
              <p className="text-gray-500">Platform Uptime</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#114C5A]">340+</h2>
              <p className="text-gray-500">Integrations</p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative flex justify-center">
          {/* Dashboard */}

          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-xl border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-mono text-xl font-bold text-[#172B36]">
                AI Dashboard
              </h3>

              <span className="bg-[#D9E8E2] text-[#114C5A] px-4 py-2 rounded-full text-sm">
                Live
              </span>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F1F6F4] p-5 rounded-xl">
                <div className="flex justify-between">
                  <span>Automation Score</span>
                  <span className="font-bold text-[#114C5A]">98%</span>
                </div>

                <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-[#FFC801] rounded-full"></div>
                </div>
              </div>

              <div className="bg-[#F1F6F4] p-5 rounded-xl">
                <div className="flex justify-between">
                  <span>Prediction Accuracy</span>
                  <span className="font-bold text-[#114C5A]">96%</span>
                </div>

                <div className="mt-3 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-[#FF9932] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#114C5A] rounded-xl p-5 text-white">
                  <p className="text-sm opacity-80">Requests</p>

                  <h2 className="text-3xl font-bold mt-2">1.2M</h2>
                </div>

                <div className="bg-[#172B36] rounded-xl p-5 text-white">
                  <p className="text-sm opacity-80">Cost Saved</p>

                  <h2 className="text-3xl font-bold mt-2">72%</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}

          <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-xl px-5 py-4 animate-bounce">
            <p className="text-sm text-gray-500">Today's Tasks</p>
            <h3 className="font-bold text-[#114C5A]">+842</h3>
          </div>

          <div className="absolute -right-6 bottom-12 bg-white rounded-xl shadow-xl px-5 py-4 animate-bounce delay-300">
            <p className="text-sm text-gray-500">AI Insights</p>
            <h3 className="font-bold text-[#FF9932]">+124%</h3>
          </div>
        </div>
      </div>
    </section>
  );
}