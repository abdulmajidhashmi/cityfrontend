const Pricing=()=>{

    return(

<div id="root">
        <section id="pricing" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeInDown">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Simple Pricing Plans</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Choose the perfect plan for your posting needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           
              <div
                className="bg-neutral-50 rounded-xl p-8 border-2 border-neutral-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate__animated animate__fadeInUp">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Basic</h3>
                  <div className="text-[#2E4053] mb-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-neutral-600">/month</span>
                  </div>
                  <p className="text-neutral-600">Perfect for getting started</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    1 Job Posting
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Basic Analytics
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    7 Days Visibility
                  </li>
                </ul>
                <a href="#postform"
                  className="block text-center bg-white border-2 border-[#2E4053] text-[#2E4053] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#2E4053] hover:text-white">
                  Get Started
                </a>
              </div>

              <div
                className="bg-[#2E4053] rounded-xl p-8 border-2 border-[#2E4053] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{animationDelay: '0.2s'}}>
                <div className="absolute -top-4 right-4">
                  <span className="bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm">Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                  <div className="text-white mb-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-neutral-300">/month</span>
                  </div>
                  <p className="text-neutral-300">Best for growing businesses</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    10 Job Postings
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    30 Days Visibility
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Featured Listings
                  </li>
                </ul>
                <a href="#postform"
                  className="block text-center bg-[#FF6B35] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#ff8555]">
                  Get Started
                </a>
              </div>

     
              <div
                className="bg-neutral-50 rounded-xl p-8 border-2 border-neutral-200 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{animationDelay: '0.4s'}}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">Enterprise</h3>
                  <div className="text-[#2E4053] mb-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-neutral-600">/month</span>
                  </div>
                  <p className="text-neutral-600">For large organizations</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Unlimited Postings
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium Analytics
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    90 Days Visibility
                  </li>
                  <li className="flex items-center text-neutral-600">
                    <svg className="w-5 h-5 text-[#FF6B35] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Priority Support
                  </li>
                </ul>
                <a href="#postform"
                  className="block text-center bg-white border-2 border-[#2E4053] text-[#2E4053] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#2E4053] hover:text-white">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Pricing;