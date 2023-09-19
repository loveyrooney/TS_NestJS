import { useState } from "react";
import SaveButton from "./SaveButton";

export default function ScenarioPaper() {
  const [viewMode, setViewMode] = useState("edit");
  const [scenarioPages, setScenarioPages] = useState([
    { synNo: "1", synTitle: "장소 1", data: "blabla", time: "낮" },
    { synNo: "2", synTitle: "장소 2", data: "blabla", time: "낮" },
  ]);
  return (
    <>
      {viewMode === "edit" ? (
        <form className="col-start-2 col-span-3 bg-gray-700 text-gray-400">
          <SaveButton />
          <button
            type="button"
            className="bg-gray-800 inline-flex items-center mr-2"
            onClick={() => setViewMode("preview")}
          >
            🖥️
          </button>
          <input
            type="text"
            className="text-gray-400 bg-gray-800 w-12"
            placeholder="# number"
          />
          <input
            type="text"
            className="text-gray-400 bg-gray-800 mx-2"
            placeholder="scene title"
          />
          <input
            type="text"
            className="text-gray-400 bg-gray-800 w-12"
            placeholder="time"
          />
          <input
            type="text"
            className="text-gray-400 bg-gray-800 mx-2"
            placeholder="scene subtitle"
          />
          <textarea
            cols="100"
            defaultValue={""}
            placeholder="we need data"
            className="block min-h-screen bg-gray-800 text-gray-400 m-1 p-20"
          ></textarea>
          <textarea
            cols="100"
            defaultValue={""}
            placeholder="we need feedback"
            className="block bg-gray-800 text-gray-400 m-1 p-20"
          ></textarea>
        </form>
      ) : (
        <div className="col-start-2 col-span-3 bg-gray-700 text-gray-400 p-20">
          <button
            type="button"
            className="bg-gray-800 inline-flex items-center mr-2"
            onClick={() => setViewMode("edit")}
          >
            🖥️
          </button>
          {scenarioPages.map((el, index) => (
            <div key={index}>
              <p className="mb-2">
                #{el.synNo}. {el.synTitle} / {el.time}
              </p>
              <p className="mb-12">{el.data}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
