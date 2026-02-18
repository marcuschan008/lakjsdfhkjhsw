import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 rounded-t-3xl mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold mb-4 text-peach-400">{BUSINESS_INFO.name}</h2>
            <p className="text-gray-300 mb-6 max-w-sm">
              Professional, gentle, and caring grooming services for dogs and cats. 
              Making your furry friends look and feel superb.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-800 rounded-full hover:bg-peach-500 transition-colors">
                 <span className="sr-only">Facebook</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-navy-800 rounded-full hover:bg-peach-500 transition-colors">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
             <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
             <ul className="space-y-3">
               {NAV_ITEMS.map(item => (
                 <li key={item.path}>
                   <Link to={item.path} className="text-gray-300 hover:text-peach-400 transition-colors">
                     {item.label}
                   </Link>
                 </li>
               ))}
               <li>
                 <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-peach-400 transition-colors">
                   Find us on Google Maps
                 </a>
               </li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-peach-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white">{BUSINESS_INFO.phoneDisplay}</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-peach-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>{BUSINESS_INFO.address}<br/><span className="text-sm opacity-75">{BUSINESS_INFO.serviceArea}</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;