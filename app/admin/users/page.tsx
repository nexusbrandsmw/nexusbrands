"use client";

import { UserPlus, Edit, Trash2 } from "lucide-react";

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Ishmael Khalako",
      email: "admin@nexusbrandsmw.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "John Banda",
      email: "john@example.com",
      role: "Editor",
    },
    {
      id: 3,
      name: "Mary Phiri",
      email: "mary@example.com",
      role: "Author",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#000f22]">
            Users
          </h1>

          <p className="text-[#000f22]/60 mt-1">
            Manage admin users and permissions.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#e01e41] text-white px-5 py-3 rounded-xl hover:opacity-90 transition">
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-[#000f22]/10 overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#f8f9fb]">
            <tr>
              <th className="text-left p-5">Name</th>
              <th className="text-left p-5">Email</th>
              <th className="text-left p-5">Role</th>
              <th className="text-left p-5">Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-[#000f22]/10"
              >
                <td className="p-5 font-medium">
                  {user.name}
                </td>

                <td className="p-5 text-[#000f22]/60">
                  {user.email}
                </td>

                <td className="p-5">
                  <span className="px-3 py-1 rounded-full bg-[#e01e41]/10 text-[#e01e41] text-sm">
                    {user.role}
                  </span>
                </td>

                <td className="p-5 flex gap-3">
                  <button className="text-blue-600">
                    <Edit size={18} />
                  </button>

                  <button className="text-red-600">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}