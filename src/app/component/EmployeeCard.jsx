import React from 'react';
import Starrating from './Starrating';
import { getRandomRating } from '../lib/Rating';
import Link from 'next/link';
import Promotebutton from './Promotebutton';
import Bookmarkbtn from './Bookmarkbtn';

const EmployeeCard = ({ user }) => {
    const rating = getRandomRating()
  return (
    <div className="flex flex-col justify-between p-4 rounded-xl shadow-lg hover:shadow-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out bg-white">
      
      {/* User Info */}
      <div className="flex flex-col gap-2">
        <div>
          <p className='text-gray-800 font-bold text-lg truncate w-full'>
           Name : {`${user?.firstName} ${user?.lastName}`}
          </p>
        </div>
        <div>
          <p className="w-full text-gray-500 font-normal text-sm truncate">
            {user.email}
          </p>
        </div>
        <div className='flex justify-between items-center w-full mt-2 text-sm'>
          <p className='text-green-600 font-semibold'>Age: {user.age}</p>
          <p className='text-gray-600 capitalize'>{user.company.department}</p>
        </div>
        <Starrating rating={rating}/>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <Link href={`/employee/${user.id}`}> 
        <button className="flex-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
         >
          View
        </button>
        </Link>

        <Bookmarkbtn user={user}/>

        <Promotebutton/>


      </div>
    </div>
  );
};

export default EmployeeCard;