import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import classes from './main-navigation.module.css';

function MainNavigation() {
  const { data: session, status } = useSession()

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link legacyBehavior href='/'>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {status != "authenticated" && (
            <li>
              <Link legacyBehavior href='/auth'>Login</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link legacyBehavior href='/profile'>Profile</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;