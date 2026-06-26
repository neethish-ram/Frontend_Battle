import { useState } from "react";

const faqs = [
  {
    question: "How does the AI automation platform work?",
    answer:
      "Our platform connects with your existing tools, automates repetitive workflows, and transforms raw operational data into actionable insights using AI-powered decision engines."
  },
  {
    question: "Can I change my plan anytime?",
    answer:
      "Yes. You can upgrade, downgrade, or cancel your subscription whenever you need without losing your saved workflows."
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. All information is encrypted in transit and at rest, with enterprise-grade security, role-based permissions, and continuous monitoring."
  },
  {
    question: "Does it integrate with third-party applications?",
    answer:
      "Yes. Connect CRMs, spreadsheets, databases, cloud storage, APIs, and hundreds of business applications using our automation engine."
  },
  {
    question: "Do you offer enterprise support?",
    answer:
      "Enterprise customers receive dedicated onboarding, priority support, SLA guarantees, and custom deployment assistance."
  }
];

export default function FAQ() {

  const [openIndex,setOpenIndex]=useState(0);

  return (

<section className="container">

<div className="text-center mb-14">

<h2 className="text-4xl font-bold mb-4">

Frequently Asked Questions

</h2>

<p className="text-gray-600 max-w-2xl mx-auto">

Everything you need to know before automating your workflows.

</p>

</div>

<div className="max-w-4xl mx-auto space-y-5">

{faqs.map((faq,index)=>(

<div
key={index}
className="card overflow-hidden border border-gray-200"
>

<button

onClick={()=>setOpenIndex(
openIndex===index?-1:index
)}

className="w-full flex justify-between items-center px-6 py-5 text-left"

>

<h3 className="text-lg font-semibold">

{faq.question}

</h3>

<span
className={`text-2xl transition-transform duration-300 ${
openIndex===index
? "rotate-45"
: ""
}`}
>

+

</span>

</button>

<div

className={`grid transition-all duration-500 ease-in-out ${
openIndex===index
? "grid-rows-[1fr]"
: "grid-rows-[0fr]"
}`}

>

<div className="overflow-hidden">

<p className="px-6 pb-6 text-gray-600 leading-8">

{faq.answer}

</p>

</div>

</div>

</div>

))}

</div>

</section>

  );

}