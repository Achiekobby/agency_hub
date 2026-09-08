import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LocalDelivery from './pages/LocalDelivery';
import BusinessDelivery from './pages/BusinessDelivery';
import InternationalShipping from './pages/InternationalShipping';
import AgencyBanking from './pages/AgencyBanking';
import ServiceArea from './pages/ServiceArea';
import ProhibitedItems from './pages/ProhibitedItems';
import Claims from './pages/Claims';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/local-delivery" element={<LocalDelivery />} />
        <Route path="/business-delivery" element={<BusinessDelivery />} />
        <Route path="/international-shipping" element={<InternationalShipping />} />
        <Route path="/agency-banking" element={<AgencyBanking />} />
        <Route path="/service-area" element={<ServiceArea />} />
        <Route path="/prohibited-items" element={<ProhibitedItems />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
