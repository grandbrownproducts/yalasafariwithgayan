import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.78c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.62h-1.2c-1.18 0-1.55.74-1.55 1.5v1.78h2.66l-.43 2.91h-2.23V22c4.78-.76 8.34-4.92 8.34-9.94Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.5s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.86 2.8 12 2.8 12 2.8h-.01s-4.86 0-8.2.34c-.46.05-1.46.06-2.36 1C.73 4.86.5 6.5.5 6.5S.25 8.42.25 10.34v1.32c0 1.92.25 3.84.25 3.84s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02 1.9.18 8 .23 8 .23s4.87-.01 8.2-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.25-1.92.25-3.84v-1.32c0-1.92-.25-3.84-.25-3.84ZM9.6 14.96V8.7l6 3.13-6 3.13Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-safari-dark pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#home" className="font-display text-xl text-safari-cream">
              {siteConfig.shortName}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-safari-cream/60">
              Premium safari tours and wildlife experiences in Yala National
              Park, Sri Lanka.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-safari-cream">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-safari-cream/60 transition-colors hover:text-safari-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-safari-cream">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-safari-cream/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-safari-gold" />
                {siteConfig.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-safari-gold" />
                {siteConfig.phoneDisplay}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-safari-gold" />
                {siteConfig.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-safari-cream">Follow Us</h4>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-safari-cream/70 transition-colors hover:bg-safari-gold hover:text-safari-dark"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-safari-cream/70 transition-colors hover:bg-safari-gold hover:text-safari-dark"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-safari-cream/70 transition-colors hover:bg-safari-gold hover:text-safari-dark"
              >
                <YoutubeIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 py-6 text-center text-sm text-safari-cream/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
