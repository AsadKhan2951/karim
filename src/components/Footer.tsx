import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/0b2bda0b0cd3691689a4f50e9f2a428b9a6e53e5.png';

export default function Footer() {
  return (
    <footer className="bg-[#1a1f5c] text-gray-300 mb-20 lg:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Karim Accounting" className="h-24 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400">
              Professional accounting services tailored to your needs. Trust, expertise, and results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/full-cycle" className="hover:text-white transition-colors">
                  Full Cycle Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/tax-filing" className="hover:text-white transition-colors">
                  Tax Filing
                </Link>
              </li>
              <li>
                <Link to="/services/bookkeeping" className="hover:text-white transition-colors">
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services/financial-reporting" className="hover:text-white transition-colors">
                  Financial Reporting
                </Link>
              </li>
              <li>
                <Link to="/services/fractional-cfo" className="hover:text-white transition-colors">
                  Fractional CFO
                </Link>
              </li>
              <li>
                <Link to="/services/payroll" className="hover:text-white transition-colors">
                  Payroll Management
                </Link>
              </li>
              <li>
                <Link to="/services/tax-advisory" className="hover:text-white transition-colors">
                  Tax Advisory
                </Link>
              </li>
              <li>
                <Link to="/services/budgeting" className="hover:text-white transition-colors">
                  Budgeting & Forecasting
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Contact */}
          <div>
            <h3 className="text-white mb-4">Business</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to="/business/incorporation" className="hover:text-white transition-colors">
                  Incorporation
                </Link>
              </li>
              <li>
                <Link to="/business/finance-estate" className="hover:text-white transition-colors">
                  Finance & Estate Planning
                </Link>
              </li>
              <li>
                <Link to="/business/plans" className="hover:text-white transition-colors">
                  Business Plans
                </Link>
              </li>
            </ul>

            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="tel:9056077778" className="hover:text-white transition-colors">
                  (905) 607-7778
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@karimaccounting.ca" className="hover:text-white transition-colors">
                  info@karimaccounting.ca
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span>25-2155 Dunwin Drive,<br />Mississauga, ON, L5L 4M1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a3570] mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Karim Accounting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
