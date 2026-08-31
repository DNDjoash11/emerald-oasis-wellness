import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Music2,
  Star,
  Check,
} from "lucide-react";

import heroImg from "@/assets/hero-massage.jpg";
import experienceImg from "@/assets/experience-massage.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { BookingForm } from "@/components/site/BookingForm";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const title = "CTHEMESSAGETHERAPIST | Professional Massage Therapy";
const description =
  "Relax your body and restore your mind with personalised massage therapy. Relaxation, deep tissue, sports recovery and full body sessions. Book your massage today.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    name: "Relaxation Massage",
    duration: "60 Minutes",
    text: "A gentle, calming massage designed to help you relax, unwind and release everyday tension.",
  },
  {
    name: "Deep Tissue Massage",
    duration: "60 / 90 Minutes",
    text: "A more focused massage targeting areas of muscle tightness and tension.",
  },
  {
    name: "Back, Neck & Shoulders",
    duration: "30 / 45 Minutes",
    text: "A targeted session focusing on common areas where stress and tension build up.",
  },
  {
    name: "Full Body Massage",
    duration: "60 / 90 Minutes",
    text: "A complete full-body experience designed to help you relax and leave feeling refreshed.",
  },
  {
    name: "Sports & Recovery",
    duration: "60 Minutes",
    text: "A focused massage option for active clients looking to support muscle recovery and relaxation.",
  },
];

const highlights = [
  { title: "Personalised Care", text: "Every session is adapted to your needs and comfort." },
  {
    title: "Relaxing Experience",
    text: "A peaceful environment where you can switch off and unwind.",
  },
  {
    title: "Professional Service",
    text: "A friendly, respectful and professional experience from start to finish.",
  },
  {
    title: "Your Comfort Matters",
    text: "Your comfort, privacy and experience always come first.",
  },
];

const whyCards = [
  {
    emoji: "🌿",
    title: "Personalised",
    text: "Your session is tailored to your individual preferences and needs.",
  },
  {
    emoji: "🤍",
    title: "Relaxing",
    text: "Take a break from the outside world and enjoy time dedicated entirely to you.",
  },
  {
    emoji: "✨",
    title: "Professional",
    text: "Experience friendly, respectful and professional service.",
  },
  {
    emoji: "🧘",
    title: "Comfort First",
    text: "Your comfort and privacy are our priority throughout your appointment.",
  },
];

const pricing = [
  { duration: "30 Minutes", price: "R___", text: "Targeted massage session." },
  {
    duration: "60 Minutes",
    price: "R___",
    text: "Perfect for a complete massage experience.",
    featured: true,
  },
  {
    duration: "90 Minutes",
    price: "R___",
    text: "Extended session for deeper relaxation and a more comprehensive experience.",
  },
];

const steps = [
  { no: "01", title: "Book", text: "Choose your treatment and preferred appointment time." },
  {
    no: "02",
    title: "Arrive",
    text: "Come in, get comfortable and let us know what you'd like from your session.",
  },
  { no: "03", title: "Relax", text: "Enjoy a personalised massage experience." },
  {
    no: "04",
    title: "Recharge",
    text: "Leave feeling relaxed, refreshed and ready for the rest of your day.",
  },
];

const testimonials = [
  {
    heading: "Absolutely amazing experience.",
    text: "I felt comfortable from the moment I arrived. The massage was exactly what I needed.",
  },
  {
    heading: "So relaxing.",
    text: "Professional, friendly and such a peaceful environment. I'll definitely be coming back.",
  },
  {
    heading: "Highly recommended.",
    text: "I left feeling refreshed and relaxed. The entire experience was excellent.",
  },
];

const faqs = [
  {
    q: "How do I book a massage?",
    a: "Click Book Now and choose your preferred service and appointment time.",
  },
  {
    q: "How long are the sessions?",
    a: "Sessions are available in different durations depending on the treatment.",
  },
  {
    q: "Can I request a specific area to focus on?",
    a: "Yes. Let your therapist know which areas you'd like to focus on before your session.",
  },
  {
    q: "What should I wear?",
    a: "Wear comfortable clothing. Your therapist will explain everything you need to know before your treatment.",
  },
  {
    q: "Can I reschedule my appointment?",
    a: "Yes. Please contact us as soon as possible if you need to change your appointment.",
  },
  {
    q: "Do I need to arrive early?",
    a: "Arriving approximately 5–10 minutes before your appointment is recommended.",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">{children}</p>
  );
}

function Index() {
  return (
    <div className="scroll-smooth bg-background font-sans text-foreground antialiased">
      <SiteNav />

      {/* HERO */}
      <section id="home" className="relative isolate min-h-[92vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Calm massage therapy room with fresh towels and eucalyptus"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-5 pt-28 pb-16 lg:px-8">
          <div className="max-w-2xl animate-[var(--animate-fade-up)]">
            <Label>Professional Massage Therapy</Label>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-medium text-forest sm:text-6xl lg:text-7xl">
              Relax Your Body.
              <br />
              Restore Your Mind.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Take a moment for yourself. At <strong className="text-forest">CTHEMESSAGETHERAPIST</strong>, every
              session is designed to help you relax, release everyday tension and leave feeling
              refreshed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="hero" size="pill" asChild>
                <a href="#booking">Book Your Massage</a>
              </Button>
              <Button variant="heroOutline" size="pill" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {["Personalised Sessions", "Professional Service", "Relaxing Environment"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-forest">
                  <Check className="size-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Label>About CTHEMESSAGETHERAPIST</Label>
            <h2 className="mt-5 font-display text-4xl leading-tight text-forest sm:text-5xl">
              Your Body Deserves To Be Taken Care Of.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Life can leave your body feeling tired, tense and overwhelmed.</p>
              <p>
                CTHEMESSAGETHERAPIST provides personalised massage experiences designed around your
                individual needs.
              </p>
              <p>
                Whether you're looking to relax after a long week, relieve muscle tension or simply
                dedicate some time to yourself, we're here to help you feel your best.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl bg-secondary p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl text-forest">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Label>Our Services</Label>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Massage Designed Around You.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the treatment that best suits your body and what you need from your session.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.name}
                className="flex flex-col rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <p className="text-xs tracking-[0.2em] text-primary uppercase">{s.duration}</p>
                <h3 className="mt-3 font-display text-3xl text-forest">{s.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <Button variant="heroOutline" size="pill" className="mt-7 self-start" asChild>
                  <a href="#booking">Book Now</a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <Label>Simple &amp; Transparent</Label>
          <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">Choose Your Session</h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.duration}
                className={
                  p.featured
                    ? "rounded-3xl bg-primary p-10 text-primary-foreground shadow-[var(--shadow-lift)] lg:-mt-4 lg:pb-14"
                    : "rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)]"
                }
              >
                <p
                  className={
                    p.featured
                      ? "text-xs tracking-[0.24em] text-primary-foreground/80 uppercase"
                      : "text-xs tracking-[0.24em] text-primary uppercase"
                  }
                >
                  {p.duration}
                </p>
                <p className="mt-5 font-display text-5xl">{p.price}</p>
                <p
                  className={
                    p.featured
                      ? "mt-4 text-sm text-primary-foreground/80"
                      : "mt-4 text-sm text-muted-foreground"
                  }
                >
                  {p.text}
                </p>
                <Button
                  variant={p.featured ? "onDark" : "hero"}
                  size="pill"
                  className="mt-8 w-full"
                  asChild
                >
                  <a href="#booking">Book Now</a>
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Prices may vary depending on the selected treatment.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl text-forest sm:text-5xl">
            More Than A Massage. It's Time For You.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl">{c.emoji}</span>
                <h3 className="mt-4 text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <img
            src={experienceImg}
            alt="Client enjoying a relaxing shoulder massage"
            width={1200}
            height={1408}
            loading="lazy"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)] lg:h-[560px]"
          />
          <div>
            <h2 className="font-display text-4xl text-forest sm:text-5xl">Leave The Stress Behind.</h2>
            <div className="mt-6 space-y-3 text-muted-foreground">
              <p>From the moment you arrive, your experience should feel calm and comfortable.</p>
              <p>Put your phone away.</p>
              <p>Take a breath.</p>
              <p>Let your body relax.</p>
              <p>Allow yourself time to reset.</p>
            </div>
            <Button variant="hero" size="pill" className="mt-9" asChild>
              <a href="#booking">Book Your Experience</a>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-4xl text-forest sm:text-5xl">Your Journey Starts Here.</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.no} className="rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)]">
                <p className="font-display text-4xl text-primary/40">{s.no}</p>
                <h3 className="mt-3 text-sm font-semibold tracking-[0.18em] text-forest uppercase">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <Label>Client Experiences</Label>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.heading}
                className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5">
                  <p className="font-display text-2xl text-forest">“{t.heading}”</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-primary">— Client</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIAL OFFER */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="text-xs tracking-[0.28em] text-primary-foreground/75 uppercase">
            Limited-Time Offer
          </p>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">Your Body Deserves A Break.</h2>
          <p className="mt-4 text-primary-foreground/85">
            Book your next massage and make time for yourself.
          </p>
          <Button variant="onDark" size="pill" className="mt-8" asChild>
            <a href="#booking">Book Now</a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="text-center font-display text-4xl text-forest sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left font-display text-xl text-forest hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div className="lg:sticky lg:top-28">
            <Label>Ready To Relax?</Label>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Book Your Massage Today.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Select your treatment, choose your preferred date and time, and take the first step
              toward giving your body the care it deserves.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-muted py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Label>Get In Touch</Label>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">We're Here For You.</h2>
            <p className="mt-5 text-muted-foreground">
              Have a question before booking? Contact us and we'll be happy to assist.
            </p>
            <Button variant="hero" size="pill" className="mt-8" asChild>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Message Us On WhatsApp
              </a>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Phone, label: "Phone", value: "[Your Number]" },
              { icon: MessageCircle, label: "WhatsApp", value: "[Your WhatsApp Number]" },
              { icon: Mail, label: "Email", value: "[Your Email]" },
              { icon: MapPin, label: "Location", value: "[Your Location]" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-3xl bg-card p-7 shadow-[var(--shadow-soft)]">
                <Icon className="size-5 text-primary" />
                <p className="mt-4 text-xs tracking-[0.2em] text-primary uppercase">{label}</p>
                <p className="mt-1 text-sm text-forest">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-secondary py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <Label>Follow The Journey</Label>
          <p className="mt-4 font-display text-3xl text-forest sm:text-4xl">
            @CTHEMESSAGETHERAPIST
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Follow us for wellness tips, updates, availability and special offers.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Music2, label: "TikTok" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-12 place-items-center rounded-full bg-card text-primary shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-2xl tracking-[0.12em] uppercase">
                CTheMessageTherapist
              </p>
              <p className="mt-3 text-sm tracking-[0.2em] text-primary-foreground/70 uppercase">
                Relax. Restore. Rejuvenate.
              </p>
              <p className="mt-5 max-w-sm text-sm text-primary-foreground/75">
                Professional massage therapy focused on helping you feel relaxed, refreshed and cared
                for.
              </p>
            </div>
            <nav className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-primary-foreground">
                  {l.label}
                </a>
              ))}
            </nav>
            <div>
              <Button variant="onDark" size="pill" asChild>
                <a href="#booking">Book Now</a>
              </Button>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-primary-foreground/80">
                <a href="#" className="hover:text-primary-foreground">
                  Instagram
                </a>
                <a href="#" className="hover:text-primary-foreground">
                  Facebook
                </a>
                <a href="#" className="hover:text-primary-foreground">
                  TikTok
                </a>
                <a href="https://wa.me/" className="hover:text-primary-foreground">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-primary-foreground/15 pt-8 text-xs leading-relaxed text-primary-foreground/60">
            <p>© 2026 CTHEMESSAGETHERAPIST. All Rights Reserved.</p>
            <p className="mt-3 max-w-3xl">
              Disclaimer: Massage therapy is intended for relaxation and general wellness and is not
              a substitute for medical diagnosis or treatment. Please inform your therapist of any
              relevant concerns before your session.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
