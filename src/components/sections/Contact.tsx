"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterXIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { contactInfo } from "@/data/contact";
import { fadeUp, fadeLeft, fadeRight, viewportOptions } from "@/lib/animations";

type FormState = "idle" | "sending" | "success" | "error";

const socialLinks = [
  { icon: GithubIcon,   href: contactInfo.social.github,   label: "GitHub" },
  { icon: LinkedinIcon, href: contactInfo.social.linkedin,  label: "LinkedIn" },
  { icon: TwitterXIcon, href: contactInfo.social.twitter,   label: "Twitter/X" },
  { icon: WhatsAppIcon, href: contactInfo.social.whatsapp,  label: "WhatsApp" },
];

const contactDetails = [
  { icon: Mail,  label: "Email",              value: contactInfo.email,        href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone / WhatsApp",   value: contactInfo.phone,        href: contactInfo.social.whatsapp },
  { icon: MapPin,label: "Location",           value: contactInfo.location,     href: null },
  { icon: Clock, label: "Availability",       value: contactInfo.availability, href: null },
];

export default function Contact() {
  const formRef  = useRef<HTMLFormElement>(null);
  const [form,   setForm]   = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormState>("idle");

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())  e.name    = "Name is required.";
    if (!form.email.trim()) e.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.length < 20)  e.message = "At least 20 characters please.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const fieldClass = (field: keyof typeof form) =>
    `w-full px-4 py-2.5 rounded-xl text-sm border transition-all duration-200 outline-none
     bg-cream-50 dark:bg-night-900 text-ink-900 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-600
     focus:ring-2 focus:ring-seafoam-300/50 dark:focus:ring-seafoam-700/40
     ${errors[field]
       ? "border-red-400 dark:border-red-600"
       : "border-cream-300 dark:border-night-700 hover:border-seafoam-300 dark:hover:border-seafoam-700 focus:border-seafoam-400 dark:focus:border-seafoam-600"
     }`;

  return (
    <section id="contact" className="section-padding bg-cream-100 dark:bg-night-900 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 divider-seafoam" />

      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <p className="label-mono mb-3">Contact</p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-ink-900 dark:text-cream-100">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-ink-500 dark:text-ink-400 mt-4 max-w-xl mx-auto text-[15px]">
            Got a project or just want to say hi? I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2 space-y-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <div key={label}
                className="flex items-start gap-3.5 p-4 rounded-xl
                           bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700">
                <div className="p-2 rounded-lg bg-seafoam-50 dark:bg-seafoam-900/20 border border-seafoam-200 dark:border-seafoam-800/30 shrink-0">
                  <Icon className="h-4 w-4 text-seafoam-600 dark:text-seafoam-400" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-ink-300 dark:text-ink-600 mb-0.5 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                       className="text-sm text-ink-700 dark:text-cream-200 hover:text-seafoam-600 dark:hover:text-seafoam-400 transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-ink-700 dark:text-cream-200">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-1">
              <p className="label-mono mb-3">Find me on</p>
              <div className="flex gap-2.5 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                     className="p-3 rounded-xl bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700
                                text-ink-400 dark:text-ink-400
                                hover:border-seafoam-400 hover:text-seafoam-600 dark:hover:text-seafoam-400
                                transition-all duration-200">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href={contactInfo.social.whatsapp} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                          bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm
                          active:scale-[0.98] transition-all duration-200 shadow-sm">
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-night-800 border border-cream-300 dark:border-night-700 rounded-2xl p-6 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="h-14 w-14 rounded-full bg-seafoam-50 dark:bg-seafoam-900/30 border border-seafoam-200 dark:border-seafoam-700 flex items-center justify-center mb-4">
                    <CheckCircle className="h-7 w-7 text-seafoam-500" />
                  </div>
                  <h3 className="font-mono text-lg font-bold text-ink-900 dark:text-cream-100 mb-1.5">Message Sent!</h3>
                  <p className="text-ink-500 dark:text-ink-400 text-sm">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h3 className="font-mono text-base font-bold text-ink-900 dark:text-cream-100 mb-5">Send a Message</h3>

                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Failed to send. Email me directly at {contactInfo.email}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-ink-500 dark:text-ink-400 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                        placeholder="John Doe" className={fieldClass("name")} autoComplete="name" />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-ink-500 dark:text-ink-400 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="john@example.com" className={fieldClass("email")} autoComplete="email" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-ink-500 dark:text-ink-400 mb-1.5">Subject</label>
                    <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                      placeholder="Project collaboration, freelance work…" className={fieldClass("subject")} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-ink-500 dark:text-ink-400 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project or idea…" className={`${fieldClass("message")} resize-none`} />
                    <div className="flex justify-between mt-1">
                      {errors.message ? <p className="text-xs text-red-500">{errors.message}</p> : <span />}
                      <span className={`text-xs font-mono ${form.message.length < 20 ? "text-ink-300" : "text-ink-400"}`}>
                        {form.message.length}
                      </span>
                    </div>
                  </div>

                  <input type="hidden" name="from_name" value={form.name} />
                  <input type="hidden" name="from_email" value={form.email} />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl
                               font-semibold text-sm text-white
                               bg-seafoam-500 hover:bg-seafoam-600
                               disabled:opacity-50 disabled:cursor-not-allowed
                               active:scale-[0.98] transition-all duration-200
                               shadow-md shadow-seafoam-100 dark:shadow-seafoam-900/20
                               focus:outline-none focus:ring-2 focus:ring-seafoam-400 focus:ring-offset-2"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
