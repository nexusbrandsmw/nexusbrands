"use client";

export default function SettingsPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#000f22]">
          Settings
        </h1>

        <p className="text-[#000f22]/60 mt-1">
          Manage your website and account settings.
        </p>
      </div>

      <div className="space-y-6">

        {/* Site Information */}
        <div className="bg-white p-8 rounded-2xl border border-[#000f22]/10">
          <h2 className="text-xl font-semibold text-[#000f22] mb-6">
            Website Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block text-sm text-[#000f22]/60 mb-2">
                Website Name
              </label>

              <input
                type="text"
                defaultValue="Nexus Brands"
                className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#000f22]/60 mb-2">
                Email Address
              </label>

              <input
                type="email"
                defaultValue="info@nexusbrandsmw.com"
                className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#000f22]/60 mb-2">
                Phone Number
              </label>

              <input
                type="text"
                defaultValue="+265 999 000 000"
                className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
              />
            </div>

          </div>
        </div>

        {/* Password */}
        <div className="bg-white p-8 rounded-2xl border border-[#000f22]/10">
          <h2 className="text-xl font-semibold text-[#000f22] mb-6">
            Change Password
          </h2>

          <div className="space-y-5">

            <input
              type="password"
              placeholder="Current password"
              className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
            />

            <input
              type="password"
              placeholder="New password"
              className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
            />

            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full border border-[#000f22]/10 rounded-xl px-4 py-3 outline-none focus:border-[#e01e41]"
            />

          </div>
        </div>

        {/* Save Button */}
        <button className="bg-[#e01e41] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition">
          Save Changes
        </button>

      </div>
    </>
  );
}