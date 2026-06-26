"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Users,
  Settings,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Projects", href: "/admin/projects", icon: FolderOpen },
    { label: "Blog", href: "/admin/blog", icon: FileText },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-[#f8f9fb]">

      {/* SIDEBAR */}
      <aside className="hidden md:block w-64 bg-white border-r border-[#000f22]/10 p-6 sticky top-0 h-screen overflow-y-auto">

        <h1 className="text-xl font-bold text-[#000f22]">
          Nexus Admin
        </h1>

        <nav className="mt-10 space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-[#e01e41] text-white"
                    : "text-[#000f22] hover:bg-[#000f22]/5"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}

        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10">
        {children}
      </main>

    </div>
  );
}