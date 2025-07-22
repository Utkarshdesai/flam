import React from 'react'
import EmployeeCard from './EmployeeCard'


async function getEmployeeData() {
    const response = await fetch('https://dummyjson.com/users?limit=20')
    const data = await response.json()
    return data.users
}

export default async function EmployeeDashboard () {
    const data = await getEmployeeData()
 

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4'>
        {  
            data.map( (user) => {
                return <EmployeeCard key={user.id} user={user} />
            })
        }
        
    </div>
  )
}

