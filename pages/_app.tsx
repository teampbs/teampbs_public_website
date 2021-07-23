// /** @jsxImportSource @emotion/react */
// import tw from "twin.macro";
import Head from 'next/head'
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}