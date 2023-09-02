import React from "react";
import Navbar from "../../components/Navbar";
import Heads from "../../components/Heads";

export default function Space({ spaceTitle }) {
  return (
    <>
      <Heads title={"Space"} />
      <Navbar isLogin={true} userName={"Rooney"} />
      <section className="text-gray-400 bg-gray-900 body-font mx-48">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                {spaceTitle + " '"}s Priview
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                this space is only for one project. you can check your forked
                branches each stage below, it helps more efficiently to organize
                total project.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Treatment
              </h2>
              <p className="text-base leading-relaxed mt-2">
                ver 1 subtitle ver 2 subtitle
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Scene
              </h2>
              <p className="text-base leading-relaxed mt-2">
                ver 1 subtitle ver 2 subtitle
              </p>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Scenario
              </h2>
              <p className="text-base leading-relaxed mt-2">
                ver 1 subtitle ver 2 subtitle
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

//여기에 현재 스페이스에서 작업중인 영화 메타데이터 제공, fork 몇개 버전 있는지
//버전2에서 home 메뉴바 만들어서 여기를 대시보드 형으로 발전시킬 수 있으면 좋겠다.
