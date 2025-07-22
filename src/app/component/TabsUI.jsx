'use client'
import React, { useState } from 'react'
import EmployeeDetail from './EmployeeDetail'
import Projects from './Projects'
import Feedback from './Feedback'

const TabsUI = ({user}) => {
    const tabs = [
        { id:1, tabsname :'overview' },
        { id:2, tabsname :'project'},
        { id:3, tabsname :'feedback'}
    ]
 
    const [activetab , setactivetab] = useState('overview')

    console.log(activetab)
    const changetab = (tabs)  => {
      setactivetab(tabs)
    }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6"> 
      {/* Tabs Row */}
      <div className="flex gap-x-5 mb-6">
        {tabs.map((item) => (
          <button
            key={item.id}
            onClick={() => changetab(item.tabsname)}
            className={`px-4 py-2 -mb-px font-medium border-b-2 transition-colors duration-200 focus:outline-none
              ${activetab === item.tabsname
                ? 'border-blue-500 text-blue-600 bg-white'
                : 'border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300 bg-gray-50'}
            `}
          >
            {item.tabsname.charAt(0).toUpperCase() + item.tabsname.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      { activetab ===  'project' &&  (<Projects/>)  }
      { activetab === 'feedback' &&  (<Feedback/>)  }
      { activetab  === 'overview' && (<EmployeeDetail user = {user} />) }
    </div>
  )
}

export default TabsUI