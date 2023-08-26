import Navbar from "./../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer>copyrighted by rooney</footer>
      <style jsx global>{`
        body {
          background-color: yellow;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
}

//nextjs의 특징적인 컴포넌트
//홈페이지 전체에 같은 것을 적용하고 싶을 때 만드는, 가장 먼저 읽어들이는 컴포넌트.
//컴포넌트이름, props의 2가지 인자가 들어간다.
