'use client';
import { useForm } from "react-hook-form";
const Form=()=>{
const {register,handleSubmit} =useForm();

const onSubmit =async(data)=>{
    try {
        const response = await fetch('/api/jobpost', {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            credentials:"include"
        });
        const result = await response.json();
       
        console.log(result);
    } catch (err) {
        console.error(err);
    }

}
    return(

<div id="root">
        <section id="postform" className="bg-neutral-100 py-16">
          <div className="container mx-auto px-4" id="el-xphbi3su">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate__animated animate__fadeInDown">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Post Your Listing</h2>
                <p className="text-neutral-600">Fill out the form below to submit your job or ad listing</p>
              </div>

              <div id="successMessage"
                className="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate__animated animate__fadeIn">
                <span className="block sm:inline">Your listing has been successfully submitted!</span>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate__animated animate__fadeInUp">
                <form id="listingForm" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="listingType">Listing Type</label>
                      <select id="listingType" {...register("type")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors">
                        <option value="">Select Type</option>
                        <option value="Job">Job Posting</option>
                        <option value="Ad">Advertisement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="category">Category</label>
                      <select id="category" {...register("category")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors">
                        <option value="">Select Category</option>
                        <option value="IT">IT &amp; Technology</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Design">Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="location">Company Name</label>
                      <input type="text" id="location" {...register("companyName")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                        placeholder="e.g., Indian enterprises"/>
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="jobTitle">Job Title</label>
                      <input type="text" id="jobTitle" {...register("title")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                        placeholder="e.g., Software Engineer - Frontend Development"/>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="location">Location</label>
                      <input type="text" id="location" {...register("location")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                        placeholder="e.g., New York, NY or Remote"/>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="jobType">Job Type</label>
                      <select id="jobType" {...register("jobType")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors">
                        <option value="">Select Job Type</option>
                        <option value="Full time">Full-time</option>
                        <option value="Part time">Part-time</option>
                        <option value="Remote">Remote</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="experienceRequired">Experience
                        Required</label>
                      <select id="experienceRequired" {...register("experience")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors">
                        <option value="">Select Experience</option>
                        <option value="Fresher">Entry Level (0-2 years)</option>
                        <option value="Mid level">Mid Level (3-5 years)</option>
                        <option value="Senior level">Senior Level (5+ years)</option>
                        <option value="Expert level">Expert Level (8+ years)</option>
                      </select>
                    </div>
                  </div>

              
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="salaryMin">Minimum Salary</label>
                      <input type="number" id="salaryMin" {...register("minSalary")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                        placeholder="e.g., 50000"/>
                    </div>
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="salaryMax">Maximum Salary</label>
                      <input type="number" id="salaryMax" {...register("maxSalary")}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                        placeholder="e.g., 80000"/>
                    </div>
                  </div>

        
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2" htmlFor="aboutRole">About the Role</label>
                    <textarea id="aboutRole" rows="3" {...register("description")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                      placeholder="Describe the role and team..."></textarea>
                  </div>

                  {/* <div>
                    <label className="block text-neutral-700 font-medium mb-2" htmlFor="responsibilities">Key
                      Responsibilities</label>
                    <textarea id="responsibilities" rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                      placeholder="List the main duties and responsibilities..."></textarea>
                  </div> */}

                  <div>
                    <label className="block text-neutral-700 font-medium mb-2" htmlFor="requirements">Requirements</label>
                    <textarea id="requirements" rows="4" {...register("requirement")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                      placeholder="List required qualifications, skills, and experience..."></textarea>
                  </div>

                  {/* <div>
                    <label className="block text-neutral-700 font-medium mb-2" htmlFor="benefits">Benefits &amp; Perks</label>
                    <textarea id="benefits" rows="3"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                      placeholder="List the benefits package details..."></textarea>
                  </div> */}

              
                  <div>
                    <label className="block text-neutral-700 font-medium mb-2" htmlFor="applicationInstructions">How to
                      Contact</label>
                    <textarea id="applicationInstructions" rows="2" {...register("contact")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                      placeholder="Provide application instructions..."></textarea>
                  </div>
{/* 
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neutral-700 font-medium mb-2" htmlFor="deadline">Application Deadline</label>
                      <input type="date" id="deadline"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"/>
                    </div>
                  </div> */}

           
                  {/* <div>
                    <label className="block text-neutral-700 font-medium mb-2" htmlFor="fileUpload">Upload Additional
                      Documents</label>
                    <div className="border-2 border-dashed border-neutral-300 rounded-lg p-6 text-center">
                      <input type="file" id="fileUpload" className="hidden" multiple={false}/>
                      <label htmlFor="fileUpload" className="cursor-pointer">
                        <div className="text-[#2E4053]">
                          <i className="fas fa-cloud-upload-alt text-3xl mb-2"></i>
                          <p>Drag and drop files here or click to browse</p>
                          <p className="text-sm text-neutral-500 mt-1">(Job description documents, company information,
                            etc.)</p>
                        </div>
                      </label>
                    </div>
                  </div> */}

      
                  <div className="flex items-start">
                    <input type="checkbox" id="equalOpportunity" className="mt-1 mr-2"/>
                    <label htmlFor="equalOpportunity" className="text-sm text-neutral-600">
                      This organization is an equal opportunity employer. We celebrate diversity and are committed to
                      creating an inclusive environment for all employees.
                    </label>
                  </div>

                  <button type="submit"
                    className="w-full bg-[#2E4053] text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#3d5269]">
                    Submit Listing
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <script>
          document.getElementById('listingForm').addEventListener('submit', function (e) {
            e.preventDefault();
            document.getElementById('successMessage').classList.remove('hidden');
            document.getElementById('listingForm').reset();
            setTimeout(() => {
              document.getElementById('successMessage').classList.add('hidden');
            }, 5000);
          });

          const fileUpload = document.getElementById('fileUpload');
          fileUpload.addEventListener('change', function (e) {
            // Handle file upload logic here
          });
        </script> */}
      </div>
    )
}

export default Form;