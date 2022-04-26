import type { AppProps } from 'next/app'
import Head from 'next/head';
import Header from '../src/components/Header';
import { ContextProvider } from '../src/context/ContextProvider';
import { StorageProvider } from '../src/storages/storage';
import '../styles/globals.css';
import classes from '../src/App.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SMISPlan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="author" content="Ilya Sychugov / Сычугов Илья"></meta>
        <meta name="description" content="SMISplan: issue tracker based on react / next / typescript"></meta>
      </Head>

      <ContextProvider>
        <StorageProvider>
          <div className={classes.main}>
            <Header />

            <Component {...pageProps} />
          </div>
        </StorageProvider>
      </ContextProvider>
    </>
  );
}

export default MyApp
