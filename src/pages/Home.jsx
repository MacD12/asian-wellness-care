import React from 'react';

const WA = (txt) => `https://wa.me/94771234567?text=${encodeURIComponent(txt)}`;

export default function Home(){
  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="container-6xl py-10 sm:py-14">
          <div className="overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="h-[360px] md:h-[540px] bg-[url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <p className="uppercase tracking-[0.2em] text-neutral-300 text-xs">antara-inspired</p>
                <h1 className="mt-2 font-serif text-4xl sm:text-5xl leading-tight">Mobile Spa & Ayurveda, <span className="italic">on-site</span>.</h1>
                <p className="mt-4 text-neutral-200 max-w-md">
                  Asian Wellness Care provides mobile Spa Wellness and Ayurveda for individuals and <strong>therapists on contract</strong> for tourism businesses.
                  On-site within <strong>&lt; 2 hours</strong> between <strong>Galle ↔ Dikwella</strong>.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={WA('Hi AWC, I\'d like to book a mobile spa in [Your Location] at [Time].')} className="rounded-full px-4 py-2 bg-white text-black">Book Mobile Spa (WhatsApp)</a>
                  <a href="/business" className="rounded-full px-4 py-2 border border-white/30">For Tourism Businesses</a>
                  <a href="/packages" className="rounded-full px-4 py-2 border border-white/30">View Packages</a>
                </div>
                <p className="mt-3 text-xs text-neutral-400">
                  No need to inform us days in advance; if outside the corridor, simply provide <strong>2+ hours</strong> notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-6xl py-12 sm:py-20">
        <h2 className="font-serif text-3xl">What We Provide</h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          All services below are available immediately within our corridor. Supplies, tables, linens, and oils provided.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">Spa Wellness — Main</div>
            <p className="text-sm text-neutral-600 mt-1">Mobile Spa Wellness for individuals. Also available at Asian Wellness Centers.</p>
            <a href="/spa" className="inline-flex mt-3 text-sm underline">Explore Spa</a>
          </div>
          <div className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">Spa Wellness Therapists</div>
            <p className="text-sm text-neutral-600 mt-1">Provided to tourism businesses on contract. Coverage across hotels, villas, camps.</p>
            <a href="/business" className="inline-flex mt-3 text-sm underline">Contract options</a>
          </div>
          <div className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">Ayurveda Treatments</div>
            <p className="text-sm text-neutral-600 mt-1">Obtainable through Asian Wellness Centers for individual bookings.</p>
            <a href="/services" className="inline-flex mt-3 text-sm underline">All services</a>
          </div>
          <div className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">Ayurveda Therapists</div>
            <p className="text-sm text-neutral-600 mt-1">Provided to tourism businesses on contract with quality protocols.</p>
            <a href="/business" className="inline-flex mt-3 text-sm underline">Partner with us</a>
          </div>
          <div className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">Meditation Therapists</div>
            <p className="text-sm text-neutral-600 mt-1">For retreats and guest programs on contract.</p>
            <a href="/business" className="inline-flex mt-3 text-sm underline">Partner with us</a>
          </div>
          <div className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">Yoga Therapists</div>
            <p className="text-sm text-neutral-600 mt-1">On contract for tourism partners; sunrise and sunset sessions.</p>
            <a href="/business" className="inline-flex mt-3 text-sm underline">Partner with us</a>
          </div>
        </div>
      </section>

      {/* INDIVIDUALS VS BUSINESSES */}
      <section className="container-6xl py-12 sm:py-20 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl p-8 bg-white border border-neutral-200/70 shadow-sm">
          <h3 className="font-serif text-2xl">For Individuals</h3>
          <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc pl-5">
            <li>Mobile Spa Wellness in your villa, hotel, or home (table & linens included).</li>
            <li>Ayurveda treatments via Asian Wellness Centers.</li>
            <li>On-site in <strong>&lt; 2 hours</strong> between Galle and Dikwella.</li>
          </ul>
          <a href={WA('Hi AWC, I\'m an individual guest at [Location]. Can I book Spa Wellness today at [Time]?')} className="inline-flex mt-4 px-4 py-2 rounded-full bg-black text-white">Book on WhatsApp</a>
        </div>
        <div className="rounded-3xl p-8 bg-white border border-neutral-200/70 shadow-sm">
          <h3 className="font-serif text-2xl">For Tourism Businesses</h3>
          <ul className="mt-3 text-sm text-neutral-600 space-y-2 list-disc pl-5">
            <li>Spa Wellness & Ayurveda therapists on contract.</li>
            <li>Meditation & Yoga therapists for programs and events.</li>
            <li>Surge coverage and VIP call-outs with corridor SLA.</li>
          </ul>
          <a href="/business" className="inline-flex mt-4 px-4 py-2 rounded-full bg-black text-white">View contracts</a>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="container-6xl py-12 sm:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl">Popular Packages</h2>
            <p className="mt-2 text-neutral-600">Transparent pricing. Customize duration, modality, and therapist count.</p>
          </div>
        <a href="/packages" className="hidden md:inline-flex rounded-full px-4 py-2 bg-black text-white">See all packages</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {name:'Mobile Spa Express', desc:'60 min per person • therapist at your location • table & oils provided'},
            {name:'Ayurveda Ritual', desc:'75–90 min abhyanga • herbal head oiling • guided relaxation'},
            {name:'On-Site Team (Lite)', desc:'1 therapist • 6 days/week • perfect for boutique hotels'},
          ].map((p,i)=>(
            <div key={i} className="rounded-2xl p-6 bg-white border border-neutral-200/70 shadow-sm">
              <div className="font-medium">{p.name}</div>
              <p className="text-sm text-neutral-600 mt-1">{p.desc}</p>
              <a href="/packages" className="inline-flex mt-4 text-sm underline">Details</a>
            </div>
          ))}
        </div>
      </section>

      {/* PROMISE & FAQ */}
      <section className="container-6xl pb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-neutral-900 text-white">
          <h2 className="font-serif text-3xl">Our Promise</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">Under 2 Hours</div><p className="text-neutral-300 mt-1">On-site within &lt; 2 hours in the Galle–Dikwella corridor.</p></div>
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">Minimal Notice</div><p className="text-neutral-300 mt-1">No multi-day notice needed; outside corridor, give 2+ hours.</p></div>
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">We Bring Everything</div><p className="text-neutral-300 mt-1">Tables, linens, Ayurveda-grade oils, and calming sound.</p></div>
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">For Individuals & Businesses</div><p className="text-neutral-300 mt-1">Mobile Spa, Ayurveda, Meditation, and Yoga therapists.</p></div>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-2xl">FAQ</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="font-medium">Do I need to book days ahead?</div>
                <p className="text-neutral-300 mt-1">No. Within the corridor, we respond under 2 hours. Outside the corridor, 2+ hours notice is enough.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-5">
                <div className="font-medium">What should I prepare?</div>
                <p className="text-neutral-300 mt-1">Just a quiet space. We handle the rest. Please inform us of any injuries or sensitivities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
