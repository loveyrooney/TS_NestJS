import SaveButton from "./SaveButton";

export default function ScenarioPaper() {
  return (
    <>
      <form className="col-start-2 col-span-3 bg-gray-700 text-gray-400">
        <SaveButton />
        <input
          type="text"
          className="text-gray-400 bg-gray-800"
          placeholder="# number"
        />
        <input
          type="text"
          className="text-gray-400 bg-gray-800 mx-2"
          placeholder="scene title"
        />
        <input
          type="text"
          className="text-gray-400 bg-gray-800"
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
    </>
  );
}
