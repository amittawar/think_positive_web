/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Star,
  Award,
  Clock,
  ShieldCheck,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../assets/img/think_positive_old.jpg";

const COUNTRIES = [
  {
    name: "Canada",
    flag: "🇨🇦",
    description: "Top destination for PR and quality education.",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    description: "Great lifestyle and post-study work opportunities.",
  },
  {
    name: "UK",
    flag: "🇬🇧",
    description: "World-class universities and rich heritage.",
  },
  {
    name: "USA",
    flag: "🇺🇸",
    description: "Leader in innovation and diverse study options.",
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    description: "Safe environment and excellent research facilities.",
  },
  {
    name: "Europe",
    flag: "🇪🇺",
    description: "Affordable education and diverse cultural experience.",
  },
];

const SERVICES = [
  {
    title: "Student Visa",
    icon: <GraduationCap className="w-8 h-8 text-brand-secondary" />,
    description:
      "Complete guidance from university selection to visa approval for your dream study destination.",
  },
  {
    title: "PR & Immigration",
    icon: <Globe className="w-8 h-8 text-brand-secondary" />,
    description:
      "Expert assistance for Permanent Residency applications for Canada, Australia, and more.",
  },
  {
    title: "Coaching (IELTS/PTE)",
    icon: <BookOpen className="w-8 h-8 text-brand-secondary" />,
    description:
      "Result-oriented coaching with experienced trainers to help you achieve your target scores.",
  },
  {
    title: "Visitor Visa",
    icon: <Users className="w-8 h-8 text-brand-secondary" />,
    description:
      "Hassle-free visitor visa processing for families and business travelers.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    country: "Canada",
    text: "Think Positive Overseas made my dream of studying in Canada a reality. Their guidance was impeccable throughout the process.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    country: "Australia",
    text: "The IELTS coaching here is top-notch. I got my desired band score in the first attempt thanks to the amazing trainers.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    country: "UK",
    text: "Very professional and transparent services. They handled my complex visa case with great expertise.",
    rating: 5,
  },
];

const NAV_ITEMS = [
  { label: "HOME", subtext: "OUR WORLD", id: "home" },
  { label: "ABOUT US", subtext: "KNOW US", id: "about" },
  { label: "STUDY IN", subtext: "STUDY VISA", id: "countries" },
  { label: "IELTS", subtext: "IELTS COACHING", id: "coaching" },
  { label: "PTE", subtext: "PTE COACHING", id: "coaching" },
  { label: "SERVICES", subtext: "OTHER SERVICES", id: "services" },
  { label: "CONTACT", subtext: "SAY US HI", id: "contact" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`glass-nav transition-all duration-300 bg-white shadow-none ${scrolled ? "py-2" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer py-1"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logoImg}
              alt="Think Positive - Overseas Education"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center group"
              >
                <span className="text-sm font-bold text-slate-800 group-hover:text-brand-primary transition-colors leading-tight">
                  {item.label}
                </span>
                <span className="text-[9px] font-medium text-slate-400 group-hover:text-brand-secondary transition-colors uppercase tracking-wider">
                  {item.subtext}
                </span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#003870] transition-all shadow-md hover:shadow-lg ml-2"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="flex flex-col text-left"
                  >
                    <span className="text-sm font-bold text-slate-800">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                      {item.subtext}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-20 grayscale"
              alt="University Campus"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          </div>

          <div className="section-padding relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                Your Future, Our Priority
              </span>
              <h1 className="text-5xl md:text-7xl leading-[1.1] mb-6 text-slate-900">
                Think Positive, <br />
                <span className="text-brand-primary">Fly Overseas.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Expert guidance for your international education journey. From
                university selection to visa processing, we handle it all with
                precision and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary"
                >
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="btn-outline"
                >
                  Our Services
                </button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i}`}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                      alt="Student"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-500 font-medium">
                    Trusted by 5000+ Students
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop"
                  className="w-full aspect-[4/5] object-cover"
                  alt="Happy Students"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 bg-brand-lime/15 text-brand-lime rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Visa Success Rate
                  </p>
                  <p className="text-xl font-bold text-slate-900">98.5%</p>
                </div>
              </div>
              <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 bg-brand-secondary/15 text-brand-secondary rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="text-xl font-bold text-slate-900">15+ Years</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-brand-primary py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Successful Visas", value: "5000+" },
              { label: "Partner Universities", value: "300+" },
              { label: "Countries Covered", value: "15+" },
              { label: "Expert Counselors", value: "25+" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-blue-200 text-xs font-medium uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Comprehensive Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We provide end-to-end solutions for all your overseas education
              and immigration needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl card-hover"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-brand-primary text-sm font-bold flex items-center gap-1 group">
                  Learn More{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Countries Section */}
        <section id="countries" className="bg-slate-50 section-padding">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl mb-4">Study Destinations</h2>
              <p className="text-slate-500">
                Explore top-ranked universities across the globe. We help you
                choose the best fit for your career goals.
              </p>
            </div>
            <button className="btn-outline py-2 px-4 text-sm">
              View All Countries
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COUNTRIES.map((country, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <h3 className="text-xl">{country.name}</h3>
                </div>
                <p className="text-slate-500 text-sm mb-4">
                  {country.description}
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded uppercase">
                    Top Universities
                  </span>
                  <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold text-slate-600 rounded uppercase">
                    PR Options
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coaching Section */}
        <section id="coaching" className="section-padding">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-6">Master Your English Proficiency</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Achieve your target scores with our expert-led coaching for
                IELTS, PTE, and TOEFL. We provide personalized attention,
                updated study materials, and regular mock tests.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Trainers",
                    desc: "Certified trainers with years of experience in language testing.",
                  },
                  {
                    title: "Flexible Batches",
                    desc: "Morning, afternoon, and evening batches to suit your schedule.",
                  },
                  {
                    title: "Mock Tests",
                    desc: "Weekly full-length mock tests to track your progress.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-secondary/10 text-brand-secondary rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary mt-10">
                Book a Free Demo Class
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-brand-primary p-8 rounded-2xl text-white shadow-lg">
                    <p className="text-5xl font-bold mb-2">IELTS</p>
                    <p className="text-sm opacity-80">
                      Academic & General Training
                    </p>
                  </div>
                  <div className="bg-slate-100 p-8 rounded-2xl">
                    <p className="text-3xl font-bold text-slate-900 mb-2">
                      TOEFL
                    </p>
                    <p className="text-sm text-slate-500">
                      Internet-based Test Preparation
                    </p>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="bg-slate-900 p-8 rounded-2xl text-white">
                    <p className="text-4xl font-bold mb-2">PTE</p>
                    <p className="text-sm opacity-80">
                      Pearson Test of English
                    </p>
                  </div>
                  <div className="bg-brand-accent p-8 rounded-2xl text-white">
                    <p className="text-3xl font-bold mb-2">SPOKEN</p>
                    <p className="text-sm opacity-80">
                      English Communication Skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          id="about"
          className="bg-slate-900 text-white section-padding overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Globe className="w-full h-full text-white" />
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl mb-6">Why Think Positive Overseas?</h2>
              <p className="text-slate-400 text-lg">
                With over 15 years of experience, we have built a reputation for
                transparency, integrity, and success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <ShieldCheck className="w-10 h-10" />,
                  title: "Transparent Process",
                  desc: "No hidden charges or false promises. We keep you informed at every step of your application.",
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Personalized Counseling",
                  desc: "Every student is unique. We provide tailored advice based on your academic background and career goals.",
                },
                {
                  icon: <Clock className="w-10 h-10" />,
                  title: "End-to-End Support",
                  desc: "From university application to pre-departure briefing and post-landing assistance.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-brand-secondary mb-6">{item.icon}</div>
                  <h3 className="text-xl mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What Our Students Say</h2>
            <p className="text-slate-500">
              Real stories from students who achieved their dreams with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm italic"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      Studying in {t.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-slate-50 section-padding">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-5">
            <div className="md:col-span-2 bg-brand-primary p-12 text-white">
              <h2 className="text-3xl mb-8">Get In Touch</h2>
              <p className="text-blue-100 mb-12">
                Have questions? Our expert counselors are here to help you. Fill
                out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-secondary" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                      Call Us
                    </p>
                    <p className="text-lg">
                      <a href="tel:+919780063131">+91 97800 63131</a>
                    </p>
                    <p className="text-lg">
                      <a href="tel:+919361093610">+91 93610 93610</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-secondary" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                      Email Us
                    </p>
                    <p className="text-lg">
                      <a href="mailto:info@thinkpositiveoverseas.in">
                        info@thinkpositiveoverseas.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-secondary" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                      Visit Us
                    </p>
                    <p className="text-lg">
                      406, Guru Hargobind Nagar, Phagwara, Punjab – 144401,
                      India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a
                  href="https://www.facebook.com/Thinkpositiveoverseas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all hover:scale-110 text-white"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/thinkpositiveoverseas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all hover:scale-110 text-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@Thinkpositiveoverseas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube - Think Positive Overseas"
                  title="YouTube - Think Positive Overseas"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all hover:scale-110 text-white"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/@ThinkLearnGrow-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube - Think Learn Grow"
                  title="YouTube - Think Learn Grow"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent transition-all hover:scale-110 text-white"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Interested Country
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all appearance-none bg-white">
                    <option>Select Country</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button className="w-full btn-primary justify-center py-4 text-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div
              className="bg-white px-3 py-2 rounded-xl inline-block mb-6 cursor-pointer shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              onClick={() => scrollToSection("home")}
            >
              <img
                src={logoImg}
                alt="Think Positive - Overseas Education"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for overseas education and immigration. We
              help you navigate the complex process of studying and living
              abroad.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Thinkpositiveoverseas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all hover:scale-110 text-slate-300 hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thinkpositiveoverseas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all hover:scale-110 text-slate-300 hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Thinkpositiveoverseas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube - Think Positive Overseas"
                title="YouTube - Think Positive Overseas"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all hover:scale-110 text-slate-300 hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@ThinkLearnGrow-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube - Think Learn Grow"
                title="YouTube - Think Learn Grow"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all hover:scale-110 text-slate-300 hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("countries")}
                  className="hover:text-white transition-colors"
                >
                  Study Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("coaching")}
                  className="hover:text-white transition-colors"
                >
                  Coaching
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">
              Services
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Student Visa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  PR Visa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visitor Visa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IELTS Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  PTE Coaching
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">
              Newsletter
            </h4>
            <p className="text-sm text-slate-400 mb-4">
              Subscribe to get the latest updates on visa policies and
              university intakes.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-secondary w-full"
                placeholder="Email Address"
              />
              <button className="bg-brand-secondary text-white p-2 rounded-lg hover:bg-brand-primary transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            © 2026 Think Positive Overseas. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
