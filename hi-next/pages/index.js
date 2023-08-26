import Navbar from "./../components/Navbar";

export default function Home() {
  return (
    <>
      <div>
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

//파일 제목이 곧 url이 된다. 단, index.js는 /index 라고는 사용할 수 없다.
//react는 브라우저에서 HTML을 구성하기 위한 자바스크립트를 몽땅 가져와서 클라이언트에서 모든 UI를 만드는, CSR이다. 싱글 페이지.
//nextjs는 최초에 컴포넌트의 초기상태 모양인 정적 HTML을 로드한다.
//그 정적 HTMl 위에서 리액트를 활용해 상호작용하는 것을 hydration이라고 한다.
