import { Reveal } from '../component/ui';

const contactLinks = [
  {
    label: 'Email',
    value: 'support@zubitechnologies.com',
    href: 'mailto:support@zubitechnologies.com',
  },
  {
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: 'https://maps.google.com/?q=Lagos,Nigeria',
  },
  {
    label: 'Social',
    value: 'LinkedIn / Twitter/X',
    href: 'https://www.linkedin.com',
  },
];

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-page__layout">
          <Reveal as="div" className="contact-page__copy">
            <span className="contact-page__badge">Contact Us</span>
            <h1>
              Let&apos;s Build
              <br />
              Something That
              <br />
              Matters.
            </h1>
            <p className="contact-page__lead">
              Tell us what you&apos;re trying to solve. Whether it&apos;s deploying EVADE across your
              fleet, engineering a custom IoT system, or building software that can handle real-world
              pressure our team is ready.
            </p>

            <div className="contact-page__support">
              <p>
                Fill out the form and an engineer, not a salesperson, will respond within 24 hours.
              </p>

              <div className="contact-page__card">
                <div className="contact-page__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M8.5 14.5c1-1.4 2.1-2.1 3.5-2.1s2.5.7 3.5 2.1" />
                    <circle cx="9.25" cy="10" r="1.1" fill="currentColor" stroke="none" />
                    <circle cx="14.75" cy="10" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                </div>

                <div className="contact-page__info">
                  <h2>Contact Information</h2>
                  <p>For technical issues or help with your account.</p>

                  <div className="contact-page__links">
                    {contactLinks.map((item) => (
                      <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                        <span>{item.label}:</span> {item.value}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="contact-page__form-shell" variant="scale" delay={120}>
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__form-grid">
                <label className="contact-page__field">
                  <span>Full Name</span>
                  <input type="text" placeholder="Watchout" />
                </label>

                <label className="contact-page__field">
                  <span>Company / Organisation</span>
                  <input type="text" placeholder="Watchout Enterprise" />
                </label>

                <label className="contact-page__field">
                  <span>Work Email</span>
                  <input type="email" placeholder="watchout.support@gmail.com" />
                </label>

                <label className="contact-page__field">
                  <span>Phone Number</span>
                  <input type="tel" placeholder="+23481547845" />
                </label>
              </div>

              <label className="contact-page__field contact-page__field--full">
                <span>I&apos;m interested In</span>
                <select defaultValue="">
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="evade">EVADE Platform</option>
                  <option value="custom">Custom IoT Engineering</option>
                  <option value="software">Software Development</option>
                  <option value="integration">System Integration</option>
                </select>
              </label>

              <label className="contact-page__field contact-page__field--full">
                <span>Project Description / Challenge</span>
                <textarea rows="7" placeholder="Message" />
              </label>

              <label className="contact-page__field contact-page__field--full">
                <span>How did you hear about us?</span>
                <select defaultValue="">
                  <option value="" disabled>
                    Select Option
                  </option>
                  <option value="referral">Referral</option>
                  <option value="social">Social Media</option>
                  <option value="search">Search</option>
                  <option value="event">Event</option>
                </select>
              </label>

              <button className="contact-page__submit" type="submit">
                Submit Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
