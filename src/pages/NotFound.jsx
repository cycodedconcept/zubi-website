import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="info-page">
      <div className="container">
        <div className="info-page__card">
          <span className="info-page__eyebrow">404</span>
          <h1>Page not found.</h1>
          <p className="info-page__lead">
            The route you requested does not exist yet, but the router is working correctly.
          </p>
          <div className="info-page__actions">
            <Link className="info-page__button info-page__button--light" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
