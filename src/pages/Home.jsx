import React from 'react';
import './Home.css';
import { Button, Reveal } from '../component/ui';

import heroIllustration from '../assets/Illustration (4).png';
import lightBackground from '../assets/Light.png';
import lightEffectGraphic from '../assets/Light Effect.png';
import integrationGraphic from '../assets/Integration.png';
import roadmapGraphic from '../assets/Chart.png';
import layersGraphic from '../assets/Group 1.png';
import softwareGraphic from '../assets/Image (4).png';
import serviceGraphic from '../assets/Illustrations.png';
import evadeLogo from '../assets/Evade white 1.png';
// import globeGraphic from '../assets/Globe.png';
import notionLogo from '../assets/notion.png';
import dropboxLogo from '../assets/dropbox.png';
import microsoftLogo from '../assets/microshop.png';
import evernoteLogo from '../assets/evernote.png';
import slackLogo from '../assets/slack.png';
import framerLogo from '../assets/framer.png';
import spotifyLogo from '../assets/spotify.png';

const SvgIcon = ({ children }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const DetectIcon = () => (
  <SvgIcon>
    <path d="M12 28.5 15.4 19a3.2 3.2 0 0 1 3-2.1h11.2a3.2 3.2 0 0 1 3 2.1l3.4 9.5" />
    <path d="M14 28.5h20v5.2a2.3 2.3 0 0 1-2.3 2.3h-1.2a2.3 2.3 0 0 1-2.3-2.3v-.8H19.8v.8a2.3 2.3 0 0 1-2.3 2.3h-1.2A2.3 2.3 0 0 1 14 33.7Z" />
    <circle cx="19" cy="28.5" r="2.2" />
    <circle cx="29" cy="28.5" r="2.2" />
    <path d="M24 9v7" />
    <path d="m20.5 12.5 3.5-3.5 3.5 3.5" />
  </SvgIcon>
);

const RouteIcon = () => (
  <SvgIcon>
    <path d="M24 10.2a7.8 7.8 0 0 1 7.8 7.8c0 5.9-7.8 13.5-7.8 13.5S16.2 23.9 16.2 18a7.8 7.8 0 0 1 7.8-7.8Z" />
    <circle cx="24" cy="18" r="2.4" />
    <path d="M33.8 15.4c3.1 1.3 5.3 4.2 5.8 7.8" />
    <path d="M8.5 23.2c.5-3.7 2.9-6.8 6.2-8.1" />
    <path d="M34.5 33.5h5" />
    <path d="M8.5 33.5h7" />
  </SvgIcon>
);

const TransmitIcon = () => (
  <SvgIcon>
    <path d="M14.5 31.5A7.5 7.5 0 0 1 22 24h4a7.5 7.5 0 0 1 7.5 7.5v2.5h-19Z" />
    <path d="M18.5 24a5.5 5.5 0 1 1 11 0" />
    <path d="M24 10v7" />
    <path d="M16.8 14.2A10.5 10.5 0 0 1 24 11a10.5 10.5 0 0 1 7.2 3.2" />
    <path d="M12.7 10.2A16 16 0 0 1 24 5.8a16 16 0 0 1 11.3 4.4" />
    <circle cx="24" cy="34" r="2.6" fill="currentColor" stroke="none" />
  </SvgIcon>
);

const ResolveIcon = () => (
  <SvgIcon>
    <path d="M24 8.5 34.8 13v8.2c0 7.1-4.3 13.5-10.8 16.3C17.5 34.7 13.2 28.3 13.2 21.2V13Z" />
    <path d="m19.3 23.4 3.2 3.2 6.8-7.4" />
  </SvgIcon>
);

const EmbeddedSystemsIcon = () => (
  <SvgIcon>
    <rect x="15" y="15" width="18" height="18" rx="4" />
    <path d="M24 9v6" />
    <path d="M24 33v6" />
    <path d="M9 24h6" />
    <path d="M33 24h6" />
    <path d="M14 14 10.5 10.5" />
    <path d="M34 14 37.5 10.5" />
    <path d="M14 34 10.5 37.5" />
    <path d="M34 34 37.5 37.5" />
    <path d="M20 20h8v8h-8z" />
  </SvgIcon>
);

const CloudArchitectureIcon = () => (
  <SvgIcon>
    <path d="M17.4 32.5h14.8a5.3 5.3 0 1 0-.8-10.5A8.3 8.3 0 0 0 16 20.6a5.9 5.9 0 0 0 1.4 11.9Z" />
    <path d="M24 19.2v12" />
    <path d="m20.5 23 3.5-3.8 3.5 3.8" />
    <path d="M18.5 37h11" />
  </SvgIcon>
);

const AnalyticsInsightIcon = () => (
  <SvgIcon>
    <path d="M12.5 34.5h23" />
    <path d="M16 29.5v-8" />
    <path d="M23.5 29.5V17" />
    <path d="M31 29.5v-14" />
    <path d="m14 15.5 5.8-3.5 4.8 3 8.4-5" />
    <circle cx="14" cy="15.5" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="19.8" cy="12" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="24.6" cy="15" r="1.8" fill="currentColor" stroke="none" />
    <circle cx="33" cy="10" r="1.8" fill="currentColor" stroke="none" />
  </SvgIcon>
);

const AutomationGridIcon = () => (
  <SvgIcon>
    <rect x="10.5" y="11.5" width="10" height="10" rx="2.6" />
    <rect x="27.5" y="11.5" width="10" height="10" rx="2.6" />
    <rect x="10.5" y="28.5" width="10" height="10" rx="2.6" />
    <rect x="27.5" y="28.5" width="10" height="10" rx="2.6" />
    <path d="M20.5 16.5h7" />
    <path d="M24 21.5v7" />
  </SvgIcon>
);

const ResilienceIcon = () => (
  <SvgIcon>
    <path d="M24 8.5 34.8 13v8.2c0 7.1-4.3 13.5-10.8 16.3C17.5 34.7 13.2 28.3 13.2 21.2V13Z" />
    <path d="M18.8 24.5c1.3-2.8 3-4.2 5.2-4.2s3.9 1.4 5.2 4.2" />
    <path d="M24 16.5v3.8" />
  </SvgIcon>
);

const StackIcon = () => (
  <SvgIcon>
    <path d="m24 10 12 6.5-12 6.5-12-6.5Z" />
    <path d="m12 24 12 6.5L36 24" />
    <path d="m12 31.5 12 6.5 12-6.5" />
  </SvgIcon>
);

const SecurityLockIcon = () => (
  <SvgIcon>
    <rect x="14.5" y="21" width="19" height="14" rx="3.2" />
    <path d="M18.8 21v-3.2a5.2 5.2 0 0 1 10.4 0V21" />
    <circle cx="24" cy="28" r="2.2" />
    <path d="M24 30.2v2.8" />
  </SvgIcon>
);

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
    Icon: DetectIcon,
    title: 'Detect',
    copy:
      'Vehicle-mounted sensors identify collisions, rollovers, or submersion events in milliseconds. No human input required. No delays.',
    side: 'left',
  },
  {
    Icon: RouteIcon,
    title: '2-way communication & Route',
    copy:
      'Partner agencies receive alerts through EVADE dashboard APIs, validate incidents, and route the nearest responders with full context.',
    side: 'right',
  },
  {
    Icon: TransmitIcon,
    title: 'Transmit',
    copy:
      'Encrypted crash data, GPS coordinates, impact severity, and vehicle status are transmitted instantly through secure cloud infrastructure.',
    side: 'left',
  },
  {
    Icon: ResolveIcon,
    title: 'Resolve',
    copy:
      'Responders arrive informed. Insurers receive tamper-proof records. Fleet teams get transparent incident data without guesswork.',
    side: 'right',
  },
];

const featureTabs = ['Fleet', 'Applications', 'Analytics'];

const engineeringServices = [
  {
    Icon: EmbeddedSystemsIcon,
    title: 'IoT & Embedded Systems',
    copy:
      'We transform physical environments into connected, intelligent ecosystems from custom device prototyping and PCB design to sensor integration and edge computing.',
  },
  {
    Icon: CloudArchitectureIcon,
    title: 'Software & Cloud Architecture',
    copy:
      'We build secure, high-availability software across web, mobile, SaaS, and API infrastructure designed to handle real-world data loads and scale under pressure.',
  },
  {
    Icon: AnalyticsInsightIcon,
    title: 'Data, AI & Predictive Analytics',
    copy:
      'We turn raw operational data into foresight with machine learning systems, business intelligence dashboards, and predictive models built around practical outcomes.',
  },
  {
    Icon: AutomationGridIcon,
    title: 'System Integration & Automation',
    copy:
      'We engineer intelligent connectivity for complex operations including industrial automation, smart fleet management, smart city infrastructure, and process optimisation.',
  },
];

const reasons = [
  {
    Icon: ResilienceIcon,
    title: 'Resilient by Design',
    copy:
      'Our systems account for network drops, power loss, and infrastructure constraints from day one. This is not an afterthought, it is our engineering principle.',
  },
  {
    Icon: StackIcon,
    title: 'Hardware Meets Software',
    copy:
      'We handle both sides of the stack. From the sensor on the vehicle to the dashboard on your screen, there are no integration gaps.',
  },
  {
    Icon: SecurityLockIcon,
    title: 'Security-First',
    copy:
      'Built to protect sensitive data and critical infrastructure. Every system we deploy is designed with security as a foundational layer.',
  },
];

const evadeAlertBadges = [
  { label: 'Crash detected', tone: 'danger', Icon: DetectIcon },
  { label: 'GPS locked', tone: 'info', Icon: TransmitIcon },
  { label: 'EMS routed', tone: 'success', Icon: ResolveIcon },
];

const evadeAlertMetrics = [
  { label: 'Impact verified', value: '0.8s' },
  { label: 'Responder ETA', value: '6 min' },
  { label: 'Cloud sync', value: 'Live' },
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
            <Reveal as="div" className="home-hero__content">
              <span className="home-hero__badge">
                Purpose-Built in Lagos. Engineered for The Real World.
              </span>
              <h1>When Seconds Decide<br /> Everything, the System Shouldn&apos;t<br /> Rely on a Phone Call</h1>
              <p>
                Zubi Technologies engineers intelligent IoT systems and software that protect lives on
                the road and give<br /> enterprises the infrastructure to operate smarter. Our flagship
                product, EVADE, is redefining emergency response<br /> and it&apos;s just the beginning.
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
            </Reveal>

            <Reveal as="div" className="home-hero__visual" variant="scale" delay={120}>
              <img
                src={heroIllustration}
                alt="EVADE smart vehicle safety platform interface and connected response dashboard"
                className="w-100"
              />
            </Reveal>
          </div>
        </section>
      </div>

      <section className="home-partners" aria-label="Trusted companies">
        <div className="container">
          <Reveal as="div" className="home-partners__inner">
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
          </Reveal>
        </div>
      </section>

      <section className="home-evade-suite" id="evade">
        <div className="home-evade-suite__beam home-evade-suite__beam--one" aria-hidden="true" />
        <div className="home-evade-suite__beam home-evade-suite__beam--two" aria-hidden="true" />

        <div className="container">
          <div className="home-evade-suite__intro">
            <Reveal as="div" className="home-evade-suite__intro-copy">
              <img className="home-evade-logo" src={evadeLogo} alt="EVADE logo" />
              <span className="home-evade-suite__eyebrow">Introducing EVADE</span>
              <h2>Intelligent Emergency Coordination. Automatic. Verified. Instant.</h2>
            </Reveal>

            <Reveal as="div" className="home-evade-suite__alert-card" variant="scale" delay={140}>
              {/* TODO: Replace this temporary EVADE illustration with a final brand-approved emergency-response render when one is available. */}
              <div className="home-evade-suite__alert-stage">
                <img
                  src={serviceGraphic}
                  alt="EVADE smart vehicle safety and emergency response system illustration"
                  className="home-evade-suite__alert-image"
                />

                <div className="home-evade-suite__alert-badges">
                  {evadeAlertBadges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`home-evade-suite__alert-badge home-evade-suite__alert-badge--${badge.tone}`}
                    >
                      <badge.Icon />
                      <span>{badge.label}</span>
                    </span>
                  ))}
                </div>

                <span className="home-evade-suite__alert-ring home-evade-suite__alert-ring--one" aria-hidden="true" />
                <span className="home-evade-suite__alert-ring home-evade-suite__alert-ring--two" aria-hidden="true" />
              </div>

              <div className="home-evade-suite__alert-summary">
                <span className="home-evade-suite__alert-label">Connected rescue workflow</span>
                <div className="home-evade-suite__alert-metrics">
                  {evadeAlertMetrics.map((metric) => (
                    <div key={metric.label} className="home-evade-suite__alert-metric">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="home-evade-suite__story-grid">
            <Reveal as="article" className="home-evade-suite__story-card" delay={60}>
              <h3>The Problem</h3>
              <p>
                Across Africa, a road accident triggers a chain of phone calls, confusion, and
                delays. Ambulances arrive late or not at all. Crash data is lost or disputed.
                Insurers battle over claims. Families wait in the dark.
              </p>
            </Reveal>

            <Reveal as="article" className="home-evade-suite__story-card" delay={140}>
              <h3>Our Mission</h3>
              <p>
                EVADE replaces that broken chain with an automated, sensor-verified, real-time
                system. The moment a crash happens, EVADE detects it, transmits the data, and
                routes emergency responders before anyone picks up a phone.
              </p>
            </Reveal>
          </div>

          <Reveal as="div" className="home-evade-suite__heading home-evade-suite__heading--centered" delay={60}>
            <h2>How It Works</h2>
          </Reveal>

          <div className="home-evade-suite__workflow">
            <div className="home-evade-suite__workflow-column">
              {workflowSteps
                .filter((step) => step.side === 'left')
                .map((step, index) => (
                  <Reveal
                    key={step.title}
                    as="article"
                    className="home-evade-suite__step"
                    delay={80 + index * 120}
                  >
                    <span className="home-evade-suite__step-icon" aria-hidden="true">
                      <step.Icon />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </Reveal>
                ))}
            </div>

            <Reveal as="div" className="home-evade-suite__globe-stage" aria-hidden="true" variant="scale" delay={180}>
              <img src={layersGraphic} alt="" className="home-evade-suite__globe-shell" />
              {/* <img src={globeGraphic} alt="" className="home-evade-suite__globe" /> */}
            </Reveal>

            <div className="home-evade-suite__workflow-column home-evade-suite__workflow-column--right">
              {workflowSteps
                .filter((step) => step.side === 'right')
                .map((step, index) => (
                  <Reveal
                    key={step.title}
                    as="article"
                    className="home-evade-suite__step"
                    delay={140 + index * 120}
                  >
                    <span className="home-evade-suite__step-icon" aria-hidden="true">
                      <step.Icon />
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </Reveal>
                ))}
            </div>
          </div>

          <Reveal
            as="div"
            className="home-evade-suite__heading home-evade-suite__heading--serve"
            id="services"
            delay={80}
          >
            <span className="home-evade-suite__eyebrow">Features</span>
            <h2>
              Core features that secure, simplify,
              <br />
              and scale your stack
            </h2>
            <p>Real-world solutions delivering measurable business impact</p>
          </Reveal>

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
            <Reveal as="div" className="home-evade-suite__serve-copy">
              <span className="home-evade-suite__serve-icon" aria-hidden="true">
                <ResilienceIcon />
              </span>
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
            </Reveal>

            <Reveal as="div" className="home-evade-suite__serve-visual" variant="scale" delay={160}>
              <img
                src={serviceGraphic}
                alt="Fleet operator safety and response platform illustration"
              />
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-engineering">
            <div className="home-engineering__top">
              <Reveal as="div" className="home-engineering__headline">
                <span className="home-engineering__eyebrow">Custom Engineering Services</span>
                <h2>We Built EVADE. Now <br />Imagine What We Can <br />Build for You.</h2>
              </Reveal>

              <Reveal as="div" className="home-engineering__intro" variant="right" delay={100}>
                <p>
                  The engineering behind EVADE, the same hardware expertise, cloud architecture,
                  and real-world resilience, is available to enterprises and governments with
                  complex technical challenges. We don&apos;t just consult. We design, build, and deploy.
                </p>
              </Reveal>
            </div>

            <div className="home-engineering__body">
              <Reveal as="div" className="home-engineering__visual" aria-hidden="true" variant="scale">
                <img src={softwareGraphic} alt="" className="home-engineering__visual-image" />
                <div className="home-engineering__detect-echo">
                  <span className="home-engineering__detect-wave home-engineering__detect-wave--one" />
                  <span className="home-engineering__detect-wave home-engineering__detect-wave--two" />
                  <span className="home-engineering__detect-wave home-engineering__detect-wave--three" />
                  <span className="home-engineering__detect-core" />
                </div>
              </Reveal>

              <div className="home-engineering__services">
                {engineeringServices.map((service, index) => (
                  <Reveal
                    key={service.title}
                    as="article"
                    className={`home-engineering__service ${index === 0 ? 'home-engineering__service--active' : ''}`}
                    delay={60 + index * 100}
                  >
                    <span className="home-engineering__service-icon" aria-hidden="true">
                      <service.Icon />
                    </span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.copy}</p>
                    </div>
                  </Reveal>
                ))}

                <Reveal as="div" className="home-engineering__actions" delay={180}>
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
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about-zubi" id="about">
        <div className="w-100">
          <Reveal as="div" className="home-about-zubi__heading">
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
          </Reveal>

          <Reveal as="div" className="home-about-zubi__visual" variant="scale" delay={120}>
            <img src={integrationGraphic} alt="Zubi Technologies systems and integration overview" />
          </Reveal>

          <Reveal as="div" className="home-about-zubi__reasons-heading" delay={80}>
            <h2>Why companies and governments choose us</h2>
          </Reveal>

          <div className="row g-4">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="col-12 col-md-4">
                <Reveal
                  as="article"
                  className="home-about-zubi__reason h-100"
                  delay={80 + index * 100}
                >
                  <span className="home-about-zubi__reason-icon" aria-hidden="true">
                    <reason.Icon />
                  </span>
                  <h3>{reason.title}</h3>
                  <p>{reason.copy}</p>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal as="div" className="home-about-zubi__actions" delay={160}>
            <Button
              className="home-button home-button--primary"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Read Our Full Story
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-next-section">
            <Reveal as="div" className="home-next-section__copy">
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
            </Reveal>

            <Reveal as="div" className="home-roadmap-graphic home-next-section__graphic" aria-hidden="true" variant="scale" delay={140}>
              <img className="home-next-section__light" src={lightEffectGraphic} alt="" />
              <img src={roadmapGraphic} alt="" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-section home-section--contact" id="contact">
        <div className="container">
          <div className="home-contact-layout">
            <Reveal as="div" className="home-contact-copy">
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
            </Reveal>

            <Reveal as="div" className="home-contact-form-shell" variant="scale" delay={120}>
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
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
