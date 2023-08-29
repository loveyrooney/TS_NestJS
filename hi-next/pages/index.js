import Heads from "./../components/Heads";

//Home() 함수 인자에 {results} 주면 pageProps를 쓸 수 있음.
export default function Home() {
  return (
    <>
      <div>
        <Heads title="Home" />
        <h1 className="active">hi</h1>
        <style jsx global>{`
          .active {
            color: tomato;
          }
        `}</style>
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
