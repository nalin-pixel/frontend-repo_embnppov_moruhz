import { useState } from "react";
import { User, Shield } from "lucide-react";

export default function AuthTabs({ onAuth }) {
  const [mode, setMode] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAuth?.({ role: mode, email });
  };

  const Tab = ({ value, icon: Icon, children }) => (
    <button
      type="button"
      onClick={() => setMode(value)}
      className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition ${
        mode === value
          ? "bg-indigo-600 text-white shadow"
          : "bg-white/60 text-gray-700 hover:bg-white"
      }`}
      aria-pressed={mode === value}
    >
      <Icon className="h-4 w-4" />
      {children}
    </button>
  );

  return (
    <section className="mx-auto -mt-12 w-full max-w-xl px-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-center gap-2">
          <Tab value="teacher" icon={Shield}>Teacher</Tab>
          <Tab value="student" icon={User}>Student</Tab>
        </div>

        <form onSubmit={submit} className="mt-6 grid gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="you@school.edu"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-500 focus:ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-indigo-500 focus:ring"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow hover:bg-indigo-700"
          >
            {mode === "teacher" ? "Continue as Teacher" : "Continue as Student"}
          </button>

          <p className="text-center text-xs text-gray-500">
            By continuing you agree to our Terms and Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
