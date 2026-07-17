import { Link } from 'react-router-dom';
import { Reveal } from '../component/ui';

const NotFound = () => {
  return (
    <section className="info-page">
      <div className="container">
        <Reveal as="div" className="info-page__card">
          <span className="info-page__eyebrow">404</span>
          <h1>Page not found.</h1>
          <p className="info-page__lead">
            The route you requested does not exist yet, but the router is working correctly.
          </p>
          <Reveal as="div" className="info-page__actions" delay={100}>
            <Link className="info-page__button info-page__button--light" to="/">
              Back to Home
            </Link>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFound;
