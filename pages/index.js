// pages/index.js
import Layout from './layout'
import styles from '../styles/Home.module.css'

export default function Page() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Body</h2>
    </div>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
