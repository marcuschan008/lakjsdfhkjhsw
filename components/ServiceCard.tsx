import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-peach-200 transition-all duration-300 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">{service.title}</h3>
        <p className="text-peach-600 font-medium italic mb-2">{service.description}</p>
        <div className="w-12 h-1 bg-mint-200 rounded-full"></div>
      </div>
      
      <div className="flex-grow">
        <h4 className="font-bold text-sm text-navy-800 uppercase tracking-wide mb-3">What's Included:</h4>
        <ul className="space-y-2 mb-6">
          {service.inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start text-gray-600 text-sm">
              <svg className="w-5 h-5 text-mint-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm text-gray-500 font-medium">
            <span className="block text-xs uppercase tracking-wider text-gray-400">Duration</span>
            {service.duration}
        </div>
        <div className="text-right">
            <span className="block text-xs uppercase tracking-wider text-gray-400">From</span>
            <span className="text-2xl font-heading font-bold text-navy-900">{service.priceStart}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;