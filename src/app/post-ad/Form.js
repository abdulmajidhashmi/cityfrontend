'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  const [postType, setPostType] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/jobpost', {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      const result = await response.json();

      console.log(result);
    } catch (err) {
      console.error(err);
    }

  }

  function selectType(event) {
    setPostType(event.target.value);
  }
  return (

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


            <div className="mb-4">
              <label className="block text-neutral-700 font-medium mb-2" htmlFor="listingType">Listing Type</label>
              <select id="listingType" onChange={selectType}
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors">
                <option value="">Select Type</option>
                <option value="Job">Job Posting</option>
                <option value="Ad">Advertisement</option>
              </select>
            </div>



            {postType && postType === 'Job' ? <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 animate__animated animate__fadeInUp"><form id="listingForm" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

              <div className="grid md:grid-cols-2 gap-6">
                {/* <div>
                  <label className="block text-neutral-700 font-medium mb-2" htmlFor="listingType">Listing Type</label>
                  <select id="listingType" {...register("type")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors">
                    <option value="">Select Type</option>
                    <option value="Job">Job Posting</option>
                    <option value="Ad">Advertisement</option>
                  </select>
                </div> */}

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
                    placeholder="e.g., Indian enterprises" />
                </div>
                <div>
                  <label className="block text-neutral-700 font-medium mb-2" htmlFor="jobTitle">Job Title</label>
                  <input type="text" id="jobTitle" {...register("title")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                    placeholder="e.g., Software Engineer - Frontend Development" />
                </div>

                <div>
                  <label className="block text-neutral-700 font-medium mb-2" htmlFor="location">Location</label>
                  <input type="text" id="location" {...register("location")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                    placeholder="e.g., New York, NY or Remote" />
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
                    placeholder="e.g., 50000" />
                </div>
                <div>
                  <label className="block text-neutral-700 font-medium mb-2" htmlFor="salaryMax">Maximum Salary</label>
                  <input type="number" id="salaryMax" {...register("maxSalary")}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-[#2E4053] focus:ring-2 focus:ring-[#2E4053] focus:ring-opacity-20 transition-colors"
                    placeholder="e.g., 80000" />
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
                <input type="checkbox" id="equalOpportunity" className="mt-1 mr-2" />
                <label htmlFor="equalOpportunity" className="text-sm text-neutral-600">
                  This organization is an equal opportunity employer. We celebrate diversity and are committed to
                  creating an inclusive environment for all employees.
                </label>
              </div>

              <button type="submit"
                className="w-full bg-[#2E4053] text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#3d5269]">
                Submit Listing
              </button>
            </form>   </div> : postType === 'Ad' ?
              <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 animate__animated animate__fadeIn">
                  <h1 className="text-3xl font-bold text-neutral-800 mb-8">Post Your Ad</h1>

                  <div className="space-y-6">



                    <form id="adPostingForm" className="space-y-6">

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Select Category <span className="text-red-500">*</span>
                        </label>
                        <select required className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="">Choose a category</option>
                          <option value="jobs">Real Estate</option>
                          <option value="housing">Electronics</option>
                          <option value="services">Automobile</option>
                          <option value="sale">others</option>
                        </select>
                      </div>


                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Enter Ad Title <span className="text-red-500">*</span>
                        </label>
                        <input type="text" maxLength="60" required
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Brief, descriptive title" />
                        <p className="text-sm text-neutral-500 mt-1"><span id="titleCount">0</span>/60 characters</p>
                      </div>


                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Describe your ad <span className="text-red-500">*</span>
                        </label>
                        <textarea required maxLength="500" rows="4"
                          className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Detailed description of your ad"></textarea>
                        <p className="text-sm text-neutral-500 mt-1"><span id="descCount">0</span>/500 characters</p>
                      </div>


                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Upload Ad Images
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-neutral-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-neutral-600">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                <span>Upload files</span>
                                <input type="file" className="sr-only" multiple accept="image/jpeg,image/png" id="imageUpload" />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-neutral-500">PNG, JPG up to 5 images</p>
                          </div>
                        </div>
                        <div id="imagePreview" className="grid grid-cols-3 gap-4 mt-4"></div>
                      </div>


                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Enter Price <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">₹</span>
                          <input type="number" required min="0" step="1"
                            className="w-full pl-8 pr-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0.00" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-neutral-700">Contact Details</h3>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input type="email" required
                            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input type="tel" required
                            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="(123) 456-7890" />
                        </div>
                      </div>


                      <div className="flex gap-4 pt-6">
                        <button type="button" id="saveAsDraft"
                          className="px-4 py-2 border border-neutral-300 rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                          Save as Draft
                        </button>
                        <button type="button" id="previewAd"
                          className="px-4 py-2 border border-blue-600 rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                          Preview
                        </button>
                        <button type="submit"
                          className="flex-1 px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                          Post Ad
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div> : null}

          </div>
        </div>
      </section>
      <section id="adPreview" className="min-h-screen bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeIn">
              
                <div className="bg-neutral-800 text-white px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold">Ad Preview</h1>
                    <div className="flex gap-3">
                        <button id="editAd" className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-300">
                            Edit
                        </button>
                        <button id="publishAd" className="px-4 py-2 text-sm bg-orange-500 hover:bg-orange-600 rounded-md transition-all duration-300">
                            Publish
                        </button>
                    </div>
                </div>

      
                <div className="p-6">
                 
                    <div className="mb-4">
                        <span id="previewCategory" className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            Category
                        </span>
                    </div>

             
                    <h2 id="previewTitle" className="text-2xl font-bold text-neutral-800 mb-4">
                        Ad Title Preview
                    </h2>

              
                    <div className="relative mb-6">
                        <div id="imageCarousel" className="relative h-[400px] rounded-lg overflow-hidden">
                            <div className="flex transition-transform duration-300">
                         
                            </div>
                   
                            <button id="prevImage" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                            <button id="nextImage" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                       
                            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                <span id="currentImage">1</span>/<span id="totalImages">5</span>
                            </div>
                        </div>
                    </div>

             
                    <div className="mb-6">
                        <span id="previewPrice" className="text-3xl font-bold text-neutral-800">$0.00</span>
                    </div>

                 
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-neutral-700 mb-2">Description</h3>
                        <p id="previewDescription" className="text-neutral-600 whitespace-pre-line">
                            Ad description will appear here...
                        </p>
                    </div>

                 
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-neutral-700 mb-4">Contact Information</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span id="previewEmail" className="text-neutral-600">email@example.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span id="previewPhone" className="text-neutral-600">(123) 456-7890</span>
                            </div>
                        </div>
                    </div>
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