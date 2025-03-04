'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"
import { signupSchema, loginSchema } from './userSchema';
import { zodResolver } from "@hookform/resolvers/zod";

import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../../../firebase";

const Login = () => {

    const router = useRouter();

    const { register: loginRegister, handleSubmit: handleLogin, formState: { errors: loginErrors } } = useForm({ resolver: zodResolver(loginSchema), mode: 'all' });
    const { watch, register: signupRegister, handleSubmit: handleSignup, formState: { errors: signupErrors } } = useForm({ resolver: zodResolver(signupSchema), mode: 'all' });
    const [isToggle, setIsToggle] = useState(false);

    const phone = watch('number');
    const [num, setNum] = useState('');
    function Toggleit() {

        setIsToggle(() => !isToggle);
    }
    const loggedIn = async (data) => {
        try {
            const response = await fetch('/api/login', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
            const result = await response.json();
            if (result.result.success === true) {

                router.push('/');
            }
            console.log(result.result.success);
        } catch (err) {
            console.error(err);
        }

    }

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/signup', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
            const result = await response.json();
            if (result.result.success === true) {

                router.push('/');
            }
            console.log(result.result.success);
        } catch (err) {
            console.error(err);
        }
    };


    const sendOtp = async () => {
        if (!phone || phone.length !== 10) {
            alert("Enter a valid 10-digit phone number.");
            return;
        }

        const formattedPhone = `+91${phone}`; // Change country code as needed

        try {
            if (!window.recaptchaVerifier) {
                window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
                    size: "invisible",
                    callback: (response) => {
                        console.log("ReCAPTCHA verified", response);
                    },
                });
            }

            const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);

            alert("OTP sent!");
        } catch (error) {
            console.error("OTP error:", error.code, error.message);
            alert(`Error sending OTP: ${error.message}`);
        }
    };

    const numberchange = (val) => {

        console.log(val)
        if (val.length === 10)
            setNum(val);
    }
    return (

        <div id="root">
            <section id="auth" className="bg-neutral-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

                <div id="recaptcha-container"></div>

                <div className="max-w-md w-full space-y-8 bg-neutral-800 p-8 rounded-xl shadow-2xl animate__animated animate__fadeIn">
                    {!isToggle ? <div className="text-center">
                        <h2 className="mt-6 text-3xl font-extrabold text-white">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-sm text-neutral-400">
                            Or&nbsp;
                            <button className="toggle-form font-medium text-orange-500 hover:text-orange-400" onClick={Toggleit}>
                                create a new account
                            </button>
                        </p>
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
                                <button
                                    type="button"
                                    className={phone?.length === 10 ? 'text-orange-500 hover:text-orange-400' : 'text-gray-400 cursor-not-allowed'}
                                // Function to send OTP
                                >
                                    Send OTP
                                </button>
                            </div>
                            <div>
                                <label htmlFor="otp-register" className="sr-only">Enter OTP</label>
                                <input
                                    disabled={true}
                                    {...signupRegister("otp")}
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

                        {/* <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-neutral-600 rounded bg-neutral-700" />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-400">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-orange-500 hover:text-orange-400">
                                    Forgot your password?
                                </a>
                            </div>
                        </div> */}

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                                Sign in
                            </button>
                        </div>
                    </form>

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


                            <div>
                                <label htmlFor="role" className="sr-only">Select Role</label>
                                <select
                                    {...signupRegister('role')}
                                    id="role"
                                    name="role"
                                    required
                                    defaultValue=""
                                    className="appearance-none rounded-lg w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                >
                                    <option value="" disabled>Select your role</option>
                                    <option value="user">User</option>
                                    <option value="creator">Recruiter or Advertiser</option></select>
                                {signupErrors.role && <p className="text-white text-sm md:text-base opacity-80 px-2">{signupErrors.role.message}</p>}
                            </div>



                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Login;