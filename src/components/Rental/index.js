const Rental=()=>{

    return (

        <div id="root">
    <section id="trending-ads" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E4053] mb-4 animate__animated animate__fadeIn">
                    Trending Classifieds</h2>
                <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn">Browse the most popular
                    local listings in your area</p>
            </div>


            <div className="flex flex-wrap gap-4 mb-8 justify-center animate__animated animate__fadeIn">
                <button
                    className="px-6 py-2 rounded-full bg-[#2E4053] text-white hover:bg-[#FF6B35] transition-colors">All</button>
                <button
                    className="px-6 py-2 rounded-full border border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white transition-colors">Properties</button>
                <button
                    className="px-6 py-2 rounded-full border border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white transition-colors">Vehicles</button>
                <button
                    className="px-6 py-2 rounded-full border border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white transition-colors">Electronics</button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
                <div
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow animate__animated animate__fadeIn">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="p-4">
                        <span className="text-sm text-[#FF6B35] font-semibold">Properties</span>
                        <h3 className="text-lg font-bold text-[#2E4053] mt-1">Modern Apartment</h3>
                        <p className="text-gray-600 text-sm mt-2">2 BHK Fully Furnished</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            Manhattan, NY
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-[#2E4053]">$2,500/mo</span>
                            <button
                                className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#ff8255] transition-colors">View
                                Details</button>
                        </div>
                    </div>
                </div>

           
                <div
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow animate__animated animate__fadeIn">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M8 16v-4m4 4v-8m4 8V8" />
                        </svg>
                    </div>
                    <div className="p-4">
                        <span className="text-sm text-[#FF6B35] font-semibold">Electronics</span>
                        <h3 className="text-lg font-bold text-[#2E4053] mt-1">MacBook Pro 2023</h3>
                        <p className="text-gray-600 text-sm mt-2">M2 Chip, 16GB RAM</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            Brooklyn, NY
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-[#2E4053]">$1,899</span>
                            <button
                                className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#ff8255] transition-colors">View
                                Details</button>
                        </div>
                    </div>
                </div>

        
                <div
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow animate__animated animate__fadeIn">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div className="p-4">
                        <span className="text-sm text-[#FF6B35] font-semibold">Vehicles</span>
                        <h3 className="text-lg font-bold text-[#2E4053] mt-1">Tesla Model 3</h3>
                        <p className="text-gray-600 text-sm mt-2">2023, Long Range</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            Queens, NY
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-[#2E4053]">$45,990</span>
                            <button
                                className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#ff8255] transition-colors">View
                                Details</button>
                        </div>
                    </div>
                </div>

            
                <div
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow animate__animated animate__fadeIn">
                    <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <div className="p-4">
                        <span className="text-sm text-[#FF6B35] font-semibold">Properties</span>
                        <h3 className="text-lg font-bold text-[#2E4053] mt-1">Luxury Villa</h3>
                        <p className="text-gray-600 text-sm mt-2">4 BHK with Pool</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            Staten Island, NY
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-[#2E4053]">$4,500/mo</span>
                            <button
                                className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#ff8255] transition-colors">View
                                Details</button>
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="text-center mt-12">
                <button
                    className="bg-[#2E4053] text-white px-8 py-3 rounded-lg hover:bg-[#FF6B35] transition-colors animate__animated animate__fadeIn">
                    View All Listings
                </button>
            </div>
        </div>
    </section>
</div>
    )
}

export default Rental;