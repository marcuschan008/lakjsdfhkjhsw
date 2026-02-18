import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import FAQAccordion from '../components/FAQAccordion';
import { BUSINESS_INFO, FAQS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    petName: '',
    petBreed: '',
    service: 'Full Groom',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-navy-900 text-white pt-32 pb-20 rounded-b-3xl">
         <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
               Ready to book? Have a question? We'd love to hear from you.
            </p>
         </div>
      </div>

      <Section>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Info Side */}
            <div>
               <h2 className="font-heading text-3xl font-bold text-navy-900 mb-8">Get in Touch</h2>
               
               <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-peach-100 rounded-full flex items-center justify-center text-peach-600 shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-navy-900 text-lg">Phone</h3>
                        <p className="text-gray-600 mb-1">Call for appointments & enquiries.</p>
                        <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-peach-600 font-bold hover:underline">{BUSINESS_INFO.phoneDisplay}</a>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center text-mint-600 shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-navy-900 text-lg">Location</h3>
                        <p className="text-gray-600 mb-1">{BUSINESS_INFO.address}</p>
                        <p className="text-xs text-gray-500">Servicing {BUSINESS_INFO.serviceArea}</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center text-navy-600 shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     </div>
                     <div>
                        <h3 className="font-bold text-navy-900 text-lg">Hours</h3>
                        <p className="text-gray-600">By Appointment Only</p>
                        <p className="text-sm text-gray-500">Mon - Sat: 9am - 5pm (approx)</p>
                     </div>
                  </div>
               </div>

               {/* Map Placeholder */}
               <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative group">
                  <iframe 
                    title="Google Maps"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    src={`https://maps.google.com/maps?q=Superb+Dog+Grooming+Wheelers+Hill&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0" 
                    scrolling="no" 
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-2xl"></div>
               </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
               {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                     <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                     <h3 className="text-2xl font-bold text-navy-900 mb-2">Enquiry Sent!</h3>
                     <p className="text-gray-600">Thanks {formState.name}! We'll be in touch shortly to confirm a time for {formState.petName}.</p>
                     <button onClick={() => setSubmitted(false)} className="mt-8 text-peach-600 underline">Send another</button>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                     <h3 className="text-2xl font-bold text-navy-900 mb-6">Request Appointment</h3>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                           <label className="text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                           <input required type="text" name="name" value={formState.name} onChange={handleChange} className="px-4 py-3 rounded-xl border border-gray-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div className="flex flex-col">
                           <label className="text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                           <input required type="tel" name="phone" value={formState.phone} onChange={handleChange} className="px-4 py-3 rounded-xl border border-gray-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all" placeholder="0400..." />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col">
                           <label className="text-sm font-semibold text-gray-700 mb-1">Pet Name</label>
                           <input required type="text" name="petName" value={formState.petName} onChange={handleChange} className="px-4 py-3 rounded-xl border border-gray-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all" placeholder="Bella" />
                        </div>
                        <div className="flex flex-col">
                           <label className="text-sm font-semibold text-gray-700 mb-1">Breed & Weight (Approx)</label>
                           <input required type="text" name="petBreed" value={formState.petBreed} onChange={handleChange} className="px-4 py-3 rounded-xl border border-gray-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all" placeholder="Golden Retriever, 30kg" />
                        </div>
                     </div>

                     <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">Service Type</label>
                        <select name="service" value={formState.service} onChange={handleChange} className="px-4 py-3 rounded-xl border border-gray-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-white">
                           <option>Full Groom / Clip</option>
                           <option>Bath & Blow Dry</option>
                           <option>Tidy Up</option>
                           <option>De-shedding</option>
                           <option>Puppy Intro</option>
                           <option>Cat Grooming</option>
                        </select>
                     </div>

                     <div className="flex flex-col">
                        <label className="text-sm font-semibold text-gray-700 mb-1">Message / Preferred Time</label>
                        <textarea name="message" value={formState.message} onChange={handleChange} rows={4} className="px-4 py-3 rounded-xl border border-gray-200 focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none transition-all" placeholder="Any specific requests or preferred days?"></textarea>
                     </div>

                     <Button fullWidth>Send Request</Button>
                     <p className="text-xs text-center text-gray-400 mt-4">We will call you to confirm the exact date and time.</p>
                  </form>
               )}
            </div>
         </div>
      </Section>

      {/* FAQs */}
      <Section bg="mint">
         <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-navy-900">Frequently Asked Questions</h2>
         </div>
         <FAQAccordion items={FAQS} />
      </Section>
    </>
  );
};

export default Contact;