export default function Paper({ children }) {
  return (
    <>
      <form className="col-span-3 bg-gray-700 text-gray-400">
        <textarea
          cols="100"
          defaultValue={"we need data"}
          className="block min-h-screen bg-gray-800 text-gray-400 m-1 p-20"
        ></textarea>
      </form>
      <div>{children}</div>
    </>
  );
}
