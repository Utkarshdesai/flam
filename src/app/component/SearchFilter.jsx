'use client'
import { useState } from "react";

const SearchFilter= ({ departments, onSearch }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term, selectedDept);
  };

  const handleDeptChange = (e) => {
    const dept = e.target.value;
    setSelectedDept(dept);
    onSearch(searchTerm, dept);
  };


  return (
    
      <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-7xl mx-auto px-4">
      <input
        type="text"
        placeholder="Search by name only"
        value={searchTerm}
        onChange={handleSearch}
        className="flex-1 p-3 border rounded-lg shadow-sm"
      />
      <select
        value={selectedDept}
        onChange={handleDeptChange}
        className="p-3 border rounded-lg shadow-sm bg-white"
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
        
    
  )
}

export default SearchFilter