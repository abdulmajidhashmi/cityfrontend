'use client';
import { useEffect, useState } from "react";

const Administrator = () => {
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const call = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/majidlogin/get`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        const result = await data.json();
        console.log(result.data);
        setJobData(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    call();
  }, []);

  const acceptJob = async (item) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/majidlogin/verify/${item._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
         credentials: 'include',
        body: JSON.stringify({ verified: true }),
      });

      const result = await res.json();
      console.log("Verified:", result);

      // Optional: update UI
      setJobData((prev) =>
        prev.map((user) =>
          user._id === item._id ? { ...user, verified: true } : user
        )
      );
    } catch (err) {
      console.log("Verification error:", err);
    }
  };

  const editUser = (id) => {
    console.log("Edit user", id);
  };

  const blockUser = (id) => {
    console.log("Block user", id);
  };

  const deleteUser = (id) => {
    console.log("Delete user", id);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Salary</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobData &&
              jobData.map((item, index) => (
                <tr className="hover:bg-gray-50" key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="w-10 h-10 rounded-full border border-gray-200" src="https://avatar.iran.liara.run/public/8" alt="User" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.tokenPhoneNumber}</div>
                        <div className="text-sm text-gray-500">{item.requirement}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.title}</td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.companyName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.experience}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {item.description}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.verified==="true" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {item.verified==="true" ? 'Verified' : 'Unverified'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.minSalary}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.maxSalary}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button onClick={() => acceptJob(item)} className="text-green-600 hover:text-green-900">Accept</button>
                    <button onClick={() => blockUser(item._id)} className="text-indigo-600 hover:text-indigo-900">Block</button>
                    <button onClick={() => editUser(item._id)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                    <button onClick={() => deleteUser(item._id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Administrator;
