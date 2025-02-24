const Hero=()=>{

    return(

<div id="root">
        <section id="hero" className="bg-neutral-900 min-h-[70vh] relative overflow-hidden">
          <div className="container mx-auto px-4 h-full flex items-center mt-6">
            <div className="grid md:grid-cols-2 gap-8 items-center py-16">
              <div className="text-white animate__animated animate__fadeInLeft">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Post Jobs & Ads with Ease
                </h1>
                <p className="text-neutral-300 text-lg md:text-xl mb-8">
                  Submit your listings through our simple, secure form system. Get instant confirmation and reach your
                  target audience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#postform"
                    className="bg-[#FF6B35] hover:bg-[#ff8555] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Post Now
                  </a>
                  <a href="#features"
                    className="bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative animate__animated animate__fadeInRight">
                <div className="bg-[#2E4053] rounded-lg p-8 relative z-10">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FF6B35] rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6B35] rounded-full opacity-20"></div>
                  <div className="relative z-20">
                    <h3 className="text-white text-2xl font-bold mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-[#FF6B35] text-3xl font-bold">10K+</p>
                        <p className="text-neutral-300">Active Jobs</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#FF6B35] text-3xl font-bold">5K+</p>
                        <p className="text-neutral-300">Daily Ads</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#FF6B35] text-3xl font-bold">50K+</p>
                        <p className="text-neutral-300">Users</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#FF6B35] text-3xl font-bold">95%</p>
                        <p className="text-neutral-300">Success Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-neutral-100">
              <path
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </section>
      </div>
    )
}


export default Hero;