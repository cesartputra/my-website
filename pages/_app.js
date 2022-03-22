import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/custom.css'
import '../styles/globals.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  useEffect(() => {
      import("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
