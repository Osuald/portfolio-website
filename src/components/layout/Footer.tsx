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
  { icon: GithubIcon,    href: SITE.github,                                  label: "GitHub",    color: "hover:text-zinc-100" },
  { icon: LinkedinIcon,  href: "https://linkedin.com/in/osuald-iradukunda",  label: "LinkedIn",  color: "hover:text-blue-400" },
  { icon: TwitterXIcon,  href: "https://twitter.com/osuald_dev",             label: "Twitter/X", color: "hover:text-sky-400" },
  { icon: InstagramIcon, href: "https://instagram.com/osuald.dev",           label: "Instagram", color: "hover:text-pink-400" },
  { icon: FacebookIcon,  href: "https://facebook.com/osuald.iradukunda",     label: "Facebook",  color: "hover:text-blue-500" },
  { icon: WhatsAppIcon,  href: SITE.whatsapp,                                label: "WhatsApp",  color: "hover:text-green-400" },
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
    <footer className="bg-surface-900 dark:bg-surface-950 border-t border-zinc-800/60 mt-auto">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center text-white font-bold shadow-lg">
                O
              </div>
              <span className="text-xl font-bold text-white">suald Iradukunda</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Software Engineer building impactful mobile and web solutions with Flutter &
              Python. Based in Kigali, Rwanda, open to opportunities worldwide.
            </p>

            {/* Contact Details */}
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-zinc-400">
                <Phone className="h-4 w-4 text-primary-500 shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-primary-400 transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-400">
                <Mail className="h-4 w-4 text-primary-500 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary-400 transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-400">
                <MapPin className="h-4 w-4 text-primary-500 shrink-0" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Connect
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-lg bg-zinc-800 text-zinc-400 ${color} transition-all duration-200 hover:bg-zinc-700`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm py-2.5 px-5 rounded-lg
                         bg-gradient-to-r from-primary-600 to-secondary-600
                         text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-zinc-500 text-sm">
            © {year} Osuald Iradukunda. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
