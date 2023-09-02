export default function Cell({ cells }) {
  return (
    <>
      {cells.map((el, index) => (
        <input
          key={index}
          type="text"
          className="block w-full text-center text-gray-400 bg-gray-800 rounded-none focus:ring-gray-700"
        />
      ))}
    </>
  );
}
