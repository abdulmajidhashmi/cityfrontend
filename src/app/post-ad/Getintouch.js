const Getintouch=()=>{

    return(

<div id="root">
        <section id="contact" className="bg-neutral-900 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate__animated animate__fadeInDown">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Have questions? We're here to help you 24/7</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#2E4053] rounded-full flex items-center justify-center text-[#FF6B35]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-neutral-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#2E4053] rounded-full flex items-center justify-center text-[#FF6B35]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">Email</p>
                      <p className="text-neutral-400">support@jobportal.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#2E4053] rounded-full flex items-center justify-center text-[#FF6B35]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-white font-medium">Location</p>
                      <p className="text-neutral-400">123 Business Street, Suite 100<br/>New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
                <form id="contactForm" className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-[#FF6B35]"
                      placeholder="Your name"/>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-[#FF6B35]"
                      placeholder="Your email"/>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="subject">Subject</label>
                    <input type="text" id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-[#FF6B35]"
                      placeholder="Subject"/>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="message">Message</label>
                    <textarea id="message" rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-neutral-700 border border-neutral-600 text-white focus:outline-none focus:border-[#FF6B35]"
                      placeholder="Your message"></textarea>
                  </div>

                  <button type="submit"
                    className="w-full bg-[#FF6B35] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#ff8555]">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
{/* 
        <script>
          document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            // Add form submission logic here
          });
        </script> */}
      </div>
    )
}

export default Getintouch;