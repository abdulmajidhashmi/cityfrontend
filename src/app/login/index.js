'use client'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"
import { signupSchema, loginSchema } from './userSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithCredential, PhoneAuthProvider, getAuth } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../../firebase";
const Login = () => {

    const router = useRouter();

    const { watch: loginwatch, register: loginRegister, handleSubmit: handleLogin, formState: { errors: loginErrors } } = useForm({ resolver: zodResolver(loginSchema), mode: 'all' });
    const { watch: signupwatch, register: signupRegister, handleSubmit: handleSignup, formState: { errors: signupErrors } } = useForm({ resolver: zodResolver(signupSchema), mode: 'all' });
    const [isToggle, setIsToggle] = useState(false);
    const [verifyId, setVerifyId] = useState('');
    const [verifyId2, setVerifyId2] = useState('');
    const phone2 = loginwatch('number')
    const phone = signupwatch('number');
    const otp = signupwatch('otp');
    const otp2 = loginwatch('otp');
    const [otpSecure, setotpSecure] = useState(true);
    const [otpSeconds, setotpSeconds] = useState(30);


    function Toggleit() {

        setIsToggle(() => !isToggle);
    }
    const loggedIn = async (data) => {


        if (!verifyId2 || !otp2) {
            alert("Please enter the OTP");
            return;
        }

        console.log("Entered OTP:", otp);

        try {
           const toastLoggedin =  toast.loading('Logging in...');
            const credential = PhoneAuthProvider.credential(verifyId2, otp2);
            const userCredential = await signInWithCredential(auth, credential);
            const idToken = await userCredential.user.getIdToken();

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/verifyotplogin`, {
                method: "POST",
                body: JSON.stringify({ otp2, verifyId2: idToken }), // Sending Firebase ID token
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            console.log(response)

            const data = await response.json();
            console.log(data);
            if (data.success) {
                //later we can write
            } else {
                alert(data.message || "Verification failed. Please try again.");
            }

            const temp = data.user.phone_number;``
            const actualdata = temp
            const response2 = await fetch('/api/login', {
                method: "POST",
                body: JSON.stringify(phone2),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
            const result = await response2.json();
            console.log(result)
            if (result?.result?.success === true) {
          
                router.push('/post-ad');
                    toast.dismiss(toastLoggedin);

            }
            console.log(result.result.success);


        } catch (error) {
            console.error("Error verifying OTP:", error);
            alert(error.message || "Something went wrong. Please try again.");
        }





    }

    const onSubmit = async (data) => {
        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                console.error("User not authenticated");
                return;
            }

            const idToken = await user.getIdToken(); // ✅ This is the actual Firebase ID Token (JWT)

            const dat = { ...data, verifyId: idToken }; // 👈 Replace verifyId with idToken
            console.log(dat);

            const response = await fetch('/api/signup', {
                method: "POST",
                body: JSON.stringify(dat),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });

            const result = await response.json();



            if (result.result?.success === true) {
                if (result.result.data.role === 'creator') {
                    router.push('/post-ad');
                } else {
                    router.push('/');
                }
            }
            console.log("result");
        } catch (err) {
            console.error(err);
        }
    };

    const [resendDisabled, setResendDisabled] = useState(false);


    const sendOtp = async () => {
        if (!phone || phone.length !== 10) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        if (resendDisabled) {
            alert("Please wait before requesting a new OTP.");
            return;
        }

        setResendDisabled(true);
        setTimeout(() => setResendDisabled(false), 30000);

        const formattedPhone = `+91${phone}`;

        try {
         
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
            setVerifyId(confirmationResult.verificationId);
            setOTPtimer(true)
           
            toast('OTP sent!')
        } catch (error) {
            console.error("OTP error:", error.code, error.message);
            alert(`Error sending OTP: ${error.message}`);
        }
    };

    useEffect(() => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                size: "invisible",
                callback: (response) => {
                    console.log("ReCAPTCHA verified", response);
                },
            });
        }
    }, []);



    const loginsendOtp = async () => {
        // Reset timer to 30 seconds before starting

     

            function calling() {
  const otpInterval = setInterval(() => {
    setotpSeconds((prev) => {
      if (prev <= 1) {
        setotpSecure(true);
        clearInterval(otpInterval); // ✅ stop the timer
        return 30;
      }
      return prev - 1;
    });
  }, 1000);


}
calling();


        if (!phone2 || phone2.length !== 10) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        if (resendDisabled) {
            alert("Please wait before requesting a new OTP.");
            return;
        }

        setResendDisabled(true);
        setTimeout(() => setResendDisabled(false), 30000);

        const formattedPhone = `+91${phone2}`;


        try {
              const toastloading = toast.loading('OTP sending...');
            setotpSecure(false)

            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, appVerifier);
            setVerifyId2(confirmationResult.verificationId);

            toast.dismiss(toastloading);
              toast('OTP sent!')
            


        } catch (error) {
     
            console.error("OTP error:", error.code, error.message);
            alert(`Error sending OTP: ${error.message}`);
        }
    };






    return (

        <>  <Toaster />
        <div id="root">
           
            <div id="recaptcha-container"></div>
            <section id="auth" className="bg-neutral-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">



                <div className="max-w-md w-full space-y-8 bg-neutral-800 p-8 rounded-xl shadow-2xl animate__animated animate__fadeIn">
                    {!isToggle ? <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-white">
                            Sign in to your account
                        </h2>
                        {/* <p className="mt-2 text-sm text-neutral-400">
                            Or&nbsp;
                            <button className="toggle-form font-medium text-orange-500 hover:text-orange-400" onClick={Toggleit}>
                                create a new account
                            </button>
                        </p> */}
                    </div> : <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-white">
                            Sign Up to your account
                        </h2>
                        <p className="mt-2 text-sm text-neutral-400">
                            Or&nbsp;
                            <button className="toggle-form font-medium text-orange-500 hover:text-orange-400" onClick={Toggleit}>
                                Already have a account
                            </button>
                        </p>
                    </div>}



                    <form id="loginForm" className={`${isToggle ? 'hidden' : 'block'} mt-8 space-y-6`} onSubmit={handleLogin(loggedIn)}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email-login" className="sr-only">Phone Number</label>
                                <input {...loginRegister("number")} id="email-login" name="number" type="text" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Phone Number" />
                                {loginErrors.number && <p className="text-white text-sm md:text-base opacity-80 px-2">{loginErrors.number.message}</p>}
                            </div>
                            <div className="text-right">





                                {otpSecure ? <button
                                    type="button"
                                    onClick={loginsendOtp} // <== ADD THIS
                                    className={phone2?.length === 10 ? 'text-orange-500 hover:text-orange-400' : 'text-gray-400 cursor-not-allowed'}
                                >
                                    Send OTP
                                </button>

                                    : <div className="text-gray-400">resend OTP in {otpSeconds} sec</div>}

                            </div>
                            <div>
                                <label htmlFor="otp-register" className="sr-only">Enter OTP</label>
                                <input
                                    disabled={!verifyId2}
                                    {...loginRegister("otp")}
                                    id="otp-register"
                                    name="otp"
                                    type="text"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    placeholder="Enter OTP"
                                />
                                {loginErrors.otp && <p className="text-white text-sm md:text-base opacity-80 px-2">{loginErrors.otp.message}</p>}
                            </div>



                        </div>



                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                                Sign in
                            </button>
                        </div>
                    </form>
                    {/* 
                    <form id="registerForm" className={`${isToggle ? 'block' : 'hidden'} mt-8 space-y-6 `} onSubmit={handleSignup(onSubmit)}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="name-register" className="sr-only">Full Name</label>

                                <input {...signupRegister('name')} id="name-register" name="name" type="text" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Full Name" />
                                {signupErrors.name && <p className="text-white text-sm md:text-base opacity-80 px-2">{signupErrors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="email-register" className="sr-only">Phone Number</label>
                                <input  {...signupRegister('number')} id="email-register" name="number" type="text" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Phone Number" />
                                {signupErrors.number && <p className="text-white text-sm md:text-base opacity-80 px-2">{signupErrors.number.message}</p>}
                            </div>
                            <div className="text-right">
                                <button
                                    type="button"
                                    className={phone?.length === 10 ? 'text-orange-500 hover:text-orange-400' : 'text-gray-400 cursor-not-allowed'}
                                    onClick={sendOtp}
                                // Function to send OTP
                                >
                                    Send OTP
                                </button>
                            </div>
                            <div>
                                <label htmlFor="otp-register" className="sr-only">Enter OTP</label>
                                <input
                                    disabled={phone?.length !== 10}
                                    {...signupRegister("otp")}
                                    id="otp-register"
                                    name="otp"
                                    type="text"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    placeholder="Enter OTP"
                                />
                                {signupErrors.otp && <p className="text-white text-sm md:text-base opacity-80 px-2">{signupErrors.otp.message}</p>}
                            </div>
                            {/* <div className="text-right">
                                <button
                                    type="button"
                                    className="text-orange-500 hover:text-orange-400"
                                    onClick={verifyOtp} // ✅ Call OTP verification function
                                >
                                    Verify OTP
                                </button>
                            </div> */}


                    {/* <div>
                                <label htmlFor="role" className="sr-only">Select Role</label>
                                <select
                                    {...signupRegister('role')}
                                    id="role"
                                    name="role"
                                    required
                                    defaultValue=""
                                    className="appearance-none rounded-lg w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                >
                                    <option value="creator" disabled>Select your role</option>
                      
                                    <option  value="creator">Recruiter or Advertiser</option></select>
                                {signupErrors.role && <p className="text-white text-sm md:text-base opacity-80 px-2">{signupErrors.role.message}</p>}
                            </div>



                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                                Create Account
                            </button>
                        </div>
                    </form> */}
                </div>
            </section>
        </div></>
    )
}

export default Login; 