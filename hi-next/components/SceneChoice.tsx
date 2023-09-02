import Link from "next/link";

export default function SceneChoice() {
  return (
    <div className="col-start-2 col-span-3">
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
          2:3:3 3칸
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

//현재는 컬럼 프레임을 아예 고정해놓은 버전이기 때문에 라우터로 분리함.
//이 컴포넌트는 최초 선택시에만 보여지고 로그인 한 뒤부터는 선택한 프레임라우터로
//버전2에서 프레임 자유변경 구현 시, 컴포넌트 처리 해야된다.
