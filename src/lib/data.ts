export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Safari Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export type SafariDestination = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export const safariDestinations: SafariDestination[] = [
  {
    slug: "yala",
    name: "Yala National Park",
    image: "/wildlife/leopard-dark-portrait.jpeg",
    description:
      "Sri Lanka's most famous park, renowned for the highest leopard density in the world.",
  },
  {
    slug: "udawalawe",
    name: "Udawalawe National Park",
    image:
      "https://images.unsplash.com/photo-1617867644194-550af3ae2c56?q=80&w=1200&auto=format&fit=crop",
    description:
      "A wide-open savannah famous for huge wild elephant herds gathered around the reservoir.",
  },
  {
    slug: "bundala",
    name: "Bundala National Park",
    image: "/wildlife/peacock-on-stump.jpeg",
    description:
      "A wetland sanctuary and birdwatcher's paradise, home to flamingos and migratory species.",
  },
  {
    slug: "lunugamwehera",
    name: "Lunugamwehera National Park",
    image: "/wildlife/crocodile.jpg",
    description:
      "A quieter, less-crowded park bridging Yala and Udawalawe, rich in elephants and crocodiles.",
  },
];

export type SafariPackage = {
  slug: string;
  title: string;
  time: string;
  price: string;
  image: string;
  features: string[];
};

export const safariPackages: SafariPackage[] = [
  {
    slug: "morning-safari",
    title: "5 Hours Morning Safari Tour",
    time: "05:00 AM – 10:00 AM",
    price: "USD 60",
    image: "/wildlife/leopard-portrait-lying.jpeg",
    features: [
      "Pickup before sunrise",
      "Best leopard sighting window",
      "Expert tracker guide",
      "Hot beverages included",
    ],
  },
  {
    slug: "evening-safari",
    title: "5 Hours Evening Safari Tour",
    time: "01:30 PM – 06:00 PM",
    price: "USD 60",
    image: "/wildlife/sambar-deer.jpeg",
    features: [
      "Golden-hour photography",
      "Sunset over the savannah",
      "Elephant herd encounters",
      "Refreshments included",
    ],
  },
  {
    slug: "half-day-safari",
    title: "7 Hours Half Day Safari Tour",
    time: "05:00 AM – 12:00 PM",
    price: "USD 70",
    image: "/wildlife/leopard-walking-road.jpeg",
    features: [
      "Morning and midday combined",
      "Extended wildlife coverage",
      "Snack break included",
      "Ideal for photographers",
    ],
  },
  {
    slug: "full-day-safari",
    title: "Full Day Safari Tour",
    time: "05:00 AM – 06:00 PM",
    price: "USD 105",
    image: "/wildlife/kingfisher-dark-bg.jpeg",
    features: [
      "Morning and evening combined",
      "Lunch break at scenic spot",
      "Maximum wildlife coverage",
      "Perfect for families & couples",
    ],
  },
];

export const packageImagesByDestination: Record<string, Record<string, string>> = {
  yala: {
    "morning-safari": "/wildlife/leopard-standing-road.jpeg",
    "evening-safari": "/wildlife/spotted-deer-fawn.jpeg",
    "half-day-safari": "/wildlife/sloth-bear-cub-walking.jpeg",
    "full-day-safari": "/wildlife/tusker-elephant-walking.jpeg",
  },
  udawalawe: {
    "morning-safari":
      "https://images.unsplash.com/photo-1617867644194-550af3ae2c56?q=80&w=1200&auto=format&fit=crop",
    "evening-safari": "/wildlife/elephant-by-lake.jpeg",
    "half-day-safari":
      "https://images.unsplash.com/photo-1731124655617-e74233ed4a4d?q=80&w=1200&auto=format&fit=crop",
    "full-day-safari":
      "https://images.unsplash.com/photo-1617867644194-550af3ae2c56?q=80&w=1200&auto=format&fit=crop",
  },
  bundala: {
    "morning-safari": "/wildlife/black-necked-stork.jpeg",
    "evening-safari": "/wildlife/stork-billed-kingfisher.jpeg",
    "half-day-safari": "/wildlife/hoopoe-calling.jpeg",
    "full-day-safari": "/wildlife/kingfisher-green-bg.jpeg",
  },
  lunugamwehera: {
    "morning-safari": "/wildlife/crocodile.jpg",
    "evening-safari":
      "https://images.unsplash.com/photo-1609242030544-f2a37bab739c?q=80&w=1200&auto=format&fit=crop",
    "half-day-safari": "/wildlife/toque-macaques.jpeg",
    "full-day-safari": "/wildlife/sri-lanka-junglefowl.jpeg",
  },
};

export type IncludedService = {
  title: string;
  icon: "water" | "coolbox" | "binoculars" | "driver";
};

export const includedServices: IncludedService[] = [
  { title: "Free Water Bottles", icon: "water" },
  { title: "Cool Box", icon: "coolbox" },
  { title: "Binoculars", icon: "binoculars" },
  { title: "Experienced Safari Driver", icon: "driver" },
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
    image: "/wildlife/leopard-portrait-closeup.jpeg",
    fact: "Yala has one of the highest densities of leopards anywhere in the world.",
  },
  {
    name: "Elephant",
    image:
      "https://images.unsplash.com/photo-1617867644194-550af3ae2c56?q=80&w=900&auto=format&fit=crop",
    fact: "Sri Lankan elephants gather here in large herds, especially near waterholes.",
  },
  {
    name: "Sloth Bear",
    image: "/wildlife/sloth-bear-with-cubs.jpeg",
    fact: "Shy and rare to spot, sloth bears are one of Yala's most exciting sightings.",
  },
  {
    name: "Crocodile",
    image: "/wildlife/crocodile.jpg",
    fact: "Both mugger and saltwater crocodiles bask along Yala's lagoons and rivers.",
  },
  {
    name: "Peacock",
    image:
      "https://images.unsplash.com/photo-1727899662754-a06f1ad2c3bb?q=80&w=900&auto=format&fit=crop",
    fact: "Sri Lanka's national bird displays its full plumage often during mating season.",
  },
  {
    name: "Exotic Birds",
    image: "/wildlife/bee-eater.jpeg",
    fact: "Over 200 species call Yala home, making it a paradise for birdwatchers.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Leopards" | "Elephants" | "Safari Jeeps" | "Landscapes" | "Birds" | "Sunsets" | "Wildlife";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/wildlife/leopard-face-bushes.jpeg",
    alt: "Sri Lankan leopard peering through the bushes",
    category: "Leopards",
  },
  {
    src: "https://images.unsplash.com/photo-1609242030544-f2a37bab739c?q=80&w=1000&auto=format&fit=crop",
    alt: "Asian elephants grazing in Yala",
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
    src: "/wildlife/hoopoe-on-stump.jpeg",
    alt: "Hoopoe perched on a tree stump",
    category: "Birds",
  },
  {
    src: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?q=80&w=1000&auto=format&fit=crop",
    alt: "Sunset over the Yala savannah",
    category: "Sunsets",
  },
  {
    src: "https://images.unsplash.com/photo-1727899662754-a06f1ad2c3bb?q=80&w=1000&auto=format&fit=crop",
    alt: "Peacock displaying its feathers",
    category: "Birds",
  },
  {
    src: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=1000&auto=format&fit=crop",
    alt: "Jeep safari at dusk",
    category: "Safari Jeeps",
  },
  {
    src: "/wildlife/crocodile.jpg",
    alt: "Crocodile resting near the water",
    category: "Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1731124655617-e74233ed4a4d?q=80&w=1000&auto=format&fit=crop",
    alt: "Elephant drinking at the waterhole",
    category: "Elephants",
  },
  {
    src: "/wildlife/leopard-sand-walking.jpeg",
    alt: "Leopard walking along a sandy track",
    category: "Leopards",
  },
  {
    src: "/wildlife/leopard-grass-stare.jpeg",
    alt: "Leopard walking through tall grass",
    category: "Leopards",
  },
  {
    src: "/wildlife/leopard-sand-resting.jpeg",
    alt: "Leopard resting on a sandy track",
    category: "Leopards",
  },
  {
    src: "/wildlife/leopard-on-branch.jpeg",
    alt: "Leopard perched on a tree branch",
    category: "Leopards",
  },
  {
    src: "/wildlife/leopard-pair-resting.jpeg",
    alt: "Two leopards resting together in the grass",
    category: "Leopards",
  },
  {
    src: "/wildlife/crested-hawk-eagle.jpeg",
    alt: "Crested hawk-eagle perched in the rain",
    category: "Birds",
  },
  {
    src: "/wildlife/black-necked-stork.jpeg",
    alt: "Black-necked stork close-up",
    category: "Birds",
  },
  {
    src: "/wildlife/kingfisher-dark-bg.jpeg",
    alt: "Common kingfisher on a branch",
    category: "Birds",
  },
  {
    src: "/wildlife/sambar-deer.jpeg",
    alt: "Sambar deer stag in the grassland",
    category: "Wildlife",
  },
  {
    src: "/wildlife/toque-macaques.jpeg",
    alt: "Toque macaques resting in the trees",
    category: "Wildlife",
  },
  {
    src: "/wildlife/sri-lanka-junglefowl.jpeg",
    alt: "Sri Lankan junglefowl pair",
    category: "Wildlife",
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
