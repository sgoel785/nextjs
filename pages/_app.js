// pages/_app.js
// import Layout from './layout'

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Provider session={pageProps.session}>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//     </Provider>
//   )
// }
import 'bootstrap/dist/css/bootstrap.css';
import { SessionProvider } from 'next-auth/react';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
