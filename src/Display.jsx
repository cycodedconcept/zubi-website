import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import InfoPage from './pages/InfoPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import NotFound from './pages/NotFound';
import { marketingPages } from './data/siteMap';

const Display = () => {
  const infoPages = marketingPages.filter(
    (page) => !['/company/contact', '/company/about-us', '/company/services'].includes(page.path),
  );

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/company/services" element={<ServicesPage />} />
        <Route path="/company/about-us" element={<AboutPage />} />
        <Route path="/company/contact" element={<ContactPage />} />
        {infoPages.map((page) => (
          <Route key={page.path} path={page.path} element={<InfoPage {...page} />} />
        ))}
      </Route>

      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Display;
