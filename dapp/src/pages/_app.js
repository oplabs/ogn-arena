// add bootstrap css 
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// own css files here
//import "../css/customcss.css";
export default function BaseApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>

  );
}

