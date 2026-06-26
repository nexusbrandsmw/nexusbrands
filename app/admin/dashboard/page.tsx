"use client";

import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Users,
  Settings,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Projects", value: 24 },
    { label: "Blog Posts", value: 12 },
    { label: "Clients", value: 8 },
    { label: "Messages", value: 5 },
  ];

  return (
    <div className="min-h-screen flex bg-[#f8f9fb]">

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-3xl font-bold text-[#000f22]">
              Dashboard Overview
            </h2>
            <p className="text-[#000f22]/60 mt-1">
              Manage your projects, blog, and clients.
            </p>
          </div>

          <Link
            href="/admin/projects/new"
            className="bg-[#e01e41] text-white px-5 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            + New Project
          </Link>

        </div>

        {/* STATS CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-[#000f22]/10"
            >
              <p className="text-sm text-[#000f22]/60">
                {item.label}
              </p>
              <h3 className="text-3xl font-bold text-[#000f22] mt-2">
                {item.value}
              </h3>
            </div>
          ))}

        </div>

        {/* RECENT ACTIVITY + TABLE */}
        <div className="grid lg:grid-cols-3 gap-6 mt-10">

          {/* ACTIVITY */}
          <div className="lg:col-span-1 bg-white rounded-2xl border border-[#000f22]/10 p-6">
            <h3 className="font-bold text-[#000f22] mb-4">
              Recent Activity
            </h3>

            <div className="space-y-4 text-sm">

              <p className="text-[#000f22]/70">
                ✔ New project "Tiata Investment" added
              </p>

              <p className="text-[#000f22]/70">
                ✔ Blog post published
              </p>

              <p className="text-[#000f22]/70">
                ✔ New client inquiry received
              </p>

            </div>
          </div>

          {/* TABLE */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#000f22]/10 overflow-hidden">

            <div className="p-6 border-b border-[#000f22]/10">
              <h3 className="font-bold text-[#000f22]">
                Latest Projects
              </h3>
            </div>

            <table className="w-full text-left">

              <thead className="bg-[#f8f9fb] text-sm">
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

              <tbody className="text-sm">

                <tr className="border-t border-[#000f22]/10">
                  <td className="p-4">Tiata Investment</td>
                  <td className="p-4">Branding</td>
                  <td className="p-4 text-green-600">Live</td>
                </tr>

                <tr className="border-t border-[#000f22]/10">
                  <td className="p-4">Availon</td>
                  <td className="p-4">Design</td>
                  <td className="p-4 text-green-600">Live</td>
                </tr>

                <tr className="border-t border-[#000f22]/10">
                  <td className="p-4">Kaka Investment</td>
                  <td className="p-4">Website</td>
                  <td className="p-4 text-yellow-600">Draft</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}