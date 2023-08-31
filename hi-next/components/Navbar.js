import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
        <a
          href="/"
          className="mx-3 flex title-font font-medium items-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="hidden md:flex ml-3 text-xl">
            rooney의 Scenario Board
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap text-base justify-center">
          <Link href="/space/treatment" className="mr-5 hover:text-white">
            TREATMENT
          </Link>
          <Link href="/space/scene" className="mr-5 hover:text-white">
            SCENE
          </Link>
          <Link href="/space/scenario" className="mr-5 hover:text-white">
            SCENARIO
          </Link>
        </nav>
        <button className="hidden md:flex inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          <Link href="/user">Sign In</Link>
        </button>
      </div>
    </header>
  );
}

//css모듈은 클래스네임을 임의로 만들어 클래스간의 충돌을 방지하고, 자바스크립트 오브젝트의 프로퍼티 형태로 사용할 수 있다.
//다른 페이지에서도 nav라는 클래스네임으로 사용할 수 있다는 장점.
//className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`
//className={[styles.link, router.pathname === "/about" ? styles.active : "",].join(" ")}

//style 태그에 jsx를 활용하면, 해당 컴포넌트의 스코프 내에서 적용되는 css를 직관적으로 작성가능
//이 역시 클래스네임을 임의로 만들기 때문에 다른 페이지에서 같은 클래스네임 사용가능
//모든 컴포넌트에 적용할 css는 App 컴포넌트에서 작업하면 된다.
