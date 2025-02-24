const Searchsection=()=>{


    return (
<div id="root">
    <section id="hero" className="bg-[#2E4053] min-h-screen py-20">
        <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate__animated animate__fadeIn">
                    Your Gateway to Local <span className="text-[#FF6B35]">Jobs</span> & <span
                        className="text-[#FF6B35]">Classifieds</span>
                </h1>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl animate__animated animate__fadeIn animate__delay-1s">
                    Connect with thousands of opportunities and local deals in your city
                </p>

         
                <div
                    className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="relative">
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF6B35]">
                                <option value="">Select Category</option>
                                <option value="jobs">Jobs</option>
                                <option value="rentals">Rentals</option>
                                <option value="sale">For Sale</option>
                                <option value="services">Services</option>
                            </select>
                        </div>

                        <div className="relative">
                            <input type="text" placeholder="Location"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FF6B35]"/>
                        </div>

                        <button
                            className="w-full bg-[#FF6B35] text-white px-8 py-3 rounded-lg hover:bg-[#ff8255] transition-all transform hover:scale-105">
                            Search Now
                        </button>
                    </div>
                </div>

      
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-white animate__animated animate__fadeIn animate__delay-3s">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">10K+</h3>
                        <p className="text-gray-300">Active Jobs</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">5K+</h3>
                        <p className="text-gray-300">Local Ads</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">50K+</h3>
                        <p className="text-gray-300">Users</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-2">1K+</h3>
                        <p className="text-gray-300">Companies</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#FF6B35] rounded-full opacity-10"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#FF6B35] rounded-full opacity-10"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-10"></div>
        </div>
    </section>
</div>
    )
}

export default Searchsection;