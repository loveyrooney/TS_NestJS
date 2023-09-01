import Head from "next/head";

export default function Heads({ title }) {
  return (
    <Head>
      <title>{title} | hi-next</title>
    </Head>
  );
}
