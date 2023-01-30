import { useState } from 'react';

import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import { signIn } from 'next-auth/react';

export default function AddPost() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();
        //Getting value from useRef()
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;
        //Validation
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }
        //POST form values
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        //Await for data for any desirable next steps
        // get the data
        let data = await res.json();

        if (data.success) {
            // reset the fields
            setEmail('');
            setPassword('');
            // set the message
            return setMessage(data.message);
        } else {
            // set the error
            return setError(data.message);
        }
    };
    

    return (
        <div>
            <div className={styles.container}>
                <form onSubmit={onFormSubmit} className={styles.form}>
                    {error ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.error}>{error}</h3>
                        </div>
                    ) : null}
                    {message ? (
                        <div className={styles.formItem}>
                            <h3 className={styles.message}>{message}</h3>
                        </div>
                    ) : null}
                    <div className={styles.formItem}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles.formItem}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className={styles.formItem}>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}