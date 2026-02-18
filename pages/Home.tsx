import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { BUSINESS_INFO, PROCESS_STEPS, REVIEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mint-100/30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 bg-peach-100 text-peach-700 font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                Award-Winning Care in Wheelers Hill
              </span>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl text-navy-900 leading-tight mb-6">
                Gentle Grooming for <span className="text-peach-500">Happy</span> Pets.
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Professional, stress-free grooming for dogs and cats. We treat your furry family member with patience, kindness, and expert care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button to="/contact" variant="primary">Book Appointment</Button>
                <Button to="/services" variant="outline">View Services</Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                            <img src={`https://picsum.photos/100/100?random=${i}`} alt="Happy client" className="w-full h-full object-cover"/>
                        </div>
                    ))}
                 </div>
                 <div className="text-sm font-semibold text-navy-800">
                    <span className="block">{BUSINESS_INFO.rating} Stars on Google</span>
                    <span className="text-gray-500 font-normal">{BUSINESS_INFO.reviewCount} Happy Clients</span>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
                <div className="absolute inset-0 bg-peach-200 rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* Main Hero Image - Cute dog being groomed or happy after groom */}
                  <img 
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Happy fluffy dog at Superb Dog Grooming" 
                    className="w-full h-auto object-cover"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro / Value Prop */}
      <Section bg="white">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">More Than Just a Haircut</h2>
           <p className="text-lg text-gray-600 mb-10 leading-relaxed">
             At {BUSINESS_INFO.name}, we believe grooming should be a positive experience. 
             We take the time to build trust with your pet, ensuring they feel safe, comfortable, and loved throughout their spa day.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-cream-50 rounded-2xl">
                 <div className="w-12 h-12 bg-mint-100 text-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">Stress-Free</h3>
                 <p className="text-gray-500 text-sm">Quiet environment and gentle handling techniques for anxious pets.</p>
              </div>
              <div className="p-6 bg-cream-50 rounded-2xl">
                 <div className="w-12 h-12 bg-peach-100 text-peach-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">Quality Products</h3>
                 <p className="text-gray-500 text-sm">Natural, hypoallergenic shampoos that are safe for sensitive skin.</p>
              </div>
              <div className="p-6 bg-cream-50 rounded-2xl">
                 <div className="w-12 h-12 bg-navy-100 text-navy-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 </div>
                 <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">No Rush</h3>
                 <p className="text-gray-500 text-sm">We don't overbook. Your pet gets our undivided attention.</p>
              </div>
           </div>
        </div>
      </Section>

      {/* How it Works */}
      <Section bg="mint">
         <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Simple steps to a fresh, happy pet.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                    {idx < PROCESS_STEPS.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-navy-800/10 -z-10"></div>
                    )}
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-peach-500 mb-6 transform transition-transform hover:-translate-y-2">
                       {/* Simplified Icons based on step.icon */}
                       {step.icon === 'calendar' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}
                       {step.icon === 'home' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>}
                       {step.icon === 'scissors' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path></svg>}
                       {step.icon === 'heart' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm max-w-xs">{step.desc}</p>
                </div>
            ))}
         </div>
      </Section>

      {/* Loved by Locals (Reviews snippet) */}
      <Section bg="cream">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
               <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">Loved by Local Pet Parents</h2>
               <p className="text-gray-600 mb-8">
                 We're proud to be one of Wheelers Hill's most trusted grooming salons. 
                 See why our clients (and their humans) keep coming back.
               </p>
               <div className="bg-white p-4 rounded-xl inline-flex items-center gap-4 shadow-sm border border-gray-100 mb-6">
                 <span className="text-3xl font-bold text-navy-900">{BUSINESS_INFO.rating}</span>
                 <div className="flex flex-col">
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Average Rating</span>
                 </div>
               </div>
               <div>
                <Button to={BUSINESS_INFO.mapsUrl} variant="outline" external>Read more on Google</Button>
               </div>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
               {REVIEWS.map(review => (
                   <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <p className="text-navy-800 italic mb-4">"{review.text}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-mint-200 rounded-full flex items-center justify-center text-mint-800 font-bold text-xs">{review.author.charAt(0)}</div>
                        <span className="font-bold text-sm text-navy-900">{review.author}</span>
                      </div>
                   </div>
               ))}
            </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="white">
        <div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%">
                 <pattern id="paw-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M25 25c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z" fill="currentColor"/>
                 </pattern>
                 <rect x="0" y="0" width="100%" height="100%" fill="url(#paw-pattern)"></rect>
              </svg>
           </div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-peach-400">Ready for a transformation?</h2>
             <p className="text-gray-300 text-lg mb-10">
               Book your appointment today and let us treat your pet to the superb grooming experience they deserve.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button to="/contact" variant="primary">Book Now</Button>
                <a 
                   href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                   className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-heading font-semibold rounded-full hover:bg-white hover:text-navy-900 transition-colors"
                >
                   Call {BUSINESS_INFO.phoneDisplay}
                </a>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default Home;