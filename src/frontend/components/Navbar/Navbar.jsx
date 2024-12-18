import { Link, useLocation } from 'react-router-dom';
import { LinksContainer } from '..';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  const isNavInLoginOrSignupPage =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className={styles.nav}>
      <div
        className={`container ${styles.navCenter} ${
          isNavInLoginOrSignupPage && styles.loginNavCenter
        }`}
      >
        <Link to='/'>
          <h3 className={styles.logo}>
            Munish{' '}
            <span className={styles.logoTheme}>
              Elec{!isNavInLoginOrSignupPage ? '.' : 'tronics'}
            </span>
          </h3>
        </Link>

        {!isNavInLoginOrSignupPage && (
          <>
            <SearchBar />
            <LinksContainer />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
