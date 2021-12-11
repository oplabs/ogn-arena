// add bootstrap css 
import Head from "next/head";
//import 'bootstrap/dist/css/bootstrap.css'
import '../custom.scss';
import '../styles.css';
// own css files here
//import "../css/customcss.css";
export default function BaseApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicons/128x128.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/favicons/196x196.png" />
        <link rel="icon" type="image/png" sizes="228x228" href="/favicons/228x228.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicons/152x152.png" />
        <link rel="apple-touch-icon-precomposed" sizes="167x167" href="/favicons/167x167.png" />
        <link rel="apple-touch-icon-precomposed" sizes="180x180" href="/favicons/180x180.png" />
      </Head>
      <Component {...pageProps} />
    </>

  );
}

