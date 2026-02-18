import React from 'react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="bg-mint-100/50 pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
           <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Services</h1>
           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
             From bubble baths to breed-specific styling, we offer a full range of grooming services tailored to your pet's needs.
           </p>
        </div>
      </div>

      {/* Service List */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {SERVICES.map(service => (
             <ServiceCard key={service.id} service={service} />
           ))}
        </div>
        <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-6">
                *Prices are a guide only and may vary based on breed size, coat condition, and pet behavior. 
                Exact quotes provided upon arrival.
            </p>
            <Button to="/contact">Book an Appointment</Button>
        </div>
      </Section>

      {/* Info Grid */}
      <Section bg="cream">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Coat Types */}
            <div>
               <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">Coat Types We Handle</h3>
               <ul className="space-y-3">
                  {['Double Coats (Huskies, Shepherds)', 'Curly Coats (Poodles, Oodles)', 'Wire Coats (Terriers)', 'Silky Coats (Spaniels, Yorkies)', 'Smooth/Short Coats'].map((type, i) => (
                      <li key={i} className="flex items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                         <div className="w-2 h-2 bg-peach-500 rounded-full mr-3"></div>
                         {type}
                      </li>
                  ))}
               </ul>
            </div>

            {/* Special Care */}
            <div>
               <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">Special Care</h3>
               <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-peach-400">
                  <h4 className="font-bold text-navy-800 mb-2">Senior & Anxious Pets</h4>
                  <p className="text-gray-600 mb-4">
                     We understand that some pets need a little extra patience. Our salon is designed to be calm, and we are happy to take breaks during the groom to ensure your pet remains stress-free.
                  </p>
                  <h4 className="font-bold text-navy-800 mb-2">Puppy First Grooms</h4>
                  <p className="text-gray-600">
                     Building a positive association with grooming is vital. We focus on fun, treats, and short sessions for puppies under 6 months.
                  </p>
               </div>
            </div>
         </div>
      </Section>

      {/* Checklist */}
      <Section>
         <div className="bg-navy-800 rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="md:flex">
               <div className="md:w-1/2 p-10">
                  <h2 className="font-heading text-3xl font-bold text-peach-400 mb-6">Before Your Appointment</h2>
                  <div className="space-y-6">
                     <div>
                        <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                           <svg className="w-5 h-5 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           What to Bring
                        </h4>
                        <p className="text-gray-300 text-sm ml-7">
                           Just your pet on a secure lead or in a carrier. If you have a specific style in mind, please bring a reference photo!
                        </p>
                     </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                           <svg className="w-5 h-5 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           Arrival
                        </h4>
                        <p className="text-gray-300 text-sm ml-7">
                           Please arrive 5-10 minutes early to discuss your pet's needs. Ensure your dog has had a chance to go to the toilet before entering.
                        </p>
                     </div>
                     <div>
                        <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                            <svg className="w-5 h-5 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Health Check
                        </h4>
                        <p className="text-gray-300 text-sm ml-7">
                           Please inform us of any medical conditions, lumps, bumps, or recent surgeries. Vaccinations must be up to date.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 bg-gray-300 relative min-h-[300px]">
                   <img 
                    src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Dog waiting happily" 
                    className="absolute inset-0 w-full h-full object-cover"
                   />
               </div>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Services;