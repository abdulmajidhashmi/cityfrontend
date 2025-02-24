const Steps =()=>{

    return(

        <div id="root">
    <section id="how-it-works" className="py-20 bg-[#2E4053] text-white">
        <div className="container mx-auto px-4">

            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate__animated animate__fadeIn">How It Works</h2>
                <p className="text-gray-300 max-w-2xl mx-auto animate__animated animate__fadeIn">Follow these simple steps
                    to get started with our platform</p>
            </div>

        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
                <div className="relative flex flex-col items-center text-center animate__animated animate__fadeInUp">
                    <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Create Account</h3>
                    <p className="text-gray-300">Sign up for free and create your profile to get started with our platform
                    </p>

        
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-2">
                        <svg className="text-[#FF6B35]" width="200" height="20">
                            <path d="M0 10 L200 10" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </div>

          
                <div
                    className="relative flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Search & Apply</h3>
                    <p className="text-gray-300">Browse through listings or post your own ad to reach thousands of users</p>

                
                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-2">
                        <svg className="text-[#FF6B35]" width="200" height="20">
                            <path d="M0 10 L200 10" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>
                </div>

        
                <div
                    className="flex flex-col items-center text-center animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Get Results</h3>
                    <p className="text-gray-300">Connect with employers or buyers and close deals quickly and easily</p>
                </div>
            </div>

            <div className="text-center mt-16">
                <button
                    className="bg-[#FF6B35] text-white px-8 py-4 rounded-lg hover:bg-[#ff8255] transition-colors transform hover:scale-105 animate__animated animate__fadeIn">
                    Get Started Now
                </button>
            </div>
        </div>
    </section>
</div>
    )
}

export default Steps;