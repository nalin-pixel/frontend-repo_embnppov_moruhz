import { useState } from "react";
import Navbar from "./components/Navbar";
import AuthSection from "./components/AuthSection";
import ClassCreator from "./components/ClassCreator";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [createdClass, setCreatedClass] = useState(null);

  const handleSignOut = () => {
    setUser(null);
    setCreatedClass(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onSignOut={handleSignOut} />

      {!user ? (
        <AuthSection onAuth={setUser} />
      ) : (
        <>
          <Dashboard user={user} />
          {user.role === "teacher" && <ClassCreator onCreate={(cls) => setCreatedClass(cls)} />}
          {createdClass ? (
            <div className="mx-auto max-w-4xl px-6 pb-16">
              <div className="rounded-2xl border border-green-200 bg-white p-6 text-sm text-gray-700">
                Class created. Share the code with students to join.
              </div>
            </div>
          ) : null}
        </>
      )}

      <footer className="border-t bg-white/70 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SweepStreak. Keep the streak alive.
      </footer>
    </div>
  );
}

export default App;
