import EmployeeDashboard from "./component/EmployeeDashboard";


export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 ">Employee List</h1>
     
      <EmployeeDashboard />
    </main>
  );
}
