import Head from "next/head";
import Hero from "../sections/hero/Hero";
import Posts from "../sections/posts/Posts";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Digital News App</title>
        <meta
          name="description"
          content="Browse all the coding news of today from around the globe"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main">
        <Hero />
        <Posts />
      </main>
    </>
  );
}
