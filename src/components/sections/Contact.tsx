"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";
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
  { icon: GithubIcon,   href: contactInfo.social.github,    label: "GitHub" },
  { icon: LinkedinIcon, href: contactInfo.social.linkedin,  label: "LinkedIn" },
  { icon: TwitterXIcon, href: contactInfo.social.twitter,   label: "Twitter/X" },
  { icon: WhatsAppIcon, href: contactInfo.social.whatsapp,  label: "WhatsApp" },
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: "bg-primary-900/30 border-primary-800/40 text-primary-400",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: contactInfo.phone,
    href: contactInfo.social.whatsapp,
    color: "bg-emerald-900/30 border-emerald-800/40 text-emerald-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: contactInfo.location,
    href: null,
    color: "bg-secondary-900/30 border-secondary-800/40 text-secondary-400",
  },
  {
    icon: Clock,
    label: "Availability",
    value: contactInfo.availability,
    href: null,
    color: "bg-amber-900/30 border-amber-800/40 text-amber-400",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors]   = useState<Partial<typeof formData>>({});
  const [status, setStatus]   = useState<FormState>("idle");

  const validate = () => {
    const e: Partial<typeof formData> = {};
    if (!formData.name.trim())          e.name    = "Name is required.";
    if (!formData.email.trim())         e.email   = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                        e.email   = "Enter a valid email address.";
    if (!formData.message.trim())       e.message = "Message is required.";
    else if (formData.message.length < 20)
                                        e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("sending");

    // ── EmailJS ──────────────────────────────────────────────────────────────
    // 1. Go to https://www.emailjs.com and create a free account
    // 2. Add a Gmail service (or any email service) and note the Service ID
    // 3. Create a template. Use these variable names in the template body:
    //      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
    //    Set "To Email" to: osualdiradukunda16@gmail.com
    // 4. Copy your Public Key from Account → API Keys
    // 5. Add to .env.local:
    //      NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    //      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    //      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    // ─────────────────────────────────────────────────────────────────────────
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClass = (field: keyof typeof formData) =>
    `w-full px-4 py-3 rounded-xl text-sm bg-zinc-800/60 border transition-all duration-200
     text-zinc-100 placeholder-zinc-500 outline-none
     focus:ring-2 focus:ring-primary-600/50
     ${errors[field]
       ? "border-red-500/60 focus:border-red-500"
       : "border-zinc-700/60 focus:border-primary-600/60 hover:border-zinc-600"
     }`;

  return (
    <section id="contact" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-600/40 to-transparent" />
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-secondary-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary-400 uppercase tracking-[0.2em] mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-[15px]">
            Got a project, an idea, or just want to say hi? Drop me a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-2 space-y-5"
          >
            {contactDetails.map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className={`flex items-start gap-4 p-4 rounded-2xl border ${color.split(" ").slice(0,2).join(" ")} bg-zinc-900/50`}>
                <div className={`p-2.5 rounded-xl border shrink-0 ${color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-300 hover:text-primary-300 transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-zinc-300">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-zinc-400
                               hover:border-primary-700/50 hover:text-primary-400 hover:bg-primary-900/20
                               transition-all duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={contactInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl
                         bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98]
                         text-white font-semibold text-sm transition-all duration-200
                         shadow-lg shadow-emerald-900/30"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="lg:col-span-3"
          >
            <div className="bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 md:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-900/40 border border-emerald-700/50 flex items-center justify-center mb-5">
                    <CheckCircle className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-sm">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-red-900/30 border border-red-700/50 text-red-300 text-sm"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      Failed to send. Please try emailing directly at {contactInfo.email}
                    </motion.div>
                  )}

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass("name")}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="from_email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass("email")}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, freelance work…"
                      className={inputClass("subject")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and how I can help…"
                      className={`${inputClass("message")} resize-none`}
                    />
                    <div className="flex justify-between mt-1.5">
                      {errors.message
                        ? <p className="text-xs text-red-400">{errors.message}</p>
                        : <span />
                      }
                      <span className={`text-xs ${formData.message.length < 20 ? "text-zinc-600" : "text-zinc-500"}`}>
                        {formData.message.length} chars
                      </span>
                    </div>
                  </div>

                  {/* Hidden field for EmailJS */}
                  <input type="hidden" name="from_name" value={formData.name} />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl
                               font-semibold text-white text-sm
                               bg-gradient-to-r from-primary-600 to-secondary-600
                               hover:opacity-90 active:scale-[0.98]
                               disabled:opacity-50 disabled:cursor-not-allowed
                               shadow-lg shadow-primary-900/30
                               transition-all duration-200
                               focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
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
