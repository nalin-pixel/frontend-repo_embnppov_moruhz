import { useState } from "react";
import { Shield, UserPlus } from "lucide-react";

export default function AuthSection({ onAuth }) {
  const [tab, setTab] = useState("login");
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAuth?.({ email, role, name: name || email.split("@")[0] });
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
          <div className="mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-indigo-600" />
            <h2 className="text-base font-semibold">{tab === "login" ? "Sign in" : "Create account"}</h2>
          </div>

          <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-1 text-sm">
            <button onClick={() => setTab("login")} className={`rounded-md px-3 py-1.5 ${tab === "login" ? "bg-white shadow" : "text-gray-600"}`}>Login</button>
            <button onClick={() => setTab("register")} className={`rounded-md px-3 py-1.5 ${tab === "register" ? "bg-white shadow" : "text-gray-600"}`}>Register</button>
          </div>

          <form onSubmit={submit} className="grid gap-3">
            {tab === "register" && (
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Full name</label>
                <input className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
              </div>
            )}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@school.edu" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
              <input required type="password" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Role</label>
              <div className="flex gap-2">
                <button type="button" onClick={() => setRole("teacher")} className={`flex-1 rounded-md border px-3 py-2 text-sm ${role === "teacher" ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 bg-white"}`}>Teacher</button>
                <button type="button" onClick={() => setRole("student")} className={`flex-1 rounded-md border px-3 py-2 text-sm ${role === "student" ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-gray-300 bg-white"}`}>Student</button>
              </div>
            </div>

            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
              <UserPlus className="h-4 w-4" /> {tab === "login" ? "Sign in" : "Create account"}
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-indigo-50 to-white p-6">
          <h3 className="text-base font-semibold">What you get</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>• Teachers see all class data, progress, and submissions.</li>
            <li>• Students see groups, cleaning areas, streaks, and awards.</li>
            <li>• Simple code-based joining keeps setup fast and secure.</li>
          </ul>
          <div className="mt-6 rounded-xl border border-dashed border-indigo-300 bg-white p-4 text-sm text-indigo-800">
            After registration, teachers can create classes and instantly share join codes.
          </div>
        </div>
      </div>
    </section>
  );
}
