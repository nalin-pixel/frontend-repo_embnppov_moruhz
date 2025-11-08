import { useState } from "react";
import { PlusCircle, Copy, Check, Shield, Users, LayoutGrid, Camera, Award, Trophy } from "lucide-react";

export default function DemoPanels() {
  const [copied, setCopied] = useState(false);
  const [code] = useState(() => Math.random().toString(36).slice(2, 8).toUpperCase());

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="Teacher: Create a Class" icon={<Shield className="h-5 w-5" />}> 
          <div className="flex items-center gap-2">
            <input className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring" placeholder="e.g., Grade 6 - Room A" />
            <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              <PlusCircle className="h-4 w-4" /> Create
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-md border border-dashed border-indigo-300 bg-indigo-50 px-3 py-2 text-indigo-700">
            <span className="text-sm">Join Code: <strong>{code}</strong></span>
            <button onClick={copy} className="inline-flex items-center gap-1 rounded bg-indigo-600 px-2 py-1 text-xs text-white">
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />} {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </Card>

        <Card title="Student: Join with Code" icon={<Users className="h-5 w-5" />}> 
          <div className="flex items-center gap-2">
            <input className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring" placeholder="Enter class code" />
            <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">Join</button>
          </div>
          <p className="mt-2 text-xs text-gray-600">Students are added to the teacher's roster automatically.</p>
        </Card>

        <Card title="Daily Submission" icon={<Camera className="h-5 w-5" />}> 
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 rounded-md border border-gray-300 p-3 text-center text-xs text-gray-500">Camera Preview</div>
            <div className="rounded-md border border-gray-300 p-3 text-center text-xs">
              <label className="flex items-center justify-between text-gray-700">
                <span>Present</span>
                <input type="checkbox" className="h-4 w-4" />
              </label>
            </div>
          </div>
          <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700">
            Submit for Review
          </button>
        </Card>

        <Card title="Teacher Dashboard" icon={<LayoutGrid className="h-5 w-5" />}> 
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2">
              <span className="text-gray-700">Group Alpha • 3 members • Area: Hallway</span>
              <span className="inline-flex items-center gap-1 text-green-700"><Award className="h-4 w-4" /> 12-day streak</span>
            </li>
            <li className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2">
              <span className="text-gray-700">Group Beta • 4 members • Area: Cafeteria</span>
              <span className="inline-flex items-center gap-1 text-yellow-700"><Trophy className="h-4 w-4" /> Top this week</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

function Card({ title, icon, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-5 shadow">
      <div className="mb-3 flex items-center gap-2 text-gray-900">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">
          {icon}
        </span>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      {children}
    </div>
  );
}
