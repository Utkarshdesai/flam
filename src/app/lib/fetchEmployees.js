export async function fetchEmployees() {
  const response = await fetch('https://dummyjson.com/users?limit=20');
  const data = await response.json();
  return data.users;
} 