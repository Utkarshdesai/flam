'use client'
import React from 'react'
import { useBookmarkStore } from "../store/bookmarkstore";
import toast from 'react-hot-toast';


const Bookmarkbtn = ({user}) => {
    const {addEmployee} = useBookmarkStore()

    const addtobookmark = () => {
        addEmployee(user)
        toast.success('bookmark saved')
    }

  return (
    <div>

        <button 
          onClick={addtobookmark}
          className="flex-1 px-3 py-1 border rounded hover:bg-gray-100 transition-colors text-sm">
          Bookmark
        </button>
    </div>
  )
}

export default Bookmarkbtn