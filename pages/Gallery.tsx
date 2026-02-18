import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { BUSINESS_INFO } from '../constants';

const Gallery: React.FC = () => {
  // Placeholder images - in production these would be real results
  const images = [
      "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Fluffy dog
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Dog bathing
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Cat grooming
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Golden retriever
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Cute puppy
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", // Dog after groom
  ];

  return (
    <>
      <div className="bg-white pt-32 pb-10 text-center">
         <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Happy Clients</h1>
         <p className="text-gray-600">Fresh cuts, wagging tails, and purr-fect finishes.</p>
      </div>

      <Section>
         {/* Masonry-ish Grid */}
         <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, idx) => (
                <div key={idx} className="break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-gray-100">
                    <img src={src} alt="Groomed pet" className="w-full h-auto" loading="lazy" />
                </div>
            ))}
         </div>
      </Section>

      {/* Before & After Placeholder */}
      <Section bg="mint">
         <h2 className="font-heading text-3xl font-bold text-center text-navy-900 mb-10">Transformations</h2>
         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex gap-2 mb-3">
                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Before</span>
                   <span className="bg-peach-100 text-peach-700 px-3 py-1 rounded-full text-xs font-bold uppercase">After</span>
                </div>
                <div className="flex gap-4 h-64">
                   <div className="w-1/2 bg-gray-300 rounded-lg overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8a9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Scruffy dog" className="absolute inset-0 w-full h-full object-cover"/>
                   </div>
                   <div className="w-1/2 bg-gray-300 rounded-lg overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1591852656372-74c0e633c706?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Groomed dog" className="absolute inset-0 w-full h-full object-cover"/>
                   </div>
                </div>
                <p className="mt-4 text-center font-bold text-navy-800">Molly the Cavoodle</p>
                <p className="text-center text-sm text-gray-500">Full Groom & Teddy Bear Cut</p>
            </div>
            
            {/* Second Card (Placeholder Logic) */}
            <div className="bg-white p-4 rounded-2xl shadow-sm">
                <div className="flex gap-2 mb-3">
                   <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Before</span>
                   <span className="bg-peach-100 text-peach-700 px-3 py-1 rounded-full text-xs font-bold uppercase">After</span>
                </div>
                <div className="flex gap-4 h-64">
                   <div className="w-1/2 bg-gray-300 rounded-lg overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Fluffy dog before" className="absolute inset-0 w-full h-full object-cover"/>
                   </div>
                   <div className="w-1/2 bg-gray-300 rounded-lg overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" alt="Fluffy dog after" className="absolute inset-0 w-full h-full object-cover"/>
                   </div>
                </div>
                <p className="mt-4 text-center font-bold text-navy-800">Charlie the Samoyed</p>
                <p className="text-center text-sm text-gray-500">De-shedding & Tidy Up</p>
            </div>
         </div>
      </Section>

      {/* Instagram CTA */}
      <Section>
         <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-navy-900 mb-6">Follow us on Instagram</h2>
            <p className="text-gray-600 mb-8">For daily doses of cuteness!</p>
            <Button to={BUSINESS_INFO.instagram} external variant="outline">@superb.doggrooming</Button>
         </div>
      </Section>
    </>
  );
};

export default Gallery;