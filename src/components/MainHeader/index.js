'use client'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';

const MainHeader = () => {
    const [isopen, setIsopen] = useState(true);
        const [loginShow, setLoginShow] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const navToggle = () => setIsopen(!isopen);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setIsopen(true);
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [])


      useEffect(() => {
            const token = Cookies.get('authTokenSafety');
            setLoginShow(!token); // If token exists, loginShow = false (show Logout)
        }, []);
    
        const logOut = () => {
            Cookies.remove('authTokenSafety');
             Cookies.remove('authToken');
            setLoginShow(true); // Show Login button
        };
    return (
        <div id="root">
            <header id="header" className="bg-neutral-900">

                <nav className="fixed w-full z-50 bg-[#2E4053] py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center">
                            <Link href="/" className="text-2xl font-bold text-white">Nanded rozgaar</Link>


                            <div className="hidden md:flex space-x-6">
                                <Link href="/" className="text-white hover:text-[#FF6B35] transition-colors">Home</Link>
                                <Link href="/jobs" className="text-white hover:text-[#FF6B35] transition-colors">Jobs</Link>
                                {/* <Link href="/classifieds" className="text-white hover:text-[#FF6B35] transition-colors">Classifieds</Link> */}
                                <Link href="/post-ad" className="text-white hover:text-[#FF6B35] transition-colors">Post Ad</Link>
                                {/* <Link href="/how-it-works" className="text-white hover:text-[#FF6B35] transition-colors">How It
                                    Works</Link> */}
                              {loginShow ? (
                                    <Link href="/login" className="text-white hover:text-[#FF6B35] transition-colors">Login</Link>
                                ) : (
                                    <div className="text-white hover:text-[#FF6B35] transition-colors cursor-pointer" onClick={logOut}>Logout</div>
                                )}
                              
                            </div>


                            <button id="menu-btn" ref={buttonRef} onClick={navToggle} className="md:hidden text-white focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>


                    <div ref={menuRef} id="mobile-menu" className={`${isopen ? 'hidden' : 'block'} md:hidden bg-[#2E4053] fixed w-full`}>
                        <div className="px-4 py-2 space-y-3">
                            <Link href="/" className="block text-white hover:text-[#FF6B35] transition-colors">Home</Link>
                            <Link href="/jobs" className="block text-white hover:text-[#FF6B35] transition-colors">Jobs</Link>
                            {/* <Link href="/classifieds"
                                className="block text-white hover:text-[#FF6B35] transition-colors">Classifieds</Link> */}
                            <Link href="/post-ad" className="block text-white hover:text-[#FF6B35] transition-colors">Post Ad</Link>
                            {/* <Link href="/how-it-works" className="block text-white hover:text-[#FF6B35] transition-colors">How It
                                Works</Link> */}
                            <Link href="/login" className="block text-white hover:text-[#FF6B35] transition-colors">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default MainHeader;