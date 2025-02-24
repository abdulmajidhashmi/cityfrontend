const Step=()=>{

    return(
<div id="root">
        <section id="howItWorks" className="bg-neutral-900 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeInDown">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Follow these simple steps to post your job or ad listing</p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#FF6B35] transform -translate-y-1/2">
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="relative bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInUp">
                  <div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1</div>
                  <div className="text-center mt-8">
                    <svg className="w-12 h-12 mx-auto text-[#FF6B35] mb-4" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white mb-3">Create Account</h3>
                    <p className="text-neutral-400">Sign up for free and verify your email</p>
                  </div>
                </div>

                <div className="relative bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInUp"
                   style={{animationDelay: '0.2s'}}>
                  <div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2</div>
                  <div className="text-center mt-8">
                    <svg className="w-12 h-12 mx-auto text-[#FF6B35] mb-4" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white mb-3">Fill Details</h3>
                    <p className="text-neutral-400">Enter your listing information</p>
                  </div>
                </div>

                <div className="relative bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInUp"
                  style={{animationDelay: '0.4s'}}>
                  <div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3</div>
                  <div className="text-center mt-8">
                    <svg className="w-12 h-12 mx-auto text-[#FF6B35] mb-4" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white mb-3">Preview</h3>
                    <p className="text-neutral-400">Review your listing details</p>
                  </div>
                </div>

                <div className="relative bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInUp"
                 style={{animationDelay: '0.6s'}}>
                  <div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    4</div>
                  <div className="text-center mt-8">
                    <svg className="w-12 h-12 mx-auto text-[#FF6B35] mb-4" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-semibold text-white mb-3">Publish</h3>
                    <p className="text-neutral-400">Your listing goes live instantly</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#postform"
                className="inline-block bg-[#FF6B35] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#ff8555] animate__animated animate__fadeInUp">
                Start Posting Now
              </a>
            </div>
          </div>
        </section>
      </div>

    )
}

export default Step;