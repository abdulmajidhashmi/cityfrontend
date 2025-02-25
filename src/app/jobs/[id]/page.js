'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Viewjob = () => {
    const param = useParams();
    const id = param.id;
    const [jobData, setJobData] = useState([]);

    useEffect(() => {

        callapi();
    }, [])

    const callapi = async () => {
        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/job/${id}`, {

                method: 'GET',
                headers: {
                    "content-Type": "application/json"
                }
            })
            const result = await data.json();
            setJobData(result.data);
            console.log(result.data);

        } catch (err) {
            console.log(err);

        }

    }
    function timeAgo(date) {
        const now = new Date();
        const past = new Date(date);
        const diffInSeconds = Math.floor((now - past) / 1000);

        const intervals = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
            { label: "second", seconds: 1 }
        ];

        for (const interval of intervals) {
            const count = Math.floor(diffInSeconds / interval.seconds);
            if (count >= 1) {
                return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
            }
        }
        return "just now";
    }
    return (
        <>
            <div id="root">
                <section id="breadcrumb" className="bg-white py-4 shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center space-x-2 text-sm">
                            <a href="/" className="text-neutral-600 hover:text-[#2E4053] transition-colors duration-300">
                                Home
                            </a>
                            <span className="text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <a href="/jobs" className="text-neutral-600 hover:text-[#2E4053] transition-colors duration-300">
                                Jobs
                            </a>
                            <span className="text-neutral-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            <span className="text-[#FF6B35] font-medium animate__animated animate__fadeIn">
                                Current Position
                            </span>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="job-header" className="bg-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-4xl font-bold text-[#2E4053] mb-3 animate__animated animate__fadeIn">
                                    {jobData.title}
                                </h1>
                                <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-neutral-600">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <span>{jobData.companyName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{jobData.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Posted {timeAgo(jobData.createdAt)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <button className="bg-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55f2f] transition-colors duration-300 animate__animated animate__fadeIn">
                                    Apply Now
                                </button>
                                <div className="flex gap-2">
                                    <button className="bg-white border-2 border-[#2E4053] text-[#2E4053] px-4 py-3 rounded-lg font-semibold hover:bg-[#2E4053] hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        Save
                                    </button>
                                    <button className="bg-white border-2 border-[#2E4053] text-[#2E4053] px-4 py-3 rounded-lg font-semibold hover:bg-[#2E4053] hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="key-details" className="bg-neutral-50 py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-[#2E4053] mb-6 animate__animated animate__fadeIn">Key Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#2E4053]/10 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E4053]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-neutral-500 text-sm mb-1">Employment Type</h3>
                                        <p className="text-[#2E4053] font-semibold">{jobData.jobType}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#2E4053]/10 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E4053]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-neutral-500 text-sm mb-1">Salary Range</h3>
                                        <p className="text-[#2E4053] font-semibold">₹{jobData.minSalary} - ₹{jobData.maxSalary}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#2E4053]/10 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E4053]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-neutral-500 text-sm mb-1">Experience</h3>
                                        <p className="text-[#2E4053] font-semibold">{jobData.experience}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-[#2E4053]/10 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2E4053]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-neutral-500 text-sm mb-1">Education</h3>
                                        <p className="text-[#2E4053] font-semibold">Any</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="job-description" className="bg-white py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6 animate__animated animate__fadeIn">Job Description</h2>

                            <div className="prose max-w-none text-neutral-700 animate__animated animate__fadeIn">
                                <p className="mb-6">
                                    {jobData.description}
                                </p>

                                {/* <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Responsibilities:</h3>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Develop and maintain responsive web applications using modern JavaScript frameworks</li>
                                    <li>Collaborate with backend developers and designers to implement user-facing features</li>
                                    <li>Optimize applications for maximum speed and scalability</li>
                                    <li>Write clean, maintainable, and efficient code</li>
                                    <li>Participate in code reviews and provide constructive feedback</li>
                                    <li>Mentor junior developers and contribute to team growth</li>
                                </ul> */}

                                <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Requirements:</h3>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>{jobData.requirement}</li>
                                    
                                </ul>
{/* 
                                <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Benefits:</h3>
                                <ul className="list-disc pl-6 space-y-3">
                                    <li>Competitive salary package with annual bonuses</li>
                                    <li>Comprehensive health, dental, and vision insurance</li>
                                    <li>Flexible working hours and remote work options</li>
                                    <li>Professional development and learning opportunities</li>
                                    <li>401(k) matching program</li>
                                    <li>Modern office space with amenities</li>
                                </ul> */}

                                <div className="mt-8 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">Additional Information:</h4>
                                    <p>This position offers a hybrid work arrangement with 2-3 days in office required. We provide all necessary equipment for remote work setup. Our team follows agile methodologies and emphasizes continuous learning and improvement.</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-neutral-200">
                                <button className="bg-[#FF6B35] hover:bg-[#ff855d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out animate__animated animate__fadeIn flex items-center">
                                    Apply Now
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="company-info" className="bg-neutral-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6 animate__animated animate__fadeIn">About the Company</h2>

                            <div className="bg-white rounded-xl shadow-sm p-6 animate__animated animate__fadeIn">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="w-20 h-20 bg-[#2E4053] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-2xl font-bold">TS</span>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">{jobData.companyName}</h3>
                                        <div className="flex flex-wrap gap-4 text-neutral-600 text-sm mb-4">
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{jobData.location}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <span>Technology</span>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span>1000+ Employees</span>
                                            </div>
                                        </div>

                                        <p className="text-neutral-700 mb-6">Tech Solutions Inc. is a leading technology company specializing in innovative software solutions for enterprise clients. With over 15 years of industry experience, we've helped transform businesses through cutting-edge technology and exceptional talent.</p>

                                        <div className="flex flex-wrap gap-3 mb-6">
                                            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Flexible Hours</span>
                                            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Remote Work</span>
                                            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Health Insurance</span>
                                            <span className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm">Professional Development</span>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            <a href="#" className="text-[#2E4053] hover:text-[#FF6B35] transition-colors duration-300 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                                </svg>
                                                Company LinkedIn
                                            </a>
                                            <a href="#" className="text-[#2E4053] hover:text-[#FF6B35] transition-colors duration-300 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                            </a>
                                            <a href="#" className="text-[#2E4053] hover:text-[#FF6B35] transition-colors duration-300 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                                                </svg>
                                                Twitter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="similar-jobs" className="bg-white py-8">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 animate__animated animate__fadeIn">Similar Jobs</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-[#2E4053] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-lg font-bold">MS</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-neutral-900 hover:text-[#FF6B35] transition-colors duration-300">
                                            <a href="#">Frontend Team Lead</a>
                                        </h3>
                                        <p className="text-neutral-600">MicroSys Inc.</p>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-neutral-600">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <span>New York, NY</span>
                                    </div>
                                    <div className="flex items-center text-neutral-600">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Full-time</span>
                                    </div>
                                </div>
                                <button className="w-full bg-white border-2 border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">View Details</button>
                            </div>


                            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-[#2E4053] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-lg font-bold">WD</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-neutral-900 hover:text-[#FF6B35] transition-colors duration-300">
                                            <a href="#">Senior UI Developer</a>
                                        </h3>
                                        <p className="text-neutral-600">WebDev Co.</p>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-neutral-600">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <span>Austin, TX</span>
                                    </div>
                                    <div className="flex items-center text-neutral-600">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Remote</span>
                                    </div>
                                </div>
                                <button className="w-full bg-white border-2 border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">View Details</button>
                            </div>


                            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn">
                                <div className="flex items-start mb-4">
                                    <div className="w-12 h-12 bg-[#2E4053] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-lg font-bold">TD</span>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-neutral-900 hover:text-[#FF6B35] transition-colors duration-300">
                                            <a href="#">React Developer</a>
                                        </h3>
                                        <p className="text-neutral-600">TechDrift Labs</p>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-neutral-600">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        <span>Seattle, WA</span>
                                    </div>
                                    <div className="flex items-center text-neutral-600">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Hybrid</span>
                                    </div>
                                </div>
                                <button className="w-full bg-white border-2 border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">View Details</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="root">
                <section id="application-form" className="bg-neutral-50 py-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-6 animate__animated animate__fadeIn">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Apply for this Position</h2>

                            <form className="space-y-6" id="jobApplicationForm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">First Name *</label>
                                        <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition duration-300" required />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">Last Name *</label>
                                        <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition duration-300" required />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition duration-300" required />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition duration-300" />
                                </div>

                                <div>
                                    <label htmlFor="resume" className="block text-sm font-medium text-neutral-700 mb-2">Upload Resume *</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-lg hover:border-[#FF6B35] transition duration-300">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-neutral-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-[#FF6B35] hover:text-[#ff855d] focus-within:outline-none">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-neutral-500">PDF, DOC, DOCX up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="coverLetter" className="block text-sm font-medium text-neutral-700 mb-2">Cover Letter</label>
                                    <textarea id="coverLetter" name="coverLetter" rows="4" className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition duration-300"></textarea>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-[#FF6B35] border-neutral-300 rounded focus:ring-[#FF6B35]" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-medium text-neutral-700">I agree to the terms and conditions *</label>
                                        <p className="text-neutral-500">By submitting this application, you agree to our privacy policy and terms of service.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button type="submit" className="flex-1 bg-[#FF6B35] hover:bg-[#ff855d] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                                        Submit Application
                                    </button>
                                    <button type="button" className="flex-1 bg-white border-2 border-[#2E4053] text-[#2E4053] hover:bg-[#2E4053] hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out">
                                        Save Draft
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            {/*     
    <script>
    document.getElementById('jobApplicationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
    
    // File upload preview
    document.getElementById('file-upload').addEventListener('change', function(e) {
        const fileName = e.target.files[0]?.name;
        if (fileName) {
            const fileInfo = e.target.parentElement.nextElementSibling;
            fileInfo.textContent = `Selected file: ${fileName}`;
        }
    });
    </script> */}

            <div id="root">
                <footer id="footer" className="bg-[#2E4053] text-white">
                    <div className="container mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="animate__animated animate__fadeIn">
                                <h3 className="text-xl font-bold mb-4">JobView</h3>
                                <p className="text-neutral-300 mb-4">Find your dream job or post classified ads with ease. Connect with opportunities that matter.</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </a>
                                    <a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                    </a>
                                    <a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    </a>
                                </div>
                            </div>

                            <div className="animate__animated animate__fadeIn">
                                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Find Jobs</a></li>
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Post a Job</a></li>
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Browse Categories</a></li>
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Company Directory</a></li>
                                </ul>
                            </div>

                            <div className="animate__animated animate__fadeIn">
                                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Help Center</a></li>
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Privacy Policy</a></li>
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Terms of Service</a></li>
                                    <li><a href="#" className="text-neutral-300 hover:text-[#FF6B35] transition-colors duration-300">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="animate__animated animate__fadeIn">
                                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                                <p className="text-neutral-300 mb-4">Subscribe to our newsletter for job updates and career tips.</p>
                                <form className="flex flex-col sm:flex-row gap-2">
                                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:outline-none focus:border-[#FF6B35] transition-colors duration-300" />
                                    <button type="submit" className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#e55f2f] transition-colors duration-300">Subscribe</button>
                                </form>
                            </div>
                        </div>

                        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-300 animate__animated animate__fadeIn">
                            <p>&copy; 2024 JobView. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Viewjob;