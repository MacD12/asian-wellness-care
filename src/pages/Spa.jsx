import React from 'react';

export default function Spa(){
  return (
    <main>
      <section className="container-6xl py-10">
        <div className="rounded-3xl overflow-hidden bg-neutral-900 text-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="h-[280px] md:h-[420px] bg-[url('https://images.unsplash.com/photo-1556228578-389cca4d4d1a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h1 className="font-serif text-4xl leading-tight">Spa Wellness — Main</h1>
              <p className="mt-4 text-neutral-200">Signature mobile spa experiences delivered to your villa, hotel, or home. Premium tables, linens, and Ayurveda-grade oils included.</p>
              <p className="mt-3 text-neutral-300 text-sm">Coverage: <strong>Galle ↔ Dikwella</strong> • Response: <strong>&lt; 2 hours</strong> • Outside corridor: give <strong>2+ hours</strong> notice.</p>
              <div className="mt-5 flex gap-3">
                <a href="/packages" className="rounded-full px-4 py-2 bg-white text-black">View Packages</a>
                <a href="/contact" className="rounded-full px-4 py-2 border border-white/30">Book by WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-6xl pb-10 grid lg:grid-cols-3 gap-6">
        {[
          {t:'Deep Tissue', d:'For surfers and active guests. Focused pressure, mobility, and breath work.'},
          {t:'Swedish / Relaxation', d:'Long flowing strokes, gentle pressure, nervous-system downshift.'},
          {t:'Ayurveda Abhyanga', d:'Warm herbal oils, rhythmic strokes, head & scalp nourishment.'},
          {t:'Foot & Head Ritual', d:'Grounding foot massage + oil head massage. Perfect add-on.'},
          {t:'After-Surf Restore', d:'Back, hips, and shoulders protocol with guided breathing.'},
          {t:'Couples Setup', d:'Two therapists on request (subject to availability).'},
        ].map((m,i)=>(
          <div key={i} className="rounded-2xl p-5 bg-white border border-neutral-200/70 shadow-sm">
            <div className="font-medium">{m.t}</div>
            <p className="text-sm text-neutral-600 mt-1">{m.d}</p>
          </div>
        ))}
      </section>

      <section className="container-6xl pb-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl p-6 bg-white border border-neutral-200/70 shadow-sm">
          <div className="font-serif text-2xl">How Mobile Spa Works</div>
          <ol className="mt-3 list-decimal pl-5 text-sm text-neutral-600 space-y-2">
            <li>WhatsApp your location & preferred time.</li>
            <li>We confirm ETA (&lt; 2 hours in corridor), therapist name, and supplies.</li>
            <li>We arrive, set up table, linens, and oils; session begins.</li>
          </ol>
        </div>
        <div className="rounded-2xl p-6 bg-white border border-neutral-200/70 shadow-sm">
          <div className="font-serif text-2xl">Hygiene & Care</div>
          <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600 space-y-2">
            <li>Fresh linens for every guest; sanitised equipment.</li>
            <li>Ayurveda-grade oils; allergy-safe options on request.</li>
            <li>Professional draping; therapist ID and references.</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
