import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FullCycleAccounting from './pages/services/FullCycleAccounting';
import TaxFiling from './pages/services/TaxFiling';
import Bookkeeping from './pages/services/Bookkeeping';
import FinancialReporting from './pages/services/FinancialReporting';
import FractionalCFO from './pages/services/FractionalCFO';
import PayrollManagement from './pages/services/PayrollManagement';
import TaxAdvisory from './pages/services/TaxAdvisory';
import Budgeting from './pages/services/Budgeting';
import Incorporation from './pages/business/Incorporation';
import FinanceEstate from './pages/business/FinanceEstate';
import BusinessPlans from './pages/business/BusinessPlans';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/full-cycle" element={<FullCycleAccounting />} />
            <Route path="/services/tax-filing" element={<TaxFiling />} />
            <Route path="/services/bookkeeping" element={<Bookkeeping />} />
            <Route path="/services/financial-reporting" element={<FinancialReporting />} />
            <Route path="/services/fractional-cfo" element={<FractionalCFO />} />
            <Route path="/services/payroll" element={<PayrollManagement />} />
            <Route path="/services/tax-advisory" element={<TaxAdvisory />} />
            <Route path="/services/budgeting" element={<Budgeting />} />
            <Route path="/business/incorporation" element={<Incorporation />} />
            <Route path="/business/finance-estate" element={<FinanceEstate />} />
            <Route path="/business/plans" element={<BusinessPlans />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
