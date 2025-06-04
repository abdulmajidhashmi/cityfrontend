'use client';
import Postad from ".";
import Footer from '../../components/Footer';
import MainHeader from '../../components/MainHeader'
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';



const Post =()=>{


    const router = useRouter();
    const [protectedRoute, setProtectedRoute] = useState(false);
     const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const token = Cookies.get('authTokenSafety');

        if (!token) {

            router.push('/login');
        } else {
            setProtectedRoute(true)
        }

         setLoading(false);

    }, [router])

     if (loading) return null;
    if (!protectedRoute) return null
 
    return(
        <>
     <MainHeader/>
        <Postad/>
    
       <Footer/>
        </>
    )
}

export default Post;