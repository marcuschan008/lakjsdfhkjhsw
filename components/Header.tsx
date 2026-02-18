import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-cream-50 py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-2 group">
           {/* Simple SVG Paw Icon Logo */}
           <div className="bg-peach-100 p-2 rounded-xl group-hover:bg-peach-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-peach-600" viewBox="0 0 24 24" fill="currentColor">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
               {/* Just a generic abstract shape for logo placeholder if pure paw is preferred */}
               <path d="M9 13.5c0 .83-.67 1.5-1.5 1.5S6 14.33 6 13.5 6.67 12 7.5 12s1.5.67 1.5 1.5zm5 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4-4.5c0 .83-.67 1.5-1.5 1.5S15 9.83 15 9s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-4 7c0 .83-.67 1.5-1.5 1.5S11 16.83 11 16s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" opacity=".3"/> 
            </svg>
           </div>
           <div>
             <h1 className="font-heading font-bold text-2xl text-navy-900 leading-none">Superb</h1>
             <p className="font-body text-xs text-navy-800 tracking-wider uppercase">Dog Grooming</p>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`font-medium text-lg transition-colors hover:text-peach-500 ${
                location.pathname === item.path ? 'text-peach-600 font-semibold' : 'text-navy-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 ml-4">
             <a 
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className="hidden lg:inline-flex items-center justify-center px-4 py-2 border-2 border-navy-800 text-navy-800 font-semibold rounded-full hover:bg-navy-800 hover:text-white transition-colors"
             >
                Call Now
             </a>
             <Link 
               to="/contact" 
               className="inline-flex items-center justify-center px-4 py-2 bg-peach-500 text-white font-semibold rounded-full hover:bg-peach-600 shadow-md hover:shadow-lg transition-all"
             >
               Book / Enquire
             </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-navy-900 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-xl font-medium ${location.pathname === item.path ? 'text-peach-600' : 'text-navy-800'}`}
            >
              {item.label}
            </Link>
          ))}
          <hr className="border-gray-100 my-2"/>
          <a 
            href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            className="w-full text-center py-3 border-2 border-navy-800 rounded-xl font-semibold text-navy-800"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <Link 
            to="/contact" 
            className="w-full text-center py-3 bg-peach-500 text-white rounded-xl font-semibold shadow-md"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;