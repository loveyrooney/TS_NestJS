import Head from "next/head";

export default function Heads({ title }) {
  return (
    <Head>
      <title>{title} | Scenario Board</title>
    </Head>
  );
}
