import { Link } from 'react-router-dom';
import terGraphic from '../assets/ter.png';

const beliefs = [
  'We believe technology should be built for the hardest conditions first because if it works there, it works everywhere. We believe emergency response should not depend on who has signal or who stays conscious.',
  'We believe Africa’s next generation of infrastructure will be built by companies that understand its realities from the inside.',
  'We believe the best way to prove what you can do is to ship something that works.',
];

const differentiators = [
  {
    title: 'Real-World Resilience',
    copy:
      'Every system we build accounts for network inconsistency, power fluctuations, and infrastructure constraints. This is not a feature, it is our foundational engineering philosophy.',
  },
  {
    title: 'Full-Stack Ownership',
    copy:
      'We design the hardware, write the firmware, build the cloud architecture, and develop the user-facing software. One team owns the entire stack, which means zero integration blind spots.',
  },
  {
    title: 'Security as a Foundation',
    copy:
      'From encrypted data transmission to secure cloud infrastructure, security is designed into every layer not added after the fact.',
  },
  {
    title: 'Mission-Driven Engineering',
    copy:
      'We do not build technology for its own sake. Every product and project we take on must solve a tangible problem that affects real people.',
  },
];

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-page__hero">
          <span className="about-page__badge">About Zubi Technologies</span>
          <h1>Our Story</h1>

          <div className="about-page__intro">
            <p>
              Zubi Technologies was born from a simple, frustrating truth: the technology that keeps
              people safe on roads in other parts of the world either does not exist here, or does
              not work here. Not because the engineering is impossible but because no one was
              building it for our reality.
            </p>
            <p>
              We started with a question: What if an emergency response system did not depend on a
              phone call? What if it could work on a 2G network in Lagos traffic, survive a power
              cut, and still get help to the right place in seconds?
            </p>
            <p>
              That question became EVADE. And EVADE became the foundation of Zubi Technologies a
              company that engineers resilient, intelligent systems for the environments that need
              them most.
            </p>
            <p>
              Today, we&apos;re building beyond emergency response. Our engineering team is developing
              new products and working with enterprises and governments to solve infrastructure
              challenges that others have written off as too hard. We do not believe in “too hard.”
              We believe in “not yet solved.”
            </p>
          </div>
        </div>

        <div className="about-page__body">
          <div className="about-page__belief">
            <h2>What We Believe</h2>
            {beliefs.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="about-page__visual-card">
            <img src={terGraphic} alt="Zubi Technologies systems illustration" />
          </div>

          <div className="about-page__values">
            <h2>What Sets Us Apart</h2>

            <div className="about-page__value-list">
              {differentiators.map((item, index) => (
                <article key={item.title} className="about-page__value-item">
                  <h3>
                    {index + 1}. {item.title}
                  </h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-page__closing">
            <h2>Based in Lagos. Built for the World.</h2>
            <p>
              Our headquarters are in Lagos, Nigeria one of the most complex, dynamic, and demanding
              operating environments on the planet. The systems we build here are tested by reality
              every single day. That&apos;s not a limitation. It&apos;s our competitive advantage.
            </p>

            <div className="about-page__actions">
              <Link className="about-page__button about-page__button--light" to="/company/contact">
                Work With Us
              </Link>
              <Link className="about-page__button about-page__button--primary" to="/#evade">
                Explore EVADE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
