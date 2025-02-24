const Mobileapp =()=>{

    return(

        <div id="root">
    <section id="download-app" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
            
                <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2E4053] mb-6">
                        Get Our Mobile App
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Take your job search and classifieds on the go. Get real-time notifications and instant access
                        to new listings.
                    </p>

            
                    <div className="space-y-6 mb-8">
                        <div className="flex items-start gap-4">
                            <div
                                className="w-12 h-12 rounded-full bg-[#FF6B35] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#FF6B35]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#2E4053] mb-1">Real-time Notifications</h3>
                                <p className="text-gray-600">Get instant alerts for new jobs and listings that match your
                                    preferences</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div
                                className="w-12 h-12 rounded-full bg-[#FF6B35] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#FF6B35]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#2E4053] mb-1">Quick Apply</h3>
                                <p className="text-gray-600">Apply to jobs and respond to listings with just one tap</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div
                                className="w-12 h-12 rounded-full bg-[#FF6B35] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#FF6B35]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#2E4053] mb-1">Easy Posting</h3>
                                <p className="text-gray-600">Create and manage your listings on the go</p>
                            </div>
                        </div>
                    </div>

             
                    <div className="flex flex-wrap gap-4">
                        <button
                            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-[#2E4053] transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M17.721 1.599c-.432.575-.767 1.174-1.031 1.83-.704 1.75-1.077 3.714-.981 5.697.907.182 1.779.52 2.577 1.019 2.763 1.706 4.527 4.789 4.667 8.206-1.595-.519-3.341-.712-5.114-.544-.112-1.017-.382-2.022-.874-2.979-.265-.516-.577-.987-.914-1.426.648-.947 1.189-1.97 1.651-3.048 1.122-2.625 1.622-5.784.019-8.755zm-11.654.077c-1.626 2.96-1.135 6.124-.017 8.751.459 1.081.998 2.106 1.644 3.056-.337.439-.649.91-.914 1.426-.492.957-.762 1.962-.874 2.979-1.773-.168-3.519.025-5.114.544.141-3.417 1.904-6.5 4.667-8.206.798-.499 1.67-.837 2.577-1.019.096-1.983-.277-3.947-.981-5.697-.264-.656-.599-1.255-1.031-1.83.017-.005.034-.004.043-.004zm5.929 16.099c1.277 0 2.314 1.037 2.314 2.314 0 1.277-1.037 2.314-2.314 2.314-1.277 0-2.314-1.037-2.314-2.314 0-1.277 1.037-2.314 2.314-2.314zm0-2.314c-2.555 0-4.629 2.074-4.629 4.629 0 2.555 2.074 4.629 4.629 4.629 2.555 0 4.629-2.074 4.629-4.629 0-2.555-2.074-4.629-4.629-4.629z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs">Download on the</div>
                                <div className="text-xl font-semibold">App Store</div>
                            </div>
                        </button>

                        <button
                            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-[#2E4053] transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M3.609 1.814L13.792 12l-10.183 10.186L3.609 1.814zm17.529 10.483c1.018-.557 1.018-1.463 0-2.02L5.795 1.36 19.138 12.297zm0 1.403L5.795 22.64l15.343-10.937zM13.792 12L3.609 1.814l20.138 9.88L13.792 12z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs">GET IT ON</div>
                                <div className="text-xl font-semibold">Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>

        
                <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight">
                    <div className="relative mx-auto max-w-sm">
                        <div className="bg-[#2E4053] rounded-[3rem] p-4 shadow-2xl">
                            <div className="bg-white rounded-[2.5rem] overflow-hidden h-[600px]">
                                <div className="bg-[#2E4053] h-full w-full flex items-center justify-center text-white">
                                    <span className="text-xl">App Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Mobileapp;