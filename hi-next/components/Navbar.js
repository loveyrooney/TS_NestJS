import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About us
      </Link>
      <style jsx global>{`
        .active {
          color: green;
        }
      `}</style>
    </nav>
  );
}

//css모듈은 클래스네임을 임의로 만들어 클래스간의 충돌을 방지하고, 자바스크립트 오브젝트의 프로퍼티 형태로 사용할 수 있다.
//다른 페이지에서도 nav라는 클래스네임으로 사용할 수 있다는 장점.
//className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`
//className={[styles.link, router.pathname === "/about" ? styles.active : "",].join(" ")}

//style 태그에 jsx를 활용하면, 해당 컴포넌트의 스코프 내에서 적용되는 css를 직관적으로 작성가능
//이 역시 클래스네임을 임의로 만들기 때문에 다른 페이지에서 같은 클래스네임 사용가능
//모든 컴포넌트에 적용할 css는 App 컴포넌트에서 작업하면 된다.
