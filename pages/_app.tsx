import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SMISPlan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="author" content="Ilya Sychugov"></meta>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
