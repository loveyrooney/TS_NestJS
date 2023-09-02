import Branchtab from "./Branchtab";

export default function Branch({ list, index }) {
  return (
    <div className="text-gray-600 border-solid border-2 border-gray-800 mt-3 p-3">
      <div
        className="text-right font-semibold text-lg cursor-pointer hover:text-white rounded-lg"
        onClick={(e) => {
          console.log(e.target.nextSibling.className);
          e.target.nextSibling.className === "hidden"
            ? (e.target.nextSibling.className =
                "flex content-right justfy-between my-2")
            : (e.target.nextSibling.className = "hidden");
        }}
      >
        ver {index}
      </div>
      <div className="hidden">
        <span className="w-20 text-center text-sm">rename</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-6 hover:stroke-white cursor-pointer"
          onClick={(e) => {
            console.log(e);
            e.target.parentElement.parentElement.remove();
            //svg가 타겟이 될 때와 path가 타겟이 될 때 결과가 달라진다. 좀더 근본적으로 다른 방법 생각해서 해결하기
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
      <Branchtab list={list} />
    </div>
  );
}
