import { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Clock,
  MapPin,
  Car,
  Plane,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
  Quote,
  CheckCircle2,
  Menu,
  X
} from "lucide-react";

// Nieuwe lichte stijl met wit + blauw (#0089CF)
const BRAND = {
  blue: "#0089CF",
};

const NAV = [
  { label: "Waarom CabCall", href: "#usp" },
  { label: "Tarieven", href: "#tarieven" },
  { label: "Werkgebied", href: "#gebied" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact & Reserveren", href: "#contact" }
];

const usp = [
  {
    icon: <ShieldCheck className="h-6 w-6" aria-hidden />,
    title: "Betrouwbaar familiebedrijf",
    text:
      "Meer dan 25 jaar ervaring in personenvervoer. Persoonlijk, veilig en netjes."
  },
  {
    icon: <BadgeCheck className="h-6 w-6" aria-hidden />,
    title: "Eerlijke, transparante prijzen",
    text:
      "Heldere tarieven en vooraf prijsvoorbeelden voor populaire luchthavens."
  },
  {
    icon: <Clock className="h-6 w-6" aria-hidden />,
    title: "Op tijd = standaard",
    text:
      "We plannen slim en houden rekening met spits en omleidingen."
  },
  {
    icon: <Car className="h-6 w-6" aria-hidden />,
    title: "Comfortabele sedans (t/m 4 p.)",
    text:
      "Schoon en verzorgd vervoer voor particulieren en zakelijk."
  }
];

const faqs = [
  {
    q: "Wat zijn jullie openingstijden?",
    a: "Wij zijn van maandag t/m vrijdag bereikbaar van 07:00 – 20:00 uur. Buiten deze tijden hanteren wij variabele openingstijden en rijden wij op aanvraag/afspraak."
  },
  {
    q: "Rijden jullie buiten Eindhoven?",
    a: "Ja. Ons vaste werkgebied is Eindhoven, Veldhoven, Waalre, Valkenswaard, Geldrop, Nuenen, Son & Breugel en Best. Rit buiten de regio of naar luchthavens? Geen probleem – prijs op aanvraag."
  },
  {
    q: "Wat kost een rit naar Schiphol?",
    a: "Als richtprijs: Eindhoven → Schiphol vanaf € 200 voor 1 t/m 4 personen. Exacte prijs op aanvraag en afhankelijk van ophaaladres, datum/tijd en eventuele wachttijd."
  },
  {
    q: "Hoe snel kan ik een taxi krijgen?",
    a: "Bel ons voor de snelste beschikbaarheid. Voor direct vervoer adviseren wij bellen. Voor later plannen kan het online reserveringsformulier worden gebruikt."
  },
  {
    q: "Welke voertuigen zetten jullie in?",
    a: "Standaard personenauto’s tot maximaal 4 passagiers. Voor specifieke wensen kunt u dit aangeven in het opmerkingenveld bij uw reservering."
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-white shadow ring-1 ring-inset"
            style={{ backgroundColor: BRAND.blue, boxShadow: `0 6px 16px rgba(0,137,207,.25)` }}
          >
            <Car aria-hidden className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-neutral-900">
            CabCall <span className="hidden sm:inline">Eindhoven</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-neutral-600 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-neutral-900">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium text-white shadow-md hover:opacity-90"
            style={{ backgroundColor: BRAND.blue }}
          >
            <PhoneCall className="h-4 w-4" /> Bel of reserveer
          </a>
        </nav>

        <button
          className="md:hidden text-neutral-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigatie"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6 lg:px-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 font-medium text-white"
              style={{ backgroundColor: BRAND.blue, boxShadow: `0 6px 16px rgba(0,137,207,.25)` }}
            >
              <PhoneCall className="h-4 w-4" /> Bel of reserveer
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(0,137,207,0.12),rgba(255,255,255,0)_60%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl"
          >
            Taxi in Eindhoven & regio –
            <br className="hidden sm:block" />
            <span style={{ color: BRAND.blue }}> snel, eerlijk en comfortabel</span>
          </motion.h1>
          <p className="mt-5 max-w-xl text-pretty text-neutral-600">
            CabCall is uw partner in mobiliteit. Kies voor een zorgeloze rit met
            duidelijke tarieven en vriendelijke chauffeurs. Bel direct of plan
            uw rit eenvoudig online.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:0408424858"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold text-white shadow-lg"
              style={{ backgroundColor: BRAND.blue, boxShadow: `0 8px 24px rgba(0,137,207,.28)` }}
            >
              <PhoneCall className="h-5 w-5" /> 040 – 842 48 58
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-50"
            >
              Online reserveren <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-neutral-500">
            <div className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" /> ma–vr 07:00–20:00, daarbuiten op
              aanvraag
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> 25+ jaar ervaring
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-xl"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-xl bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
              Snelle prijsaanvraag
            </span>
          </div>
          <BookingForm />
          <p className="mt-3 text-xs text-neutral-500">
            Voor directe ritten: altijd bellen voor de snelste bevestiging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="grid grid-cols-1 gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="grid gap-1">
        <span className="text-sm text-neutral-700">Naam</span>
        <input
          required
          type="text"
          placeholder="Uw naam"
          className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2"
          style={{ outline: "none", boxShadow: `0 0 0 0 rgba(0,0,0,0)`,
                   borderColor: "#E5E7EB" }}
        />
      </label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm text-neutral-700">E‑mail</span>
          <input
            required
            type="email"
            placeholder="u@bedrijf.nl"
            className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-neutral-700">Telefoon</span>
          <input
            required
            type="tel"
            placeholder="040 842 4858"
            className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm text-neutral-700">Ophaaldatum</span>
          <input
            required
            type="date"
            className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm text-neutral-700">Tijd</span>
          <input
            required
            type="time"
            className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
          />
        </label>
      </div>
      <label className="grid gap-1">
        <span className="text-sm text-neutral-700">Ophaaladres</span>
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
          <input
            required
            type="text"
            placeholder="Bijv. Stationsplein 1, Eindhoven"
            className="w-full rounded-xl border border-neutral-300 bg-white px-9 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
          />
        </div>
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-neutral-700">Bestemming</span>
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
          <input
            required
            type="text"
            placeholder="Bijv. Schiphol, Amsterdam"
            className="w-full rounded-xl border border-neutral-300 bg-white px-9 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
          />
        </div>
      </label>
      <label className="grid gap-1">
        <span className="text-sm text-neutral-700">Opmerkingen (optioneel)</span>
        <textarea
          rows={3}
          placeholder="Bijv. kinderzitje, extra koffers, voorkeur ophaallocatie…"
          className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[rgba(0,137,207,.25)]"
        />
      </label>
      <button
        type="submit"
        className="group mt-1 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold text-white"
        style={{ backgroundColor: BRAND.blue, boxShadow: `0 8px 24px rgba(0,137,207,.28)` }}
      >
        Prijsaanvraag versturen <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" />
      </button>
      {submitted && (
        <p className="text-sm" style={{ color: BRAND.blue }}>
          Bedankt! We nemen zo snel mogelijk contact met u op om te bevestigen.
        </p>
      )}
    </form>
  );
}

function USP() {
  return (
    <section id="usp" className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {usp.map((u) => (
          <div key={u.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-xl p-2" style={{ backgroundColor: "#E6F4FB", color: BRAND.blue }}>
              {u.icon}
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{u.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tarieven() {
  return (
    <section id="tarieven" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Tarieven & prijsvoorbeelden
          </h2>
          <p className="mt-3 text-neutral-600">
            Transparant en duidelijk. Voor ritten binnen 30 km gelden de
            onderstaande basistarieven. Voor langere afstanden bieden we scherpe
            vaste prijzen op aanvraag.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900">
              Basistarieven (tot 30 km)
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Starttarief <strong className="ml-1">€ 4,02</strong></li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Kilometertarief <strong className="ml-1">€ 2,96 / km</strong></li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Minuuttarief <strong className="ml-1">€ 0,49 / min</strong></li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Wachttarief <strong className="ml-1">€ 55,35 / uur</strong></li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">
              * Officiële ritprijs afhankelijk van afstand, tijd en route. Vraag
              een vaste prijs aan bij reservering.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-neutral-900">
              <Plane className="h-5 w-5" style={{ color: BRAND.blue }} /> Luchthavenvoorbeelden (1–4 p.)
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Eindhoven → Amsterdam Schiphol <strong className="ml-1">v.a. € 200</strong></li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Eindhoven → Brussel (Zaventem) <strong className="ml-1">v.a. € 230</strong></li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" style={{ color: BRAND.blue }} /> Eindhoven → Düsseldorf Airport <strong className="ml-1">v.a. € 200</strong></li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">
              * Richtprijzen. Definitieve vaste prijs ontvangt u bij
              bevestiging.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900">Zakelijk & privé</h3>
            <p className="mt-3 text-sm text-neutral-700">
              Dagelijks vervoer binnen de regio of een internationaal vliegveld?
              Wij denken mee over planning en tijdspad, zodat u ontspannen
              aankomt. Factuur per e‑mail na afloop is mogelijk.
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 font-medium" style={{ color: BRAND.blue }}>
              Vraag een vaste prijs aan <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gebied() {
  return (
    <section id="gebied" className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Werkgebied regio Eindhoven
          </h2>
          <p className="mt-3 text-neutral-600">
            We rijden o.a. in: Eindhoven, Veldhoven, Waalre, Valkenswaard,
            Geldrop, Nuenen, Son & Breugel en Best. Lange afstand of rit buiten
            de regio? Neem gerust contact op.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Eindhoven", "Veldhoven", "Waalre", "Valkenswaard", "Geldrop", "Nuenen", "Son & Breugel", "Best"].map(
            (place) => (
              <div
                key={place}
                className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-center text-sm text-neutral-800 shadow-sm"
              >
                {place}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function Werkwijze() {
  const steps = [
    {
      title: "Bel of boek online",
      text: "Voor direct vervoer: bellen. Voor later: online reserveren met uw gegevens en bestemming.",
      icon: <PhoneCall className="h-5 w-5" />
    },
    {
      title: "Snelle bevestiging",
      text: "We nemen contact op om tijd en prijs (desgewenst vast) te bevestigen.",
      icon: <BadgeCheck className="h-5 w-5" />
    },
    {
      title: "We halen u op",
      text: "U ontvangt een duidelijke ophaallocatie. Chauffeur helpt met bagage.",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      title: "Comfortabele rit",
      text: "Rustig op weg met ervaren chauffeur. Na afloop ontvangt u indien gewenst een factuur per e‑mail.",
      icon: <Car className="h-5 w-5" />
    }
  ];
  return (
    <section id="werkwijze" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Zo werkt het
          </h2>
          <p className="mt-3 text-neutral-600">
            Onze werkwijze is helder en zonder verrassingen. Dit mag u van ons
            verwachten.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex items-center justify-center rounded-xl p-2" style={{ backgroundColor: "#E6F4FB", color: BRAND.blue }}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewStrip() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900">
              Waar klanten ons om waarderen
            </h3>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5" style={{ color: BRAND.blue }} /> Vriendelijke, hulpvaardige chauffeurs</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5" style={{ color: BRAND.blue }} /> Zorgvuldige planning en op tijd ophalen</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 h-5 w-5" style={{ color: BRAND.blue }} /> Netjes en comfortabel rijden</li>
            </ul>
          </div>
          <figure className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2" style={{ color: BRAND.blue }}>
              <Quote className="h-5 w-5" />
              <span className="text-sm">Klantenervaring</span>
            </div>
            <blockquote className="mt-2 text-neutral-800">
              “Super service. Ruim op tijd aanwezig en heerlijk ontspannen rit
              naar Schiphol. Aanrader voor iedereen in regio Eindhoven.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-neutral-500">
              — Review naar voorbeeld van tevreden klanten (indicatief)
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Veelgestelde vragen
          </h2>
          <p className="mt-3 text-neutral-600">
            Staat uw vraag er niet bij? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white shadow-sm">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-neutral-900">
                {f.q}
                <span className="group-open:rotate-90" style={{ color: BRAND.blue }}>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Contact & reserveren
            </h2>
            <p className="mt-4 text-neutral-600">
              Voor de snelste bevestiging van een rit adviseren wij bellen. Wilt
              u vooruit plannen of een vaste prijs ontvangen? Vul dan het
              formulier in.
            </p>

            <div className="mt-6 space-y-3 text-neutral-800">
              <a href="tel:0408424858" className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ backgroundColor: BRAND.blue }}>
                  <PhoneCall className="h-5 w-5" />
                </span>
                <span className="text-lg font-semibold">040 – 842 48 58</span>
              </a>
              <a
                href="mailto:info@cabcall.nl"
                className="flex items-center gap-3 hover:underline"
                style={{ color: BRAND.blue }}
              >
                info@cabcall.nl
              </a>
              <p className="flex items-center gap-2 text-sm text-neutral-500">
                <Clock className="h-4 w-4" /> ma–vr 07:00–20:00 · daarbuiten op
                aanvraag/afspraak
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
                <Plane className="h-5 w-5" style={{ color: BRAND.blue }} /> Vaste prijs naar de luchthaven?
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Geef uw vluchtgegevens en gewenste ophaaltijd door; we sturen u
                een scherpe, vaste prijs terug.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-900">
              Reserveringsformulier
            </h3>
            <BookingForm />
          </div>
        </div>

        <div className="mt-14 grid items-center gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <h4 className="text-base font-semibold text-neutral-900">Over CabCall</h4>
            <p className="mt-2 text-sm text-neutral-600">
              CabCall is een lokaal familiebedrijf met meer dan 25 jaar
              ervaring. We bieden particulier en zakelijk vervoer in Eindhoven
              en omliggende gemeenten, met duidelijke afspraken en nette
              chauffeurs.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-700 sm:grid-cols-4">
            <li className="rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm">Particulier vervoer</li>
            <li className="rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm">Zakelijk vervoer</li>
            <li className="rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm">Luchthavenvervoer</li>
            <li className="rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-sm">Regionaal & lange afstand</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl text-white" style={{ backgroundColor: BRAND.blue }}>
              <Car className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-neutral-900">CabCall Eindhoven</p>
              <p className="text-xs text-neutral-500">© {new Date().getFullYear()} CabCall – Alle rechten voorbehouden</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-neutral-600">
            <a href="#tarieven" className="hover:text-neutral-900">Tarieven</a>
            <a href="#faq" className="hover:text-neutral-900">FAQ</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </div>

      {/* Sticky mobile call-to-action */}
      <div className="fixed inset-x-0 bottom-4 z-40 mx-auto w-full max-w-xl px-4 md:hidden">
        <div className="rounded-2xl p-2 shadow-xl" style={{ backgroundColor: BRAND.blue, boxShadow: `0 14px 32px rgba(0,137,207,.35)` }}>
          <a
            href="tel:0408424858"
            className="flex items-center justify-center gap-3 text-base font-semibold text-white"
          >
            <PhoneCall className="h-5 w-5" /> Bel direct 040 – 842 48 58
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function CabCallLanding() {
  return (
    <main className="min-h-[100dvh] bg-white text-neutral-900">
      {/* Basic SEO / JSON-LD for prototype purposes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "CabCall Eindhoven",
            areaServed: [
              "Eindhoven",
              "Veldhoven",
              "Waalre",
              "Valkenswaard",
              "Geldrop",
              "Nuenen",
              "Son en Breugel",
              "Best"
            ],
            telephone: "+31408424858",
            email: "info@cabcall.nl",
            url: "https://www.cabcall.nl/",
            priceRange: "€€",
            openingHours: ["Mo-Fr 07:00-20:00"],
            makesOffer: [
              { "@type": "Offer", name: "Rit binnen 30 km", priceCurrency: "EUR" },
              { "@type": "Offer", name: "Airport transfer (Schiphol/Zaventem/Düsseldorf)", priceCurrency: "EUR" }
            ]
          })
        }}
      />

      <Header />
      <Hero />
      <USP />
      <Tarieven />
      <Gebied />
      <Werkwijze />
      <ReviewStrip />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
