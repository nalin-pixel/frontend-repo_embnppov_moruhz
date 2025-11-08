import { useState } from "react";
import { PlusCircle, Copy, Check } from "lucide-react";

export default function ClassCreator() {
  const [classname, setClassname] = useState("");
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const createClass = (e) => {
    e.preventDefault();
    const newCode = generateCode();
    setCode(newCode);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section className="mx-auto max-w-4xl px-6 py-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
        <h2 className="text-base font-semibold">Create a Class</h2>
        <p className="mt-1 text-sm text-gray-600">An auto-generated code will be ready for students to join.</p>

        <form onSubmit={createClass} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={classname}
            onChange={(e) => setClassname(e.target.value)}
            required
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring"
            placeholder="e.g., Grade 6 - Room A"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
            <PlusCircle className="h-4 w-4" /> Create Class
          </button>
        </form>

        {code && (
          <div className="mt-4 flex items-center justify-between rounded-lg border border-dashed border-indigo-300 bg-indigo-50 px-4 py-3 text-indigo-800">
            <span className="text-sm">Join Code: <strong>{code}</strong></span>
            <button onClick={copy} className="inline-flex items-center gap-1 rounded bg-indigo-600 px-2 py-1 text-xs text-white">
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />} {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function generateCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no confusing chars
  let out = "";
  for (let i = 0; i < 6; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}
