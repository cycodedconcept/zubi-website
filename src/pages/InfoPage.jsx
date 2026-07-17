import { Link } from 'react-router-dom';
import { Reveal } from '../component/ui';

const InfoPage = ({ section, title, description, highlights = [], protected: isProtected = false }) => {
  return (
    <section className="info-page">
      <div className="container">
        <Reveal as="div" className="info-page__card">
          <span className="info-page__eyebrow">{section}</span>
          <h1>{title}</h1>
          <p className="info-page__lead">{description}</p>

          {isProtected ? (
            <Reveal as="div" className="info-page__notice" delay={80}>
              <strong>Protected content</strong>
              <span>This page is only visible after sign-in and is being guarded by `ProtectedRoute`.</span>
            </Reveal>
          ) : null}

          <div className="info-page__grid">
            {highlights.map((item, index) => (
              <Reveal
                key={item}
                as="article"
                className="info-page__item"
                delay={100 + index * 70}
              >
                <span />
                <p>{item}</p>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="info-page__actions" delay={180}>
            <Link className="info-page__button info-page__button--light" to="/">
              Back to Home
            </Link>
            <Link className="info-page__button info-page__button--ghost" to="/company/contact">
              Contact Zubi
            </Link>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
};

export default InfoPage;
