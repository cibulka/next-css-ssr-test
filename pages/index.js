import Head from "next/head";

import CssTest from "../components/CssTest";

const title = "SSR & CSS in Next.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-col items-center justify-center w-full px-20 text-center">
        <div className="flex-1" />
        <h1 className="text-6xl font-bold">{title}</h1>

        <div className="mt-8">
          <CssTest />
        </div>

        <div className="flex-1" />
        <div className="flex-1" />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
