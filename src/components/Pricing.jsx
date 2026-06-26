// src/components/Pricing.jsx (Part 1)

import { useMemo, useState } from "react";
import pricingMatrix, { currencies } from "../data/pricing";
import { calculatePrice } from "../utils/pricingEngine";

export default function Pricing() {
  // Local state only (prevents global rerenders)

  const [currency, setCurrency] = useState("USD");
  const [yearly, setYearly] = useState(false);

  const plans = useMemo(
    () => Object.keys(pricingMatrix),
    []
  );

  return (
    <section
      id="pricing"
      className="py-28 px-6 bg-[#F1F6F4]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-[#FF9932] font-semibold">

            Pricing

          </span>

          <h2 className="mt-4 text-5xl font-bold font-mono text-[#172B36]">

            Flexible Pricing

          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">

            Choose the perfect plan for your business.
            Switch currencies instantly and save 20%
            with annual billing.

          </p>

        </div>

        {/* Controls */}

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">

          {/* Billing Toggle */}

          <div className="flex items-center gap-5">

            <span
              className={`font-medium ${
                !yearly
                  ? "text-[#172B36]"
                  : "text-gray-400"
              }`}
            >
              Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className={`w-16 h-9 rounded-full relative transition ${
                yearly
                  ? "bg-[#114C5A]"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full transition-transform ${
                  yearly
                    ? "translate-x-7"
                    : ""
                }`}
              />
            </button>

            <span
              className={`font-medium ${
                yearly
                  ? "text-[#172B36]"
                  : "text-gray-400"
              }`}
            >
              Annual
            </span>

            <span className="bg-[#FFC801] px-3 py-1 rounded-full text-sm font-semibold">

              Save 20%

            </span>

          </div>

          {/* Currency */}

          <select
            value={currency}
            onChange={(e) =>
              setCurrency(e.target.value)
            }
            className="px-5 py-3 rounded-xl border bg-white outline-none"
          >
            {Object.keys(currencies).map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Cards */}

        <div className="mt-20 grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => {

            const price = calculatePrice(
              plan,
              currency,
              yearly
            );

            const popular =
              plan === "Professional";

            return (

              <div
                key={plan}
                className={`relative rounded-3xl p-8 transition duration-300 hover:-translate-y-2 shadow-xl

                ${
                  popular
                    ? "bg-[#114C5A] text-white scale-105"
                    : "bg-white"
                }
                `}
              >

                {popular && (

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                    <span className="bg-[#FFC801] text-[#172B36] px-5 py-2 rounded-full text-sm font-bold">

                      MOST POPULAR

                    </span>

                  </div>

                )}

                <h3
                  className={`font-mono text-2xl font-bold ${
                    popular
                      ? "text-white"
                      : "text-[#172B36]"
                  }`}
                >
                  {plan}
                </h3>

                <div className="mt-8 flex items-end gap-2">

                  <span className="text-5xl font-bold">

                    {price.symbol}
                    {price.amount}

                  </span>

                  <span
                    className={`mb-2 ${
                      popular
                        ? "text-gray-200"
                        : "text-gray-500"
                    }`}
                  >
                    {yearly ? "/year" : "/month"}
                  </span>

                </div>

                {/* Features continue in Part 2 */}
                <ul className="mt-8 space-y-4">

                  <li className="flex items-center gap-3">
                    <span className="text-[#FFC801]">✔</span>
                    <span>Unlimited AI Workflows</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-[#FFC801]">✔</span>
                    <span>Real-Time Analytics Dashboard</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-[#FFC801]">✔</span>
                    <span>Cloud Integrations</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-[#FFC801]">✔</span>
                    <span>API Access</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="text-[#FFC801]">✔</span>
                    <span>Priority Support</span>
                  </li>

                </ul>

                <button
                  className={`mt-10 w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    popular
                      ? "bg-[#FFC801] text-[#172B36] hover:bg-[#FF9932]"
                      : "bg-[#114C5A] text-white hover:bg-[#172B36]"
                  }`}
                >
                  Start Free Trial
                </button>

              </div>

            );

          })}

        </div>

        {/* Enterprise Banner */}

        <div className="mt-20 rounded-3xl bg-[#172B36] text-white p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h3 className="font-mono text-3xl font-bold">

              Need a Custom Enterprise Solution?

            </h3>

            <p className="mt-4 text-gray-300 leading-7 max-w-2xl">

              Get dedicated infrastructure, custom AI models,
              unlimited automation, enterprise-grade security,
              onboarding support and SLA-backed performance.

            </p>

          </div>

          <button
            className="bg-[#FFC801]
            hover:bg-[#FF9932]
            transition
            px-8
            py-4
            rounded-xl
            font-semibold
            text-[#172B36]"
          >
            Contact Sales
          </button>

        </div>

      </div>

    </section>

  );

}