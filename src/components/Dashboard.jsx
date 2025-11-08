import { useMemo } from "react";
import { Award, Users, CalendarDays, Crown } from "lucide-react";

export default function Dashboard({ user }) {
  const demo = useMemo(() => ({
    classes: 2,
    students: 27,
    pending: 3,
    topGroup: "Group Alpha (12-day streak)",
  }), []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <p className="text-sm text-gray-600">Welcome {user?.name || user?.email}. Here's a quick glance at activity.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Stat icon={<Users className="h-5 w-5" />} label="Students" value={demo.students} />
        <Stat icon={<CalendarDays className="h-5 w-5" />} label="Pending Reviews" value={demo.pending} />
        <Stat icon={<Award className="h-5 w-5" />} label="Classes" value={demo.classes} />
        <Stat icon={<Crown className="h-5 w-5" />} label="Top Group" value={demo.topGroup} />
      </div>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-base font-semibold">Recent Submissions</h3>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2">
            <span className="text-gray-700">Group Alpha • Hallway • Photo submitted</span>
            <span className="text-xs text-gray-500">Today, 8:40 AM</span>
          </li>
          <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2">
            <span className="text-gray-700">Group Beta • Cafeteria • Awaiting review</span>
            <span className="text-xs text-gray-500">Today, 8:30 AM</span>
          </li>
          <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2">
            <span className="text-gray-700">Group Gamma • Library • Approved</span>
            <span className="text-xs text-gray-500">Yesterday</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 shadow">
      <div className="flex items-center gap-2 text-gray-900">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
          {icon}
        </span>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="text-base font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
}
