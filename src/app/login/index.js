'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"

const Login = () => {

    const router = useRouter();

    const { register: loginRegister, handleSubmit: handleLogin, formState: { errors: loginErrors } } = useForm();
    const { register: signupRegister, handleSubmit: handleSignup, formState: { errors: signupErrors } } = useForm();
    const [isToggle, setIsToggle] = useState(false);
    function Toggleit() {

        setIsToggle(() => !isToggle);
    }
    const loggedIn =async(data)=>{
        try {
            const response = await fetch('/api/login', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                credentials:"include"
            });
            const result = await response.json();
            if(result.result.success===true){

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
                credentials:"include"
            });
            const result = await response.json();
            if(result.result.success===true){

                router.push('/');
            }
            console.log(result.result.success);
        } catch (err) {
            console.error(err);
        }
    };
    

    return (

        <div id="root">
            <section id="auth" className="bg-neutral-900 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
                                <label htmlFor="email-login" className="sr-only">Email address</label>
                                <input {...loginRegister("email")}id="email-login" name="email" type="email" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password-login" className="sr-only">Password</label>
                                <input {...loginRegister('password')} id="password-login" name="password" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
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
                        </div>

                        <div>
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <form id="registerForm" className={`${isToggle ? 'block' : 'hidden'} mt-8 space-y-6 `}onSubmit={handleSignup(onSubmit)}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="name-register" className="sr-only">Full Name</label>
                                <input {...signupRegister('name')} id="name-register" name="name" type="text" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Full Name" />
                            </div>
                            <div>
                                <label htmlFor="email-register" className="sr-only">Email address</label>
                                <input {...signupRegister('email')} id="email-register" name="email" type="email" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password-register" className="sr-only">Password</label>
                                <input {...signupRegister('password')} id="password-register" name="password" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Password" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                                <input {...signupRegister('confirmPassword')} id="confirmPassword" name="confirmPassword" type="password" required className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-neutral-600 bg-neutral-700 text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm" placeholder="Confirm Password" />
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