import Link from 'next/link';

import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link legacyBehavior href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link legacyBehavior href="/add-post">
                        <a>Add post</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
