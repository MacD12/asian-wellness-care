import React from 'react';

export default function Business(){
  return (
    <main className="container-6xl py-12 sm:py-16">
      <div className="rounded-3xl p-8 sm:p-12 bg-white shadow-sm border border-neutral-200/70">
        <h1 className="font-serif text-4xl">For Tourism Businesses</h1>
        <p className="mt-4 text-neutral-600 max-w-3xl">
          We provide Spa Wellness, Ayurveda, Meditation, and Yoga <strong>therapists on contract</strong> for hotels, villas, surf camps, and retreats.
          On-site within <strong>&lt; 2 hours</strong> from <strong>Dikwella to Galle</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="rounded-2xl p-5 bg-neutral-50 border border-neutral-200/70">
            <div className="font-medium">Contract Tiers</div>
            <p className="text-sm text-neutral-600 mt-1">Lite (1), Standard (2 shifts), Premium (3+ rotating). Monthly reporting & hygiene audits.</p>
          </div>
          <div className="rounded-2xl p-5 bg-neutral-50 border border-neutral-200/70">
            <div className="font-medium">Modalities</div>
            <p className="text-sm text-neutral-600 mt-1">Spa Wellness, Ayurveda, Meditation, and Yoga. Matched to your guest profile.</p>
          </div>
          <div className="rounded-2xl p-5 bg-neutral-50 border border-neutral-200/70">
            <div className="font-medium">SLA & Coverage</div>
            <p className="text-sm text-neutral-600 mt-1">Under 2 hours within Galle–Dikwella. Outside the corridor, please provide 2+ hours notice.</p>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200/70 p-6">
            <div className="font-medium">How it works</div>
            <ol className="list-decimal pl-5 text-sm text-neutral-600 mt-2 space-y-2">
              <li>WhatsApp us your need (therapist count, start time, location).</li>
              <li>We confirm ETA, rate, and supplies.</li>
              <li>Therapists arrive, set up, and deliver service with your team.</li>
              <li>Monthly invoice or pay-as-you-go receipt.</li>
            </ol>
            <a href="/contact" className="inline-flex mt-4 px-4 py-2 rounded-full bg-black text-white">Request a contract</a>
          </div>
          <div className="rounded-2xl overflow-hidden min-h-[260px] bg-[url('https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"/>
        </div>
      </div>
    </main>
  )
}
