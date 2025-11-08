import { Trophy, Award, Users } from "lucide-react";

export default function HeroHeader() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 text-white">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <Trophy className="h-4 w-4" />
            <span>Make cleanliness a winning streak</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            SweepStreak
          </h1>
          <p className="mt-4 max-w-2xl text-base/7 sm:text-lg/8 text-white/90">
            A classroom cleaning companion that turns daily duties into a fun, trackable streak with photos, approvals, and awards.
          </p>

          <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <FeaturePill icon={<Users className="h-4 w-4" />} label="Classes & groups" />
            <FeaturePill icon={<Award className="h-4 w-4" />} label="Badges & streaks" />
            <FeaturePill icon={<Trophy className="h-4 w-4" />} label="Leaderboards" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ icon, label }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-3 text-sm text-white/95">
      {icon}
      <span>{label}</span>
    </div>
  );
}
