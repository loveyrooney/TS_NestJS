export default function TreatmentPaper() {
  return (
    <>
      <form className="col-start-4 col-span-9 bg-gray-700 text-gray-400">
        <input
          type="text"
          className="text-gray-400 bg-gray-800"
          placeholder="document title"
        />
        <select className="text-gray-400 bg-gray-800 mx-2">
          <option value="">category</option>
          <option>기획안</option>
          <option>스토리</option>
          <option>인물</option>
        </select>
        <textarea
          cols="100"
          defaultValue={"we need data"}
          className="block min-h-screen bg-gray-800 text-gray-400 m-1 p-20"
        ></textarea>
      </form>
    </>
  );
}
