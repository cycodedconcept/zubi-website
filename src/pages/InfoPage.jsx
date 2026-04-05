import { Link } from 'react-router-dom';

const InfoPage = ({ section, title, description, highlights = [], protected: isProtected = false }) => {
  return (
    <section className="info-page">
      <div className="container">
        <div className="info-page__card">
          <span className="info-page__eyebrow">{section}</span>
          <h1>{title}</h1>
          <p className="info-page__lead">{description}</p>

          {isProtected ? (
            <div className="info-page__notice">
              <strong>Protected content</strong>
              <span>This page is only visible after sign-in and is being guarded by `ProtectedRoute`.</span>
            </div>
          ) : null}

          <div className="info-page__grid">
            {highlights.map((item) => (
              <article key={item} className="info-page__item">
                <span />
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="info-page__actions">
            <Link className="info-page__button info-page__button--light" to="/">
              Back to Home
            </Link>
            <Link className="info-page__button info-page__button--ghost" to="/company/contact">
              Contact Zubi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
