import { useState } from 'react';

import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import { signIn } from 'next-auth/react';

export default () => (
    <div className={styles.container}><button onClick={() => signIn('credentials', { redirect: false,email: "shubhamgoel785@gmail.com", password: 'Opal@2019' })}>Sign in</button></div>
  )