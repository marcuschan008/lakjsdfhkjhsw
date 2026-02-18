import { Service, Review, FAQItem, NavItem } from './types';

export const BUSINESS_INFO = {
  name: "Superb Dog Grooming",
  shortName: "Superb Grooming",
  phone: "0400 123 456", // Placeholder based on typical AU mobile format
  phoneDisplay: "0400 123 456",
  email: "hello@superbgrooming.com.au",
  address: "Wheelers Hill, VIC 3150",
  serviceArea: "Wheelers Hill & Surrounds (Glen Waverley, Mulgrave, Rowville)",
  mapsUrl: "https://www.google.com/maps?output=search&q=Superb+Dog+Grooming",
  facebook: "https://www.facebook.com/Superbdoggrooming/",
  instagram: "https://www.instagram.com/superb.doggrooming/",
  rating: "4.9",
  reviewCount: "250+"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'bath-blow-dry',
    title: 'Bath & Blow Dry',
    description: 'Perfect for maintaining a clean coat between haircuts.',
    inclusions: ['Warm hydrobath', 'Two shampoos (deep clean)', 'Conditioner', 'Blow dry (by hand, no cages)', 'Brush out', 'Cologne'],
    duration: '45-60 mins',
    priceStart: '$45'
  },
  {
    id: 'full-groom',
    title: 'Full Groom / Clip',
    description: 'The complete makeover for style and comfort.',
    inclusions: ['Bath & Blow Dry inclusions', 'Full body clip to specific length', 'Scissor finish on face/feet', 'Nail trim', 'Sanitary tidy'],
    duration: '1.5 - 2 hours',
    priceStart: '$85'
  },
  {
    id: 'tidy-up',
    title: 'Tidy Up',
    description: 'Keep them neat without taking length off the body.',
    inclusions: ['Bath & Blow Dry inclusions', 'Face trim', 'Feet trim', 'Sanitary tidy', 'Nail trim'],
    duration: '1 hour',
    priceStart: '$65'
  },
  {
    id: 'deshedding',
    title: 'De-shedding Treatment',
    description: 'Essential for double-coated breeds to reduce loose hair.',
    inclusions: ['Warm bath with de-shedding shampoo', 'High-velocity dryer to release undercoat', 'Intensive brushing/raking'],
    duration: '1 - 2 hours',
    priceStart: '$70'
  },
  {
    id: 'puppy-intro',
    title: 'Puppy Intro Groom',
    description: 'A gentle first experience to build confidence.',
    inclusions: ['Slow & gentle handling', 'Warm bath', 'Gentle dry', 'Face/feet tidy (if tolerated)', 'Lots of cuddles & treats'],
    duration: '45 mins',
    priceStart: '$50'
  },
  {
    id: 'cat-grooming',
    title: 'Cat Grooming',
    description: 'Gentle maintenance for feline friends.',
    inclusions: ['Waterless foam or warm bath', 'Brush out', 'Mat removal (shaving if needed)', 'Nail trim', 'Hygiene clip'],
    duration: '45-90 mins',
    priceStart: '$75'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Luka Tremback',
    text: 'Jan is a gentle kind soul… doggos were calm… No months-long waitlists… Highly recommend!',
    source: 'Google',
    rating: 5
  },
  {
    id: 'r2',
    author: 'Alex Papa',
    text: 'Jan… cares about the animals… a tranquil place for dogs… Ellie was comfortable.',
    source: 'Google',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How long does grooming take?',
    answer: 'Most sessions take between 1.5 to 2 hours. We focus on a calm environment, so we don’t rush. We will give you a call 15 minutes before your pet is ready for pick-up.'
  },
  {
    id: 'f2',
    question: 'Do you groom anxious pets?',
    answer: 'Yes. We pride ourselves on a gentle, low-stress approach. If your pet is anxious, please let us know beforehand so we can schedule extra time to go slow and steady.'
  },
  {
    id: 'f3',
    question: 'Do you groom cats?',
    answer: 'Yes, we offer cat grooming services including brushing, de-matting, and hygiene clips. Availability depends on the cat’s temperament as safety is our priority.'
  },
  {
    id: 'f4',
    question: 'Do you do de-matting?',
    answer: 'We prioritize humanity over vanity. Minor knots can be brushed out, but severe matting causes pain and skin damage. In these cases, we will recommend a "fresh start" clip for your pet\'s comfort.'
  },
  {
    id: 'f5',
    question: 'What vaccinations are required?',
    answer: 'For the safety of all pets, we require proof of up-to-date C5 vaccination for dogs and F3 for cats.'
  },
  {
    id: 'f6',
    question: 'What if my pet has fleas?',
    answer: 'If fleas are found, we will administer a flea rinse immediately to protect our salon environment. An extra cleaning fee may apply.'
  },
  {
    id: 'f7',
    question: 'How do I prepare my puppy?',
    answer: 'Start touching their paws and ears at home gently. Book a "Puppy Intro" as soon as they are fully vaccinated to get them used to the sights and sounds of the salon.'
  },
  {
    id: 'f8',
    question: 'Can I request a specific style?',
    answer: 'Absolutely! Please bring a photo of the style you like. We will discuss if it is achievable based on your dog\'s coat type and condition.'
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Book',
    desc: 'Call or enquire online to secure your spot.',
    icon: 'calendar'
  },
  {
    title: 'Drop-off',
    desc: 'Discuss your preferences and any health needs.',
    icon: 'home'
  },
  {
    title: 'Groom',
    desc: 'We pamper your pet with gentle care & premium products.',
    icon: 'scissors'
  },
  {
    title: 'Pick-up',
    desc: 'Reunite with your fresh, fluffy, and happy friend!',
    icon: 'heart'
  }
];