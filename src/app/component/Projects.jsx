import React from 'react'

const mockProjects = [
  {
    id: 1,
    name: "HR Portal Redesign",
    status: "In Progress",
    deadline: "2023-11-15"
  },
  {
    id: 2,
    name: "Employee Training Program",
    status: "Completed",
    deadline: "2023-09-30"
  },
  {
    id: 3,
    name: "Performance Review System Update",
    status: "In Progress",
    deadline: "2023-12-10"
  }
];

const Projects = () => {
  return (
    <div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="font-medium text-gray-500 mb-4 text-lg">Current Projects</h2>
        <div className="space-y-4">
          {mockProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border border-gray-100"
            >
              <div className="flex-1">
                <span className="block font-semibold text-gray-800 text-base mb-1">{project.name}</span>
                <span className="text-gray-400 text-xs">Due: {project.deadline}</span>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects