export const siteConfig = {
  name: "Yala Safari With Gayan",
  shortName: "Yala Safari",
  tagline: "Discover the Wild Beauty of Yala with Gayan",
  description:
    "Experience unforgettable wildlife adventures in Sri Lanka's most famous national park with an expert local guide.",
  url: "https://www.gayansafari.com",
  location: "Yala National Park, Sri Lanka",
  whatsappNumber: "94775420233",
  phoneDisplay: "+94 77 542 0233",
  email: "gayasafarisl@gmail.com",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Yala+National+Park,+Sri+Lanka&output=embed",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    tripadvisor: "https://tripadvisor.com/",
  },
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
