import { useState } from "react";
import HeroHeader from "./components/HeroHeader";
import AuthTabs from "./components/AuthTabs";
import FlowOverview from "./components/FlowOverview";
import DemoPanels from "./components/DemoPanels";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroHeader />

      {!user ? (
        <AuthTabs onAuth={setUser} />
      ) : (
        <div className="mx-auto -mt-12 max-w-3xl rounded-2xl border border-green-200 bg-white p-6 text-center shadow-xl">
          <p className="text-sm text-gray-700">
            Signed in as <span className="font-semibold">{user.email}</span> ({user.role}).
          </p>
          <button
            className="mt-3 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
            onClick={() => setUser(null)}
          >
            Switch account
          </button>
        </div>
      )}

      <FlowOverview />
      <DemoPanels />

      <footer className="border-t bg-white/70 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SweepStreak. Keep the streak alive.
      </footer>
    </div>
  );
}

export default App;
