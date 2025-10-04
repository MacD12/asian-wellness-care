import React from 'react';

const Pkg = ({name, price, features}) => (
  <div className="rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm">
    <div className="font-serif text-2xl">{name}</div>
    <div className="text-neutral-500 mt-1">{price}</div>
    <ul className="mt-4 space-y-2 text-sm text-neutral-600 list-disc pl-5">
      {features.map((f,i)=>(<li key={i}>{f}</li>))}
    </ul>
    <a href="/contact" className="inline-flex mt-5 px-4 py-2 rounded-full bg-black text-white">Request / Book</a>
  </div>
);

export default function Packages(){
  return (
    <main className="container-6xl py-12 sm:py-16">
      <div className="rounded-3xl overflow-hidden bg-neutral-900 text-white shadow-xl">
        <div className="grid md:grid-cols-2">
          <div className="h-[260px] md:h-[400px] bg-[url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="font-serif text-4xl leading-tight">Packages</h1>
            <p className="mt-4 text-neutral-200">Flexible options for individuals and tourism partners. Same-day service available within Galle–Dikwella.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Pkg name="Mobile Spa Express" price="LKR 9,900 / 60 min (per person)"
          features={[
            "Any one: Deep Tissue / Swedish / Relaxing",
            "Therapist at your location",
            "Table, linens, premium oils",
            "Available 8:00–21:00",
          ]} />
        <Pkg name="Holistic Duo" price="LKR 18,900 / 2 x 60 min"
          features={[
            "Couples or two guests, back-to-back",
            "Choose from Massage + Head/Foot",
            "Aromatherapy add-on included",
            "Great for villas & surf camps",
          ]} />
        <Pkg name="Ayurveda Ritual" price="LKR 14,900 / 75–90 min"
          features={[
            "Abhyanga full-body massage",
            "Herbal head oiling (optional)",
            "Guided breath & relaxation",
            "Consultation with therapist",
          ]} />
        <Pkg name="On-Site Team (Lite)" price="From LKR 180,000 / month"
          features={[
            "1 therapist, 6 days a week",
            "Hotel or tourism partner contract",
            "Supplies & scheduling handled by AWC",
            "Emergency surge support",
          ]} />
        <Pkg name="On-Site Team (Standard)" price="From LKR 320,000 / month"
          features={[
            "2 therapists in shifts",
            "Ayurveda + Spa modalities",
            "Monthly performance & hygiene audits",
            "Priority under-2h call-outs",
          ]} />
        <Pkg name="Mind & Movement" price="Custom / event rate"
          features={[
            "Meditation guide + Yoga therapist",
            "Sunrise or sunset sessions",
            "Ideal for groups & retreats",
            "Mats & sound included",
          ]} />
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-white border border-neutral-200/70 shadow-sm">
          <div className="font-serif text-2xl">Individuals — How to Book</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600 space-y-2">
            <li>Message us on WhatsApp with location, preferred time, and modality.</li>
            <li>We confirm ETA (usually under 2 hours in corridor) and therapist details.</li>
            <li>We arrive with table, linens, oils, and music. Card/cash/online accepted.</li>
          </ul>
        </div>
        <div className="rounded-2xl p-6 bg-white border border-neutral-200/70 shadow-sm">
          <div className="font-serif text-2xl">Businesses — Contract Tiers</div>
          <table className="w-full mt-3 text-sm">
            <thead><tr className="text-left text-neutral-500"><th className="py-2">Tier</th><th className="py-2">Therapists</th><th className="py-2">Focus</th><th className="py-2">SLA</th></tr></thead>
            <tbody className="text-neutral-700">
              <tr className="border-t"><td className="py-2">Lite</td><td className="py-2">1</td><td className="py-2">Spa or Ayurveda</td><td className="py-2">&lt; 2h corridor</td></tr>
              <tr className="border-t"><td className="py-2">Standard</td><td className="py-2">2 (shifts)</td><td className="py-2">Spa + Ayurveda</td><td className="py-2">Priority call-outs</td></tr>
              <tr className="border-t"><td className="py-2">Premium</td><td className="py-2">3+</td><td className="py-2">Spa + Ayurveda + Meditation/Yoga</td><td className="py-2">Event surge coverage</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
