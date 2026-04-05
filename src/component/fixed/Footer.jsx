import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { footerSections } from '../../data/siteMap';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(Boolean(email.trim()));
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link className="site-footer__brand-link" to="/">
              <span className="site-footer__brand-mark">
                <span className="site-footer__brand-main">zubi</span>
                <span className="site-footer__brand-sub">Technologies</span>
              </span>
            </Link>

            <p className="site-footer__description">
              Building comprehensive digital ecosystems that transform business operations and drive
              growth.
            </p>

            <a className="site-footer__email" href="mailto:support@zubitechnologies.com">
              <svg
                className="site-footer__email-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              <span>support@zubitechnologies.com</span>
            </a>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {footerSections.map((section) => (
              <div key={section.title} className="site-footer__column">
                <h3>{section.title}</h3>
                {section.links.map((link) => (
                  <NavLink key={link.to} to={link.to}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer__newsletter">
          <h4>
            Subscribe to our newsletter for the latest insights,<br/> product updates, and industry
            trends delivered to your inbox.
          </h4>

          <form className="site-footer__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your work email"
              aria-label="Your work email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              required
            />
            <button className="site-footer__submit" type="submit">
              Subscribe
            </button>
          </form>

          <div className="site-footer__policy">
            <span>
              Unsubscribe any time. By subscribing you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </span>
            {subscribed ? <span className="site-footer__success">Thanks for subscribing.</span> : null}
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>&copy; 2026 ZubiTechnologies. All rights reserved.</span>

          <div className="site-footer__legal">
            <NavLink to="/terms-of-use">Terms of Use</NavLink>
            <span className="site-footer__divider" aria-hidden="true" />
            <NavLink to="/cookies-settings">Cookies Settings</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
