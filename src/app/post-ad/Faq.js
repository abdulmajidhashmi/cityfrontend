'use client';
import { useState } from "react";

const faqData = [
    {
        question: "How do I post a job or ad?",
        answer:
            'Simply click on the "Post Now" button, choose your listing type (Job or Ad), fill in the required information, and submit. Your listing will be reviewed and published shortly.',
    },
    {
        question: "What are the pricing plans?",
        answer:
            "We offer three plans: Basic (free), Pro ($29/month), and Enterprise ($99/month). Each plan comes with different features and posting limits. Check our pricing section for details.",
    },
    {
        question: "How long do listings stay active?",
        answer:
            "Listing duration varies by plan: Basic (7 days), Pro (30 days), and Enterprise (90 days). You can always renew or extend your listings.",
    },
    {
        question: "Can I edit my listing after posting?",
        answer:
            "Yes, you can edit your listings at any time through your dashboard. Changes will be reviewed before going live.",
    },
];
const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (id) => {
      setSelected(selected === id ? null : id);
    };
    return (
        <>
            <div id="root">
                <section id="faq" className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 animate__animated animate__fadeInDown">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Frequently Asked Questions</h2>
                            <p className="text-neutral-600 max-w-2xl mx-auto">Find answers to common questions about posting jobs and ads
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto" x-data="{selected:null}">

                            {faqData.map((item, index) => (
                                <div key={index} className="mb-4 animate__animated animate__fadeInUp">
                                    <button onClick={() => toggle(index)}
                                        className="flex justify-between items-center w-full px-6 py-4 text-left bg-neutral-50 hover:bg-neutral-100 rounded-lg focus:outline-none">
                                        <span className="text-lg font-semibold text-neutral-800">{item.question}</span>
                                        <svg className={`w-6 h-6 text-[#FF6B35]" ${selected === index ? "rotate-180" : ""
                                            }`} fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {selected === index && (
                <div className="px-6 py-4 text-neutral-600">{item.answer}</div>
              )}
                                </div>
                            ))}
                        </div>
                    </div >
                </section >
                {/* 
        <script>
          document.addEventListener('alpine:init', () => {
            Alpine.data('collapse', () => ({
              expanded: false,
              toggle() {
                this.expanded = !this.expanded;
              }
            }));
          });
        </script> */}
            </div >
        </>

    )
}

export default Faq;