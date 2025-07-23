import EmployeeDashboard from "./component/EmployeeDashboard";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa"; // Import the bookmark icon

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen py-8">
      <div className="flex justify-center items-center gap-x-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Employee List</h1>
        <Link href={'/bookmark'}>
          <button className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded hover:bg-blue-200 transition-colors">
            <FaRegBookmark className="text-blue-600" size={20} />
            
          </button>
        </Link>
      </div>
      <EmployeeDashboard />
    </main>
  );
}
