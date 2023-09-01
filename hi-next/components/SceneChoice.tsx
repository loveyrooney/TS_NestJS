import Link from "next/link";

export default function SceneChoice() {
  return (
    <div className="col-start-4 col-span-9">
      <div className="m-3 p-4 w-80 h-96 text-gray-400 flex items-center bg-gray-800 shadow-red-500 rounded-md h-40 flex flex-col">
        <p>Table Layout</p>
        <Link
          href="/space/scene1"
          className="m-3 p-2 h-10 w-40 text-gray-100 rounded-lg bg-green-600 hover:bg-gray-700 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          4:2:2 3칸
        </Link>
        <Link
          href="/space/scene2"
          className="m-3 p-2 h-10 w-40 text-gray-100 rounded-lg bg-green-600 hover:bg-gray-700 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          2:2:4 3칸
        </Link>
        <Link
          href="/space/scene3"
          className="m-3 p-2 h-10 w-40 text-gray-100 rounded-lg bg-green-600 hover:bg-gray-700 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          3:3:2 3칸
        </Link>
        <Link
          href="/space/scene4"
          className="m-3 p-2 h-10 w-40 text-gray-100 rounded-lg bg-green-600 hover:bg-gray-700 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          2:2:3 3칸
        </Link>
        <Link
          href="/space/scene5"
          className="m-3 p-2 h-10 w-40 text-gray-100 rounded-lg bg-green-600 hover:bg-gray-700 font-medium text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          2:2:2:2 4칸
        </Link>
      </div>
    </div>
  );
}
