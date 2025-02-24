const Footer =()=>{

    return(

<div id="root">
    <footer id="footer" className="bg-[#2E4053] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      
                <div>
                    <h3 className="text-2xl font-bold mb-6">JobPortal</h3>
                    <p className="text-gray-300 mb-6">Your one-stop platform for job opportunities and local classifieds.
                        Connect with opportunities in your city.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>

         
                <div>
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><a href="/" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Home</a></li>
                        <li><a href="/jobs" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Jobs</a></li>
                        <li><a href="/classifieds"
                                className="text-gray-300 hover:text-[#FF6B35] transition-colors">Classifieds</a></li>
                        <li><a href="/post-ad" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Post Ad</a>
                        </li>
                        <li><a href="/how-it-works" className="text-gray-300 hover:text-[#FF6B35] transition-colors">How It
                                Works</a></li>
                        <li><a href="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>

           
                <div>
                    <h4 className="text-lg font-bold mb-6">Support</h4>
                    <ul className="space-y-4">
                        <li><a href="/about" className="text-gray-300 hover:text-[#FF6B35] transition-colors">About Us</a>
                        </li>
                        <li><a href="/privacy" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Privacy
                                Policy</a></li>
                        <li><a href="/terms" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Terms of
                                Service</a></li>
                        <li><a href="/contact" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Contact</a>
                        </li>
                        <li><a href="/download" className="text-gray-300 hover:text-[#FF6B35] transition-colors">Download
                                App</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                    <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates</p>
                    <form className="space-y-4">
                        <div>
                            <input type="email" placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#FF6B35] text-white placeholder-gray-400"/>
                        </div>
                        <button type="submit"
                            className="w-full bg-[#FF6B35] text-white px-6 py-2 rounded-lg hover:bg-[#ff8255] transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

        
            <div className="border-t border-white/10 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm mb-4 md:mb-0">
                        © 2024 JobPortal. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-300 hover:text-[#FF6B35] text-sm transition-colors">Privacy
                            Policy</a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B35] text-sm transition-colors">Terms of
                            Service</a>
                        <a href="#" className="text-gray-300 hover:text-[#FF6B35] text-sm transition-colors">Cookie
                            Policy</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}

export default Footer;