"use client";

import { useBookmarkStore } from "../../store/bookmarkstore";


export default function EmployeeBookmarkList() {
  const {
    bookmarkemployee,
    removeEmployee,
    promoteEmployee,
    assignToProject,
  } = useBookmarkStore();

  console.log(bookmarkemployee)

  return (
    <div className="space-y-4 ml-4 mt-4 mb-5">
      <h2 className="text-xl font-bold">Bookmarked Employees</h2>
      {bookmarkemployee.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 lg:mx-8">
          {bookmarkemployee.map((employee) => (
            <div
              key={employee.id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between transition-transform hover:scale-105 hover:shadow-2xl border border-gray-100"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{employee.firstName} {employee.lastName}</h3>
                <p className="text-sm text-gray-500 mb-2">{employee.email}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="font-medium text-green-600">Age: {employee.age}</span>
                  <span className="capitalize">{employee.company?.department || employee.role}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
               
                <button
                  onClick={() => assignToProject(employee.id)}
                  className="flex-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                >
                  Assign to Project
                </button>
                <button
                  onClick={() => removeEmployee(employee.id)}
                  className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookmarked employees yet.</p>
      )}
    </div>
  );
}