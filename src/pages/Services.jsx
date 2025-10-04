import React from 'react';

export default function Services(){
  return (
    <main>
      <section className="container-6xl py-10">
        <div className="rounded-3xl overflow-hidden bg-white shadow-sm border border-neutral-200/70">
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h1 className="font-serif text-4xl leading-tight">Services</h1>
              <p className="mt-4 text-neutral-600">We provide mobile Spa Wellness for individuals and supply therapists on contract for tourism businesses. Coverage: <strong>Galle ↔ Dikwella</strong>. On-site in <strong>&lt; 2 hours</strong>.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70"><strong>Spa Wellness — Main</strong> — Mobile spa for individuals (book via AWC). Also at Asian Wellness Centers.</div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70"><strong>Spa Wellness therapists</strong> — Provided to tourism businesses on contract.</div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70"><strong>Ayurveda treatments</strong> — Available through Asian Wellness Centers.</div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70"><strong>Ayurveda therapists</strong> — Provided to tourism businesses on contract.</div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70"><strong>Meditation therapists</strong> — Provided to tourism businesses on contract.</div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70"><strong>Yoga therapists</strong> — Provided to tourism businesses on contract.</div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="/packages" className="rounded-full px-4 py-2 bg-black text-white">View Packages</a>
                <a href="/business" className="rounded-full px-4 py-2 border border-neutral-300">Partner with us</a>
              </div>
            </div>
            <div className="min-h-[300px] bg-[url('https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"/>
          </div>
        </div>
      </section>

      <section className="container-6xl pb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-neutral-900 text-white">
          <h2 className="font-serif text-3xl">Mobile Spa & On-Site Response</h2>
          <p className="mt-3 text-neutral-200 max-w-2xl">From call to care in under two hours (within corridor). Outside the corridor, please provide 2+ hours notice. We bring massage tables, linens, Ayurveda-grade oils, and calming sound.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">Individuals</div><p className="text-neutral-300 mt-1">Same-day service. WhatsApp is fastest.</p></div>
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">Hotels & Tourism</div><p className="text-neutral-300 mt-1">Contracted therapists for spikes, retreats, and VIPs.</p></div>
            <div className="rounded-2xl bg-white/5 p-5"><div className="font-medium">Quality & Safety</div><p className="text-neutral-300 mt-1">Protocols for hygiene, draping, and therapist ID.</p></div>
          </div>
        </div>
      </section>
    </main>
  )
}
