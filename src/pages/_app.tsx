import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Karan Agrawal - (Pretty Good) Software Developer</title>
        <link rel="icon" type="image/jpeg" href="/pfp-round.jpeg" />
        <meta name="title" content="Karan Agrawal - (Pretty Good) Software Developer" />
        {/* facebook  / open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karanel.sh"></meta>
        <meta property="og:title" content="Karan Agrawal - (Pretty Good) Software Developer" />
        <meta property="og:description" content="" />
        {/* <meta property="og:image" content=""></meta> */}

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karanel.sh" />
        <meta property="twitter:title" content="Karan Agrawal - (Pretty Good) Software Developer" />
        <meta property="twitter:description" content="" />
        {/* <meta property="twitter:image" content=""></meta> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
