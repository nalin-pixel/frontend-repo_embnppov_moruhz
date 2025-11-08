import { GraduationCap } from "lucide-react";

export default function Navbar({ user, onSignOut }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold">SweepStreak</span>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-sm text-gray-600 sm:block">
                {user.email} • {user.role}
              </span>
              <button
                onClick={onSignOut}
                className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                Sign out
              </button>
            </>
          ) : (
            <span className="text-sm text-gray-500">Welcome</span>
          )}
        </div>
      </div>
    </header>
  );
}
