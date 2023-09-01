/* eslint-disable @next/next/no-img-element */
import React from "react";
import Heads from "../components/Heads";
import Link from "next/link";

//Home() 함수 인자에 {results} 주면 pageProps를 쓸 수 있음.
export default function Home() {
  return (
    <>
      <div>
        <Heads title="Home" />
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Only For Scenario Writers
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Interactive : We give pretty attractive interface for your
                works. Intuitive : You can use all of our service with any
                script. just experience it! architective : To make a scenario,
                it needs numeral fixing when it comes to "architecture".
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <Link href="/space">
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/600x360"
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        Fantasy
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        Shooting Stars
                      </h1>
                      <p className="leading-relaxed">
                        here is this scenario logline.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/601x361"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      The Catalyzer
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/603x363"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      The 400 Blows
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/602x362"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Neptune
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/605x365"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Holden Caulfield
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/606x366"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Alper Kamu
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const { results } = await (await axios.get(`url`)).json;
//   return {
//     props: {
//       results,
//     },
//   };
// }

//파일 제목이 곧 url이 된다. 단, index.js는 /index 라고는 사용할 수 없다.
//하위 라우터를 만들경우, 상위 라우터 : 폴더이름 하위 라우터 : 파일이름 으로 한다. 상위 라우터의 index.js는 페이지 최상단에 상위라우터.js와 같다.
//하위 라우터가 변수인 경우 파일 이름 : [변수].js
//react는 브라우저에서 HTML을 구성하기 위한 자바스크립트를 몽땅 가져와서 클라이언트에서 모든 UI를 만드는, CSR이다. 싱글 페이지.
//nextjs는 최초에 컴포넌트의 초기상태 모양인 정적 HTML을 로드한다.
//그 정적 HTMl 위에서 리액트를 활용해 상호작용하는 것을 hydration이라고 한다.
