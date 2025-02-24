const Powerfulfeautures=()=>{

    return(

<div id="root">
        <section id="features" className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeInDown">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Powerful Features</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">Everything you need to post and manage your listings
                effectively</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate__animated animate__fadeInUp">
                <div className="text-[#FF6B35] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Easy Submission</h3>
                <p className="text-neutral-600">Simple and intuitive form submission process with instant confirmation</p>
              </div>

              <div
                className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{animationDelay: '0.2s'}}>
                <div className="text-[#2E4053] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Advanced Filtering</h3>
                <p className="text-neutral-600">Powerful search and filter options to help find exactly what you need</p>
              </div>

              <div
                className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                     style={{animationDelay: '0.4s'}}>
                <div className="text-[#FF6B35] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Real-time Notifications</h3>
                <p className="text-neutral-600">Stay updated with instant notifications for your listings</p>
              </div>

              <div
                className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate__animated animate__fadeInUp">
                <div className="text-[#2E4053] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Image Upload</h3>
                <p className="text-neutral-600">Easy image upload and management for your listings</p>
              </div>

              <div
                className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{animationDelay: '0.2s'}}>
                <div className="text-[#FF6B35] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">Secure System</h3>
                <p className="text-neutral-600">Advanced security measures to protect your data</p>
              </div>

              <div
                className="bg-neutral-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2 animate__animated animate__fadeInUp"
                style={{animationDelay: '0.4s'}}>
                <div className="text-[#2E4053] mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">24/7 Support</h3>
                <p className="text-neutral-600">Round-the-clock assistance for all your needs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Powerfulfeautures;