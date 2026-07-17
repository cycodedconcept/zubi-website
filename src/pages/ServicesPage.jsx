import { Link } from 'react-router-dom';
import { Reveal } from '../component/ui';
import droneGraphic from '../assets/drone.png';

const capabilities = [
  {
    title: 'IoT & Embedded Systems Development',
    copy:
      'We transform physical environments into connected, intelligent ecosystems. Our team handles custom IoT device prototyping, PCB design, sensor integration (LoRaWAN, MQTT), firmware development, and edge computing solutions for industrial applications.',
  },
  {
    title: 'Cloud Architecture & Enterprise Software',
    copy:
      'We build secure, high-availability software ecosystems hosted on AWS or Azure. Enterprise web applications, mobile apps (iOS & Android), SaaS platforms, and API architectures are designed to handle real-world data loads, scale under pressure, and integrate with your existing systems.',
  },
  {
    title: 'Predictive AI & Data Analytics',
    copy:
      'We turn raw operational data into foresight. Our team builds and integrates machine learning models that identify patterns, power business intelligence dashboards, and predict failures before they happen, turning reactive operations into proactive ones.',
  },
  {
    title: 'System Integration & Automation',
    copy:
      'We engineer intelligent connectivity for complex operations: industrial automation, smart fleet management, smart city infrastructure, and process optimisation. If it can be connected, monitored, or automated, we can design and deploy the system.',
  },
];

const processSteps = [
  {
    title: 'Discover',
    copy:
      'We start by understanding your operational reality, not just your requirements document.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3.5 4 7v5.5c0 4.1 2.8 7.9 8 8.9 5.2-1 8-4.8 8-8.9V7l-8-3.5Z" />
        <path d="M9.5 11.25h5M9 14.5h6" />
        <path d="M9.5 8.5h5" />
      </svg>
    ),
  },
  {
    title: 'Architect',
    copy:
      'We design systems that work under real conditions, accounting for the constraints most engineers ignore.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3.5 5 6.8v4.8c0 4.2 2.9 7.8 7 8.9 4.1-1.1 7-4.7 7-8.9V6.8l-7-3.3Z" />
        <path d="M12 8.5v7" />
        <path d="M8.5 12H15.5" />
      </svg>
    ),
  },
  {
    title: 'Build',
    copy: 'Hardware and software are developed in parallel by one team. No handoff gaps.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 18.5h14" />
        <path d="M7.5 16V11" />
        <path d="M12 16V7.5" />
        <path d="M16.5 16v-5" />
      </svg>
    ),
  },
  {
    title: 'Deploy & Support',
    copy:
      'We stay with you through deployment and beyond. Our systems are built to last, and so are our partnerships.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" />
        <path d="M4.5 12h15" />
        <path d="M12 4.5c2 2.1 3 4.6 3 7.5s-1 5.4-3 7.5c-2-2.1-3-4.6-3-7.5s1-5.4 3-7.5Z" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="container">
        <Reveal as="div" className="services-page__hero">
          <span className="services-page__badge">Custom Engineering Services</span>
          <h1>
            We Built a Product That Saves Lives. Now Imagine What We Can Build for You.
          </h1>
          <p className="services-page__lead">
            EVADE detects crashes in milliseconds and coordinates emergency response across
            unreliable networks. The engineering behind that product, the same hardware expertise,
            cloud architecture, and real-world resilience, is available to solve your toughest
            technical challenges.
          </p>

          <div className="services-page__media-card">
            <img src={droneGraphic} alt="Zubi engineering systems demonstration" />
            <button className="services-page__play-button" type="button" aria-label="Play overview video">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M7 5.2a.8.8 0 0 1 1.22-.68l6.25 4.1a.8.8 0 0 1 0 1.36l-6.25 4.1A.8.8 0 0 1 7 13.4V5.2Z" />
              </svg>
            </button>
          </div>

          <div className="services-page__hero-actions">
            <Link className="services-page__button services-page__button--primary" to="/company/contact">
              Tell Us About Your Project
            </Link>
          </div>
        </Reveal>

        <section className="services-page__capabilities">
          <Reveal as="div" className="services-page__section-card" delay={80}>
            <h2>Our Core Engineering Capabilities</h2>

            <div className="services-page__capability-list">
              {capabilities.map((item, index) => (
                <Reveal
                  key={item.title}
                  as="article"
                  className="services-page__capability-item"
                  delay={120 + index * 70}
                >
                  <h3>{item.title}</h3>
                  <div className="services-page__capability-copy">
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="services-page__process">
          <Reveal as="div" className="services-page__process-header" delay={100}>
            <h2>Our Process</h2>
          </Reveal>

          <div className="services-page__process-grid">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                as="article"
                className="services-page__process-card"
                delay={140 + index * 90}
              >
                <div className="services-page__process-icon">{step.icon}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="services-page__process-actions" delay={220}>
            <Link className="services-page__button services-page__button--light" to="/company/contact">
              Schedule a Technical Consultation
            </Link>
            <Link
              className="services-page__button services-page__button--primary"
              to="/resources/downloads"
            >
              Download Our Capabilities Overview
            </Link>
          </Reveal>
        </section>
      </div>
    </section>
  );
};

export default ServicesPage;
