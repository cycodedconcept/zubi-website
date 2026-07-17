import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../component/fixed/Navbar';
import Footer from '../component/fixed/Footer';

const SiteLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isSubPage = !isHomePage;
  const isServicesPage = location.pathname === '/company/services';
  const isAboutPage = location.pathname === '/company/about-us';
  const isContactPage = location.pathname === '/company/contact';

  return (
    <div
      className={`app-shell ${isHomePage ? 'app-shell--home' : ''} ${
        isSubPage ? 'app-shell--subpage' : ''
      } ${
        isServicesPage ? 'app-shell--services' : ''
      } ${
        isAboutPage ? 'app-shell--about' : ''
      } ${
        isContactPage ? 'app-shell--contact' : ''
      }`}
    >
      <div className="app-shell__nav">
        <Navbar />
      </div>
      <main className="app-shell__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
