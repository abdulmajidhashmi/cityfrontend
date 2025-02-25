'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Jobs = () => {
    const [jobData, setJobData] = useState([]);
    const [filterJobData, setFilterJobData] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const router = useRouter();

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

    const getjobs = async () => {
        console.log(process.env.NEXT_PUBLIC_BASE_URL);

        try {
            const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/job`, {

                method: 'GET',
                headers: {
                    "content-Type": "application/json"
                }
            })
            const result = await data.json();
            setJobData(result.data);
            setFilterJobData(result.data);
            console.log(result.data);

        } catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {


        getjobs();

    }, [])

    function filterbutton(event) {
        const filterType = event.target.name;
        setActiveFilter(filterType);
        const filterMap = {
            full: "Full time",
            remote: "Remote",
            part: "Part time",
        };

        const jobType = filterMap[event.target.name];

        if (jobType) {
            const data = jobData.filter((val) => val.jobType === jobType);
            setFilterJobData(data);
        } else if (event.target.name === "all") {
            setFilterJobData(jobData);
        }

        console.log(filterJobData);

    }

    function navigatejob(id){

        router.push(`/jobs/${id.toString()}`)
    }

    return (

        <div id="root">
            <section id="featured-jobs" className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2E4053] mb-4 animate__animated animate__fadeIn">
                            Featured Job Opportunities</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto animate__animated animate__fadeIn">Discover the latest job
                            opportunities from top companies</p>
                    </div>


                    <div className="flex flex-wrap gap-4 mb-8 justify-center animate__animated animate__fadeIn">

                        {["all", "full", "part", "remote"].map((item) => (
                            <button name={item} key={item} onClick={filterbutton} className={`px-6 py-2 rounded-full  border-[#2E4053] text-[#2E4053]  hover:text-white transition-colors ${activeFilter === item ? 'bg-[#FF6B35] text-white' : 'border hover:bg-[#2E4053]'}`}>{item === 'all' ? "All Jobs" : item === 'part' ? "Part Time" : item === 'full' ? "Full Time" : "Remote"}</button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                        {filterJobData.map((item, index) => (

                            <div key={index} onClick={()=>navigatejob(item._id)}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow animate__animated animate__fadeIn">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#2E4053]">{item.companyName.slice(0, 1)}</span>
                                    </div>
                                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">{item.jobType}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#2E4053] mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.companyName}</p>
                                <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {item.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {timeAgo(item.createdAt)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#FF6B35] font-bold">₹{item.minSalary} - ₹{item.maxSalary}</span>
                                    <button
                                        className="bg-[#FF6B35] text-white px-4 py-2 rounded-lg hover:bg-[#ff8255] transition-colors">Apply
                                        Now</button>
                                </div>
                            </div>

                        ))}
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Jobs;