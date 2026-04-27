import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";

const socialLinks = [
  { icon: GithubIcon,    href: SITE.github,                                 label: "GitHub" },
  { icon: LinkedinIcon,  href: "https://linkedin.com/in/osuald-iradukunda", label: "LinkedIn" },
  { icon: TwitterXIcon,  href: "https://twitter.com/_osuald16",             label: "Twitter/X" },
  { icon: InstagramIcon, href: "https://www.instagram.com/__osuald/",       label: "Instagram" },
  { icon: FacebookIcon,  href: "https://facebook.com/osuald.iradukunda",    label: "Facebook" },
  { icon: WhatsAppIcon,  href: SITE.whatsapp,                               label: "WhatsApp" },
];

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream-200 dark:bg-night-900 border-t border-cream-300 dark:border-night-800">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-seafoam-500 flex items-center justify-center text-white font-mono font-bold text-sm">
                O
              </div>
              <span className="font-mono text-base font-semibold text-ink-900 dark:text-cream-100">
                suald Iradukunda
              </span>
            </Link>
            <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed max-w-xs">
              Software Engineer building impactful mobile and web solutions with Flutter &
              Python. Based in Kigali, Rwanda — open to opportunities worldwide.
            </p>

            <ul className="space-y-2 text-sm">
              {[
                { icon: Phone, label: SITE.phone,    href: `tel:${SITE.phone}` },
                { icon: Mail,  label: SITE.email,    href: `mailto:${SITE.email}` },
                { icon: MapPin,label: SITE.location, href: null },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-2.5 text-ink-600 dark:text-ink-400">
                  <Icon className="h-4 w-4 text-seafoam-500 shrink-0" />
                  {href ? (
                    <a href={href} className="hover:text-seafoam-600 dark:hover:text-seafoam-400 transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-600 dark:text-ink-400 hover:text-seafoam-600 dark:hover:text-seafoam-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-ink-400 dark:text-ink-400 mb-5">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-cream-100 dark:bg-night-800 text-ink-500 dark:text-ink-400
                             border border-cream-300 dark:border-night-700
                             hover:border-seafoam-400 hover:text-seafoam-600 dark:hover:text-seafoam-400
                             transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm py-2.5 px-4 rounded-lg
                         bg-seafoam-500 hover:bg-seafoam-600 text-white font-semibold
                         transition-colors duration-200"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="divider-seafoam mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-ink-400 text-sm">© {year} Osuald Iradukunda. All rights reserved.</p>
          <p className="text-ink-400 text-xs font-mono">Next.js · TypeScript · Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}
