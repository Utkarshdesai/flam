'use client '
import React from 'react'
import { useBookmarkStore } from "../store/bookmarkstore";
import toast from 'react-hot-toast'

const Promotebutton = () => {
    const {promoteEmployee} = useBookmarkStore()

    const handleProject = () => {
       promoteEmployee()
       
    }
  return (
    <div>

       <button 
        onClick={handleProject}
        className="flex-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm">
         Promote
       </button> 
    </div>
  )
}

export default Promotebutton