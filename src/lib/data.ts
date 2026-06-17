export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Safari Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export type SafariPackage = {
  slug: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  features: string[];
};

export const safariPackages: SafariPackage[] = [
  {
    slug: "morning-safari",
    title: "Morning Safari",
    duration: "5–6 hours",
    description:
      "Catch the park at first light, when leopards and elephants are most active and the air is cool and still.",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Pickup before sunrise",
      "Best leopard sighting window",
      "Expert tracker guide",
      "Hot beverages included",
    ],
  },
  {
    slug: "evening-safari",
    title: "Evening Safari",
    duration: "5–6 hours",
    description:
      "Watch Yala glow gold as the sun sets behind ancient rock formations, with wildlife emerging for the evening.",
    image:
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Golden-hour photography",
      "Sunset over the savannah",
      "Elephant herd encounters",
      "Refreshments included",
    ],
  },
  {
    slug: "full-day-safari",
    title: "Full Day Safari",
    duration: "Full day",
    description:
      "The complete Yala experience — covering more ground, more habitats, and the best chance to see it all.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Morning and evening combined",
      "Lunch break at scenic spot",
      "Maximum wildlife coverage",
      "Ideal for photographers",
    ],
  },
  {
    slug: "private-safari",
    title: "Private Safari",
    duration: "Customizable",
    description:
      "An exclusive jeep just for you and your loved ones — flexible timing, pace, and a fully personalized route.",
    image:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Private 4x4 jeep",
      "Flexible schedule",
      "Tailored to your interests",
      "Perfect for families & couples",
    ],
  },
];

export type Feature = {
  title: string;
  description: string;
  icon:
    | "guide"
    | "jeep"
    | "leopard"
    | "bird"
    | "family"
    | "price";
};

export const whyChooseUs: Feature[] = [
  {
    title: "Professional Guide",
    description:
      "Gayan brings years of hands-on tracking experience and deep park knowledge to every safari.",
    icon: "guide",
  },
  {
    title: "Comfortable 4x4 Jeeps",
    description:
      "Well-maintained, safari-ready jeeps designed for comfort across Yala's varied terrain.",
    icon: "jeep",
  },
  {
    title: "Leopard Tracking Experts",
    description:
      "Specialized knowledge of leopard territories and behavior to maximize sighting chances.",
    icon: "leopard",
  },
  {
    title: "Bird Watching Tours",
    description:
      "Yala is home to over 200 bird species — we know exactly where to find them.",
    icon: "bird",
  },
  {
    title: "Family Friendly",
    description:
      "Safe, relaxed, and enjoyable experiences suited to travelers of every age.",
    icon: "family",
  },
  {
    title: "Affordable Prices",
    description:
      "Premium experiences without the premium price tag — honest, transparent pricing.",
    icon: "price",
  },
];

export type WildlifeAnimal = {
  name: string;
  image: string;
  fact: string;
};

export const wildlifeHighlights: WildlifeAnimal[] = [
  {
    name: "Sri Lankan Leopard",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=900&auto=format&fit=crop",
    fact: "Yala has one of the highest densities of leopards anywhere in the world.",
  },
  {
    name: "Elephant",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=900&auto=format&fit=crop",
    fact: "Sri Lankan elephants gather here in large herds, especially near waterholes.",
  },
  {
    name: "Sloth Bear",
    image:
      "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?q=80&w=900&auto=format&fit=crop",
    fact: "Shy and rare to spot, sloth bears are one of Yala's most exciting sightings.",
  },
  {
    name: "Crocodile",
    image:
      "https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=900&auto=format&fit=crop",
    fact: "Both mugger and saltwater crocodiles bask along Yala's lagoons and rivers.",
  },
  {
    name: "Peacock",
    image:
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=900&auto=format&fit=crop",
    fact: "Sri Lanka's national bird displays its full plumage often during mating season.",
  },
  {
    name: "Exotic Birds",
    image:
      "https://images.unsplash.com/photo-1444465693258-0abc8c4d3dab?q=80&w=900&auto=format&fit=crop",
    fact: "Over 200 species call Yala home, making it a paradise for birdwatchers.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Leopards" | "Elephants" | "Safari Jeeps" | "Landscapes" | "Birds" | "Sunsets";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop",
    alt: "Sri Lankan leopard resting on a rock",
    category: "Leopards",
  },
  {
    src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1000&auto=format&fit=crop",
    alt: "Elephant herd in Yala",
    category: "Elephants",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
    alt: "Safari jeep driving through the park",
    category: "Safari Jeeps",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop",
    alt: "Yala National Park landscape",
    category: "Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1444465693258-0abc8c4d3dab?q=80&w=1000&auto=format&fit=crop",
    alt: "Exotic bird perched on a branch",
    category: "Birds",
  },
  {
    src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1000&auto=format&fit=crop",
    alt: "Sunset over the Yala savannah",
    category: "Sunsets",
  },
  {
    src: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?q=80&w=1000&auto=format&fit=crop",
    alt: "Peacock displaying its feathers",
    category: "Birds",
  },
  {
    src: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=1000&auto=format&fit=crop",
    alt: "Jeep safari at dusk",
    category: "Safari Jeeps",
  },
  {
    src: "https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=1000&auto=format&fit=crop",
    alt: "Crocodile resting near the water",
    category: "Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1000&auto=format&fit=crop",
    alt: "Elephants by the waterhole",
    category: "Elephants",
  },
  {
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1000&auto=format&fit=crop",
    alt: "Golden sunset reflecting on the lake",
    category: "Sunsets",
  },
  {
    src: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1000&auto=format&fit=crop",
    alt: "Leopard walking through tall grass",
    category: "Leopards",
  },
];

export type Testimonial = {
  name: string;
  country: string;
  rating: number;
  text: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Emily Carter",
    country: "United Kingdom",
    rating: 5,
    text: "Gayan spotted two leopards within the first hour! His knowledge of the park is incredible. Best safari experience of our lives.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Lukas Becker",
    country: "Germany",
    rating: 5,
    text: "Professional, punctual, and passionate about wildlife. The jeep was comfortable and Gayan made sure every member of our family enjoyed it.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Sophie Martin",
    country: "France",
    rating: 5,
    text: "An unforgettable sunset safari — the elephant herd we saw up close was magical. Highly recommend booking with Gayan.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "James Anderson",
    country: "Australia",
    rating: 5,
    text: "We've done safaris in Africa before, but Yala with Gayan was just as thrilling. Genuinely one of the best guides we've had anywhere.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Mei Tanaka",
    country: "Japan",
    rating: 5,
    text: "Gayan's English was excellent and he explained so much about the animals and the park's history. A truly educational and fun trip.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Daniel Kim",
    country: "South Korea",
    rating: 5,
    text: "Booking was easy, communication on WhatsApp was fast, and the full-day safari exceeded all our expectations. Thank you, Gayan!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: "Happy Tourists", value: 500, suffix: "+" },
  { label: "Safari Tours", value: 1000, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Wildlife Sighting Success", value: 95, suffix: "%" },
];
