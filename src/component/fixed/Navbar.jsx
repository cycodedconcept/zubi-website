import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'EVADE', to: '/#evade' },
    { label: 'Services', to: '/company/services' },
    { label: 'About Us', to: '/company/about-us' },
    { label: 'Contact Us', to: '/company/contact' },
  ];

  const handleHashNavigation = (event, to) => {
    if (!to.includes('#')) {
      return;
    }

    const [, hash] = to.split('#');
    const selector = `#${hash}`;

    if (location.pathname !== '/') {
      return;
    }

    event.preventDefault();

    const section = document.querySelector(selector);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', to);
    }
  };

  const handleConsultationClick = () => {
    if (location.pathname === '/') {
      const section = document.querySelector('#contact');

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', '/#contact');
      }

      return;
    }

    navigate('/company/contact');
  };

  return (
    <header className="site-navbar">
      <div className="site-navbar__brand">
        <Link to="/" className="site-navbar__logo" aria-label="Zubi Technologies home">
          <span className="site-navbar__logo-main">
            <span className="site-navbar__logo-z">zu</span>
            <span className="site-navbar__logo-bi">bi</span>
          </span>
          <span className="site-navbar__logo-subtitle">Technology</span>
        </Link>
      </div>

      <nav className="site-navbar__links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            onClick={(event) => handleHashNavigation(event, link.to)}
            className={({ isActive }) =>
              `site-navbar__link ${
                isActive || (location.pathname === '/' && location.hash === link.to.replace('/', ''))
                  ? 'site-navbar__link--active'
                  : ''
              }`
            }
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-navbar__actions">
        <Button className="site-navbar__button" size="md" onClick={handleConsultationClick}>
          Get a Free Consultation
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
