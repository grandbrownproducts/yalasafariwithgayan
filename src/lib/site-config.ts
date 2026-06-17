export const siteConfig = {
  name: "Yala Safari With Gayan",
  shortName: "Yala Safari",
  tagline: "Discover the Wild Beauty of Yala with Gayan",
  description:
    "Experience unforgettable wildlife adventures in Sri Lanka's most famous national park with an expert local guide.",
  url: "https://www.yalasafariwithgayan.com",
  location: "Yala National Park, Sri Lanka",
  whatsappNumber: "94779028037",
  phoneDisplay: "+94 77 902 8037",
  // PLACEHOLDER — replace with real business email
  email: "info@yalasafariwithgayan.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63378.0!2d81.4!3d6.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNiwzNyJOIDgxLDI0Js2", // PLACEHOLDER map embed
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
