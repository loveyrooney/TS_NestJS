import Heads from "./Heads";
import Branch from "./Branch";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

export default function Menu({ children }) {
  const router = useRouter();
  const [branches, setBranches] = useState([1]);
  return (
    <>
      <Heads title={router.pathname.split("/").pop()} />
      <Navbar isLogin={true} userName={"Rooney"} />
      <div className="grid grid-cols-4">
        <aside className="col-span-1 bg-gray-900 p-3 min-h-screen">
          <button
            className="text-gray-400 bg-gray-800 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
            type="button"
            onClick={() => {
              setBranches(branches.concat(branches[branches.length - 1] + 1));
            }}
          >
            ➕ Branch
          </button>
          {branches.map((index) => (
            <Branch
              key={index}
              index={index}
              list={
                router.pathname === "/space/treatment"
                  ? ["기획안", "스토리", "인물"]
                  : [
                      {
                        synNo: "1",
                        synTitle: "장소 1",
                        synSubtitle: "누구와 누구의 만남",
                      },
                      {
                        synNo: "2",
                        synTitle: "장소 2",
                        synSubtitle: "무슨 일 일어남",
                      },
                    ]
              }
            />
          ))}
        </aside>
        {children}
      </div>
    </>
  );
}
