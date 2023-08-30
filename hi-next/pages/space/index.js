import Navbar from "@/components/Navbar";

export default function Space({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}

//여기에 현재 스페이스에서 작업중인 영화 메타데이터 제공, fork 몇개 버전 있는지
