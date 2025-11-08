import { CheckCircle2, Camera, CalendarCheck, Users2, ClipboardList } from "lucide-react";

const steps = [
  {
    title: "Create Class",
    description:
      "Teachers create a class and get a unique join code.",
    icon: Users2,
  },
  {
    title: "Join & Group",
    description:
      "Students join via code, then the teacher forms groups and assigns areas.",
    icon: ClipboardList,
  },
  {
    title: "Clean & Capture",
    description:
      "Students complete duties, mark attendance, and snap photo evidence.",
    icon: Camera,
  },
  {
    title: "Review & Approve",
    description:
      "Submissions enter a pending state for teacher review on dashboard and calendar.",
    icon: CalendarCheck,
  },
  {
    title: "Award & Streak",
    description:
      "Approved reports grant points, extend streaks, and earn badges.",
    icon: CheckCircle2,
  },
];

export default function FlowOverview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">How SweepStreak Works</h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-gray-600">
        A simple flow that makes classroom cleanliness engaging and measurable.
      </p>

      <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="group relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">{i + 1}. {s.title}</p>
                <p className="text-xs text-gray-600">{s.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
