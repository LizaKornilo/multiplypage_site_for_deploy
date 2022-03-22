import Head from 'next/head'
import Footer from '../components/footer/footer';
import HeaderHome from '../components/header-home/HeaderHome';
import Header from '../components/header/Header';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Бистро &quot;Обед-буфет&quot;</title>
        <meta name="description" content="Сайт бистро Обед-буфет" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {(Component.name === "Home") ? <HeaderHome /> : <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
