import EmployeeDashboard from "./component/EmployeeDashboard";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa"; // Import the bookmark icon

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-x-6">
          <h1 className="text-3xl font-bold text-gray-800">Employee List</h1>
          <Link href={'/bookmark'}>
            <button className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded hover:bg-blue-200 transition-colors mt-1">
              <FaRegBookmark className="text-blue-600" size={20} />
              <span className="text-blue-700 font-medium">Bookmark</span>
            </button>
          </Link>
        </div>
      </div>
      <EmployeeDashboard />
    </main>
  );
}
