export default function Table({ children }) {
  return (
    <>
      <div className="col-span-3 bg-gray-800 text-gray-400 p-3">
        <ul>
          <li className="border-solid border-2 border-gray-900">#1.</li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
}
