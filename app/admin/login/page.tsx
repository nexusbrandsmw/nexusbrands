"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#f4f6f8]">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex relative bg-[#000f22] text-white overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#e01e41]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full" />

        <div className="relative z-10 flex flex-col justify-center px-16 max-w-xl">

          <span className="uppercase tracking-[0.2em] text-sm text-white/60">
            Nexus CMS
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Manage your projects, blogs and content from one place.
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            A modern content management system designed to help businesses
            update portfolios, publish blogs and manage their digital presence.
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="lg:hidden mb-10 text-center">

            <h1 className="text-3xl font-bold text-[#000f22]">
              Nexus CMS
            </h1>

          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10">

            <div className="mb-8">

              <h2 className="text-3xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-slate-500">
                Sign in to access your dashboard.
              </p>

            </div>

            <form className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e01e41]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e01e41]"
                />
              </div>

              {/* Remember */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  href="#"
                  className="text-[#e01e41] hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#e01e41] text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Sign In
              </button>

            </form>

          </div>

          <p className="text-center mt-6 text-sm text-slate-500">
            Powered by <span className="font-semibold">Nexus Brands</span>
          </p>

        </div>

      </div>

    </div>
  );
}