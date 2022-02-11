// add bootstrap css 
import Head from "next/head";
//import 'bootstrap/dist/css/bootstrap.css'
import '../custom.scss';
import '../styles.css';
import { SessionProvider, useSession } from "next-auth/react"
// own css files here
//import "../css/customcss.css";

function Auth({children}) {
  const { data: session, status } = useSession({required: true})
  const isUser = !!session?.user

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default function BaseApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
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
      <SessionProvider session={session}>
        {Component.auth ? 
          <Auth><Component {...pageProps} /></Auth>
          :
          <Component {...pageProps} />}
      </SessionProvider>
   </>
  );
}

