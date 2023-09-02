import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import styles from "./Navbar.module.css";

export default function Navbar({ isLogin, userName }) {
  const router = useRouter();
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-between">
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
          {isLogin ? (
            <span className="ml-3 text-xl">{userName}의 Scenario Board</span>
          ) : (
            <span className="hidden sm:flex ml-3 text-xl">Scenario Board</span>
          )}
        </a>
        {isLogin ? (
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
        ) : (
          ""
        )}
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base">
          <Link href="/user">Sign In</Link>
        </button>
      </div>
    </header>
  );
}
