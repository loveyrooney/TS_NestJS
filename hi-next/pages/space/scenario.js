import Heads from "@/components/Heads";
import Navbar from "@/components/Navbar";
import Branch from "@/components/Branch";
import Paper from "@/components/Paper";
import ScenarioSheet from "@/components/ScenarioSheet";
import { useState } from "react";

export default function Scenario() {
  const [branches, setBranches] = useState([1]);
  return (
    <>
      <div>
        <Heads title="Scenario" />
        <Navbar />
        <div className="grid grid-cols-4">
          <aside className="bg-gray-900 p-3 min-h-screen">
            <button
              className="text-gray-400 bg-gray-800 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
              type="button"
              onClick={() => {
                setBranches(branches.concat(branches[branches.length - 1] + 1));
              }}
            >
              ➕ Branch
            </button>
            {branches.map((index) => (
              <Branch key={index}>
                <ScenarioSheet />
              </Branch>
            ))}
          </aside>
          <Paper />
        </div>
      </div>
    </>
  );
}
