import { useEffect, useState } from "react";
import { api } from "../../../../utils/api";

export default function UsersList() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("/user");
        setUser(data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="p-4 grow flex items-center justify-center">
      <div className="w-full max-w-4xl overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                User name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                User email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                User number phone
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                User role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {user.map((use) => (
              <tr key={use._id} className="hover:bg-blue-50 transition">
                <td className="px-4 py-2 whitespace-nowrap">{use.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{use.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {use.number_phone}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{use.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
