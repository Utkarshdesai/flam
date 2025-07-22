'use client'

import React, { useEffect, useState } from 'react'
import EmployeeCard from './EmployeeCard'
import SearchFilter from './SearchFilter'
import { fetchEmployees } from  '../lib/fetchEmployees'

export default function EmployeeDashboard () {
    const [allEmployees, setAllEmployees] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        async function getData() {
            const users = await fetchEmployees();
            setAllEmployees(users);
            setFilteredData(users);
            // Extract unique departments from employee data
            const depts = [...new Set(users.map(user => user.company.department))];
            setDepartments(depts);
        }
        getData();
    }, []);

    useEffect(() => {
        if (allEmployees.length > 0) {
            // Update departments if employee list changes
            const depts = [...new Set(allEmployees.map(user => user.company.department))];
            setDepartments(depts);
        }
    }, [allEmployees]);

    // Filter employees by name and department
    const handleSearch = (searchTerm, selectedDept) => {
        const filtered = allEmployees.filter(user => {
            const nameMatch = `${user.firstName} ${user.lastName}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            const deptMatch = selectedDept === '' || 
                user.company.department === selectedDept;
            return nameMatch && deptMatch;
        });
        setFilteredData(filtered);
    };

    return (
        <div> 
            <SearchFilter 
                onSearch={handleSearch} 
                departments={departments} 
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4'>
                {filteredData.map((user) => (
                    <EmployeeCard key={user.id} user={user} />
                ))}
            </div>
            {filteredData.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                    No employees found matching your criteria
                </div>
            )}
        </div>
    )
}

