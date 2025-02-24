const Category=()=>{


    return(
// df

<div id="root">
    <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E4053] mb-4 animate__animated animate__fadeIn">Popular
                    Categories</h2>
                <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn">Browse listings by category
                    to find exactly what you're looking for</p>
            </div>

           
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Jobs</h3>
                    <p className="text-gray-500 text-sm">12,350 Listings</p>
                </div>

            
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Real Estate</h3>
                    <p className="text-gray-500 text-sm">8,245 Listings</p>
                </div>

     
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Vehicles</h3>
                    <p className="text-gray-500 text-sm">5,127 Listings</p>
                </div>

       
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Electronics</h3>
                    <p className="text-gray-500 text-sm">3,890 Listings</p>
                </div>


                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Shopping</h3>
                    <p className="text-gray-500 text-sm">7,432 Listings</p>
                </div>

           
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Services</h3>
                    <p className="text-gray-500 text-sm">4,521 Listings</p>
                </div>

               
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Finance</h3>
                    <p className="text-gray-500 text-sm">2,890 Listings</p>
                </div>

           
                <div
                    className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all transform hover:-translate-y-1 animate__animated animate__fadeIn cursor-pointer group">
                    <div
                        className="w-16 h-16 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF6B35] transition-colors">
                        <svg className="w-8 h-8 text-[#FF6B35] group-hover:text-white transition-colors" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E4053] mb-2">Others</h3>
                    <p className="text-gray-500 text-sm">1,765 Listings</p>
                </div>
            </div>
        </div>
    </section>
</div>

    )

}
export default Category;