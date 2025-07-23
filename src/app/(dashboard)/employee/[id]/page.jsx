
import React from 'react'

import TabsUI from '@/app/component/TabsUI'

async function employeeDetail(id) {
  
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  const data = await response.json()
 
  return data
}

export default async function DashboardPage({ params }) {
  console.log('params:', params)
  const details = await employeeDetail(params.id)
  console.log('Details in Page:', details)
  return (
    <div>
      <TabsUI user={details} ></TabsUI>
    </div>
  )
}

