import React from 'react';
import './Home.css';
import { Button } from '../component/ui';

import heroIllustration from '../assets/Illustration (4).png';
import lightBackground from '../assets/Light.png';
import lightEffectGraphic from '../assets/Light Effect.png';
import integrationGraphic from '../assets/Integration.png';
import roadmapGraphic from '../assets/Chart.png';
import layersGraphic from '../assets/Group 1.png';
import softwareGraphic from '../assets/Image (4).png';
import serviceGraphic from '../assets/Illustrations.png';
import evadeLogo from '../assets/Evade white 1.png';
import trustedIcon from '../assets/Shield-Locked.png';
import orchestrateIcon from '../assets/blockchain.png';
import analyticsIcon from '../assets/sparkle-02.png';
import monitorIcon from '../assets/Icon.png';
import servicesIcon from '../assets/Icon (1).png';
import apiBox from '../assets/Box.png';
import codeBox from '../assets/Box (1).png';
import cloudDataIcon from '../assets/cloud-data.png';
import globeGraphic from '../assets/Globe.png';
import notionLogo from '../assets/notion.png';
import dropboxLogo from '../assets/dropbox.png';
import microsoftLogo from '../assets/microshop.png';
import evernoteLogo from '../assets/evernote.png';
import slackLogo from '../assets/slack.png';
import framerLogo from '../assets/framer.png';
import spotifyLogo from '../assets/spotify.png';
import cardItem from '../assets/card.png';

const trustedCompanies = [
  { name: 'Notion', logo: notionLogo },
  { name: 'Dropbox', logo: dropboxLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Evernote', logo: evernoteLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Framer', logo: framerLogo },
  { name: 'Spotify', logo: spotifyLogo },
];

const workflowSteps = [
  {
    icon: trustedIcon,
    title: 'Detect',
    copy:
      'Vehicle-mounted sensors identify collisions, rollovers, or submersion events in milliseconds. No human input required. No delays.',
    side: 'left',
  },
  {
    icon: orchestrateIcon,
    title: '2-way communication & Route',
    copy:
      'Partner agencies receive alerts through EVADE dashboard APIs, validate incidents, and route the nearest responders with full context.',
    side: 'right',
  },
  {
    icon: cloudDataIcon,
    title: 'Transmit',
    copy:
      'Encrypted crash data, GPS coordinates, impact severity, and vehicle status are transmitted instantly through secure cloud infrastructure.',
    side: 'left',
  },
  {
    icon: analyticsIcon,
    title: 'Resolve',
    copy:
      'Responders arrive informed. Insurers receive tamper-proof records. Fleet teams get transparent incident data without guesswork.',
    side: 'right',
  },
];

const featureTabs = ['Fleet', 'Applications', 'Analytics'];

const engineeringServices = [
  {
    icon: servicesIcon,
    title: 'IoT & Embedded Systems',
    copy:
      'We transform physical environments into connected, intelligent ecosystems from custom device prototyping and PCB design to sensor integration and edge computing.',
  },
  {
    icon: trustedIcon,
    title: 'Software & Cloud Architecture',
    copy:
      'We build secure, high-availability software across web, mobile, SaaS, and API infrastructure designed to handle real-world data loads and scale under pressure.',
  },
  {
    icon: analyticsIcon,
    title: 'Data, AI & Predictive Analytics',
    copy:
      'We turn raw operational data into foresight with machine learning systems, business intelligence dashboards, and predictive models built around practical outcomes.',
  },
  {
    icon: monitorIcon,
    title: 'System Integration & Automation',
    copy:
      'We engineer intelligent connectivity for complex operations including industrial automation, smart fleet management, smart city infrastructure, and process optimisation.',
  },
];

const reasons = [
  {
    icon: apiBox,
    title: 'Resilient by Design',
    copy:
      'Our systems account for network drops, power loss, and infrastructure constraints from day one. This is not an afterthought, it is our engineering principle.',
  },
  {
    icon: codeBox,
    title: 'Hardware Meets Software',
    copy:
      'We handle both sides of the stack. From the sensor on the vehicle to the dashboard on your screen, there are no integration gaps.',
  },
  {
    icon: codeBox,
    title: 'Security-First',
    copy:
      'Built to protect sensitive data and critical infrastructure. Every system we deploy is designed with security as a foundational layer.',
  },
];

const contactChannels = [
  {
    title: 'Support',
    description: 'For technical issues or help with your account.',
    email: 'support@zubitechnologies.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 14.5c1-1.4 2.1-2.1 3.5-2.1s2.5.7 3.5 2.1" />
        <circle cx="9.25" cy="10" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="14.75" cy="10" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Sales Inquiries',
    description: 'Interested in our enterprise solutions or custom integrations?',
    email: 'sales@zubitechnologies.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 7V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8V7" />
        <path d="M12 11v4" />
      </svg>
    ),
  },
];

const Home = () => {
  const scrollToSection = (selector) => {
    const section = document.querySelector(selector);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="home-page" id="home">
      <div className="home-background-glow home-background-glow--one" />
      <div className="home-background-glow home-background-glow--two" />
        <div
          className="home-hero-shell"
          style={{ '--home-hero-shell-bg': `url(${lightBackground})` }}
        >
          <section className="home-hero">
            <div className="w-100">
              <div className="home-hero__content">
                <span className="home-hero__badge">
                  Purpose-Built in Lagos. Engineered for The Real World.
                </span>
                <h1>When Seconds Decide<br/> Everything, the System Shouldn&apos;t<br/> Rely on a Phone Call</h1>
                <p>
                  Zubi Technologies engineers intelligent IoT systems and software that protect lives on
                  the road and give<br/> enterprises the infrastructure to operate smarter. Our flagship
                  product, EVADE, is redefining emergency response<br/> and it&apos;s just the beginning.
                </p>
                <div className="home-hero__actions">
                  <Button
                    className="home-button home-button--light"
                    size="lg"
                    onClick={() => scrollToSection('#evade')}
                  >
                    Watch How EVADE Works
                  </Button>
                  <Button
                    className="home-button home-button--muted"
                    variant="ghost"
                    size="lg"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Request a Custom Solution
                  </Button>
                </div>
              </div>

              <div className="home-hero__visual">
                <img src={heroIllustration} alt="EVADE product illustration" className='w-100'/>
              </div>
            </div>
          </section>
        </div>

        <section className="home-partners" aria-label="Trusted companies">
          <div className="container">
            <div className="home-partners__inner">
              <div className="home-partners__copy">
                <p>Trusted by 500+ businesses worldwide</p>
              </div>

              <div className="home-partners__marquee">
                <div className="home-partners__track">
                  {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                    <span
                      key={`${company.name}-${index}`}
                      className="home-partners__logo"
                      aria-hidden={index >= trustedCompanies.length}
                    >
                      <img
                        src={company.logo}
                        alt={index >= trustedCompanies.length ? '' : company.name}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-evade-suite" id="evade">
          <div className="home-evade-suite__beam home-evade-suite__beam--one" aria-hidden="true" />
          <div className="home-evade-suite__beam home-evade-suite__beam--two" aria-hidden="true" />

          <div className="container">
            <div className="home-evade-suite__intro">
              <div className="home-evade-suite__intro-copy">
                <img className="home-evade-logo" src={evadeLogo} alt="EVADE logo" />
                <span className="home-evade-suite__eyebrow">Introducing EVADE</span>
                <h2>Intelligent Emergency Coordination. Automatic. Verified. Instant.</h2>
              </div>

              <div className="home-evade-suite__alert-card">
                <img src={cardItem} alt="EVADE incident alert panel" />
              </div>
            </div>

            <div className="home-evade-suite__story-grid">
              <article className="home-evade-suite__story-card" data-watermark="The Problem">
                <h3>The Problem</h3>
                <p>
                  Across Africa, a road accident triggers a chain of phone calls, confusion, and
                  delays. Ambulances arrive late or not at all. Crash data is lost or disputed.
                  Insurers battle over claims. Families wait in the dark.
                </p>
              </article>

              <article className="home-evade-suite__story-card" data-watermark="The Evade Answer">
                <h3>Our Mission</h3>
                <p>
                  EVADE replaces that broken chain with an automated, sensor-verified, real-time
                  system. The moment a crash happens, EVADE detects it, transmits the data, and
                  routes emergency responders before anyone picks up a phone.
                </p>
              </article>
            </div>

            <div className="home-evade-suite__heading home-evade-suite__heading--centered">
              <h2>How It Works</h2>
            </div>

            <div className="home-evade-suite__workflow">
              <div className="home-evade-suite__workflow-column">
                {workflowSteps
                  .filter((step) => step.side === 'left')
                  .map((step) => (
                    <article key={step.title} className="home-evade-suite__step">
                      <img src={step.icon} alt="" aria-hidden="true" />
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </article>
                  ))}
              </div>

              <div className="home-evade-suite__globe-stage" aria-hidden="true">
                <img src={layersGraphic} alt="" className="home-evade-suite__globe-shell" />
                <img src={globeGraphic} alt="" className="home-evade-suite__globe" />
              </div>

              <div className="home-evade-suite__workflow-column home-evade-suite__workflow-column--right">
                {workflowSteps
                  .filter((step) => step.side === 'right')
                  .map((step) => (
                    <article key={step.title} className="home-evade-suite__step">
                      <img src={step.icon} alt="" aria-hidden="true" />
                      <h3>{step.title}</h3>
                      <p>{step.copy}</p>
                    </article>
                  ))}
              </div>
            </div>

            <div className="home-evade-suite__heading home-evade-suite__heading--serve" id="services">
              <span className="home-evade-suite__eyebrow">Features</span>
              <h2>
                Core features that secure, simplify,
                <br />
                and scale your stack
              </h2>
              <p>Real-world solutions delivering measurable business impact</p>
            </div>

            <div className="home-pill-row home-pill-row--evade" role="tablist" aria-label="Audience sectors">
              {featureTabs.map((tab, index) => (
                <span
                  key={tab}
                  className={`home-pill ${index === 0 ? 'home-pill--active' : ''}`}
                  role="tab"
                  aria-selected={index === 0}
                >
                  {tab}
                </span>
              ))}
            </div>

            <div className="home-evade-suite__serve-panel">
              <div className="home-evade-suite__serve-copy">
                <img src={trustedIcon} alt="" aria-hidden="true" />
                <h3>Fleet Management Systems</h3>
                <p>
                  Our fleet management solutions give you real-time visibility into every vehicle,
                  trip, and driver. From route optimization and fuel tracking to maintenance alerts
                  and performance analytics, Zubitech empowers businesses to reduce costs, increase
                  efficiency, and make data-driven decisions with ease.
                </p>

                <div className="home-evade-suite__cta-row">
                  <Button
                    className="home-button home-button--light"
                    size="lg"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Try It Now
                  </Button>
                </div>
              </div>

              <div className="home-evade-suite__serve-visual">
                <img src={serviceGraphic} alt="Fleet operator platform illustration" />
                <div className="home-evade-suite__fleet-overlay" aria-hidden="true">
                  {[
                    { route: 'four', delay: '0.8s', duration: '10.2s' },
                    { route: 'five', delay: '3.1s', duration: '9.1s' },
                    { route: 'six', delay: '1.7s', duration: '8.6s' },
                  ].map(({ route, delay, duration }) => (
                    <div key={route} className={`home-evade-suite__fleet-route home-evade-suite__fleet-route--${route}`}>
                      <div
                        className="home-evade-suite__fleet-truck home-evade-suite__fleet-truck--back"
                        style={{ '--fleet-delay': delay, '--fleet-duration': duration }}
                      >
                        <span className="home-evade-suite__fleet-truck-body" />
                        <span className="home-evade-suite__fleet-truck-cab" />
                        <span className="home-evade-suite__fleet-truck-wheel home-evade-suite__fleet-truck-wheel--one" />
                        <span className="home-evade-suite__fleet-truck-wheel home-evade-suite__fleet-truck-wheel--two" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="container">
            <div className="home-engineering">
              <div className="home-engineering__top">
                <div className="home-engineering__headline">
                  <span className="home-engineering__eyebrow">Custom Engineering Services</span>
                  <h2>We Built EVADE. Now <br/>Imagine What We Can <br/>Build for You.</h2>
                </div>

                <div className="home-engineering__intro">
                  <p>
                    The engineering behind EVADE, the same hardware expertise, cloud architecture,
                    and real-world resilience, is available to enterprises and governments with
                    complex technical challenges. We don&apos;t just consult. We design, build, and deploy.
                  </p>
                </div>
              </div>

              <div className="home-engineering__body">
                <div className="home-engineering__visual" aria-hidden="true">
                  <img src={softwareGraphic} alt="" className="home-engineering__visual-image" />
                  <div className="home-engineering__detect-echo">
                    <span className="home-engineering__detect-wave home-engineering__detect-wave--one" />
                    <span className="home-engineering__detect-wave home-engineering__detect-wave--two" />
                    <span className="home-engineering__detect-wave home-engineering__detect-wave--three" />
                    <span className="home-engineering__detect-core" />
                  </div>
                </div>

                <div className="home-engineering__services">
                  {engineeringServices.map((service, index) => (
                    <article
                      key={service.title}
                      className={`home-engineering__service ${index === 0 ? 'home-engineering__service--active' : ''}`}
                    >
                      <div className="home-engineering__service-icon">
                        <img src={service.icon} alt="" aria-hidden="true" />
                      </div>
                      <div>
                        <h3>{service.title}</h3>
                        <p>{service.copy}</p>
                      </div>
                    </article>
                  ))}

                  <div className="home-engineering__actions">
                    <Button
                      className="home-button home-button--light"
                      size="lg"
                      onClick={() => scrollToSection('#contact')}
                    >
                      Tell Us About Your Project
                    </Button>
                    <Button
                      className="home-button home-button--secondary home-engineering__button--wide"
                      variant="ghost"
                      size="lg"
                      onClick={() => scrollToSection('#contact')}
                    >
                      Download Our Capabilities Overview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-about-zubi" id="about">
          <div className="w-100">
            <div className="home-about-zubi__heading">
              <span className="home-about-zubi__eyebrow">About Zubi Technologies</span>
              <h2>Built for the roads, networks, and realities of Africa.</h2>
              <p>
                Zubi Technologies is a Lagos-based engineering company that builds hardware,
                software, and IoT systems designed to work where others fail. Our products operate
                across unreliable networks, survive power fluctuations, and deliver in conditions
                that most technology simply was not built for.
              </p>
              <p>
                We do not just write code. We engineer resilient systems that bridge physical
                assets and digital intelligence because Africa&apos;s infrastructure challenges demand
                solutions that work in the real world, not just in a demo.
              </p>
            </div>

            <div className="home-about-zubi__visual">
              <img src={integrationGraphic} alt="Zubi Technologies capability diagram" />
            </div>

            <div className="home-about-zubi__reasons-heading">
              <h2>Why companies and governments choose us</h2>
            </div>

            <div className="row g-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="col-12 col-md-4">
                  <article className="home-about-zubi__reason h-100">
                    <img src={reason.icon} alt="" aria-hidden="true" />
                    <h3>{reason.title}</h3>
                    <p>{reason.copy}</p>
                  </article>
                </div>
              ))}
            </div>

            <div className="home-about-zubi__actions">
              <Button
                className="home-button home-button--primary"
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Read Our Full Story
              </Button>
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="container">
            <div className="home-next-section">
              <div className="home-next-section__copy">
                <span className="home-next-section__eyebrow">
                  <span className="home-next-section__dot" aria-hidden="true" />
                  <span>What&apos;s Next</span>
                </span>
                <h2>We&apos;re Not Done.</h2>
                <p>
                  EVADE was our first answer. It won&apos;t be our last. We&apos;re currently
                  developing new products that will give drivers and fleet operators even more
                  control over their vehicles, their costs, and their safety. Stay close.
                </p>
                <Button
                  className="home-button home-next-section__button"
                  onClick={() => scrollToSection('#contact')}
                >
                  Join the Waitlist
                </Button>
              </div>

              <div className="home-roadmap-graphic home-next-section__graphic" aria-hidden="true">
                <img className="home-next-section__light" src={lightEffectGraphic} alt="" />
                <img src={roadmapGraphic} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-section--contact" id="contact">
          <div className="container">
            <div className="home-contact-layout">
              <div className="home-contact-copy">
                <span className="home-contact-copy__eyebrow">Contact Us</span>
                <h2>
                  Let&apos;s Build
                  <br />
                  Something That
                  <br />
                  Matters.
                </h2>
                <p>
                  Whether you&apos;re a startup, enterprise, or government agency tell us what
                  you&apos;re trying to solve. An engineer, not a salesperson, will respond within
                  24 hours.
                </p>

                <div className="home-contact-channels">
                  {contactChannels.map((channel) => (
                    <article key={channel.title} className="home-contact-channel">
                      <div className="home-contact-channel__icon">{channel.icon}</div>
                      <div className="home-contact-channel__body">
                        <h3>{channel.title}</h3>
                        <p>{channel.description}</p>
                        <a href={`mailto:${channel.email}`}>
                          {channel.email}
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="home-contact-form-shell">
                <form className="home-contact-form" onSubmit={handleContactSubmit}>
                  <div className="home-contact-form__grid">
                    <label className="home-contact-form__field">
                      <span>Full Name</span>
                      <input type="text" placeholder="Watchout" />
                    </label>

                    <label className="home-contact-form__field">
                      <span>Company / Organisation</span>
                      <input type="text" placeholder="Watchout Enterprise" />
                    </label>

                    <label className="home-contact-form__field">
                      <span>Work Email</span>
                      <input type="email" placeholder="watchout.support@gmail.com" />
                    </label>

                    <label className="home-contact-form__field">
                      <span>Phone Number</span>
                      <input type="tel" placeholder="+23481547845" />
                    </label>
                  </div>

                  <label className="home-contact-form__field home-contact-form__field--full">
                    <span>I&apos;m interested In</span>
                    <select defaultValue="">
                      <option value="" disabled>
                        Select Option
                      </option>
                      <option value="evade">EVADE Platform</option>
                      <option value="custom">Custom Engineering</option>
                      <option value="integration">System Integration</option>
                      <option value="analytics">Analytics & AI</option>
                    </select>
                  </label>

                  <label className="home-contact-form__field home-contact-form__field--full">
                    <span>Tell us about your project or challenge</span>
                    <textarea rows="6" placeholder="Message" />
                  </label>

                  <Button className="home-button home-contact-form__submit" size="lg" type="submit">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;
