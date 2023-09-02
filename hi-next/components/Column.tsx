import Cell from "./Cell";

export default function Column({ classProps, title }) {
  return (
    <div className={classProps}>
      <input
        className="text-gray-400 bg-gray-800 text-center w-full border-2 border-gray-700"
        placeholder={title}
        type="text"
      />
      <Cell cells={Array.from({ length: 22 })} />
    </div>
  );
}
