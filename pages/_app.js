// pages/_app.js

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from './layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}