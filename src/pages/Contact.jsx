import React from 'react';

export default function Contact(){
  return (
    <main className="container-6xl py-12 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-white shadow-sm border border-neutral-200/70">
          <h1 className="font-serif text-4xl">Contact</h1>
          <p className="mt-3 text-neutral-600">WhatsApp is fastest for on-site bookings (&lt; 2 hours in Galle–Dikwella).</p>
          <div className="mt-6 space-y-2 text-sm text-neutral-700">
            <p><strong>Phone:</strong> +94 77 123 4567</p>
            <p><strong>Email:</strong> hello@asianwellness.care</p>
            <p><strong>Studio:</strong> 21 Temple Road, Weligama, Sri Lanka</p>
            <p><strong>Service area:</strong> Galle ↔ Dikwella</p>
          </div>
          <p className="mt-2 text-xs text-neutral-500">Outside the corridor? Please give 2+ hours notice.</p>

          <form className="mt-8 grid gap-3">
            <input className="border border-neutral-300 rounded-xl px-4 py-3" placeholder="Your name" />
            <input className="border border-neutral-300 rounded-xl px-4 py-3" placeholder="Email or phone" />
            <textarea rows="5" className="border border-neutral-300 rounded-xl px-4 py-3" placeholder="How can we help?" />
            <button className="rounded-full px-4 py-2 bg-black text-white">Send</button>
          </form>
        </div>
        <div className="rounded-3xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1534367610401-9f8a4f6c3663?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center min-h-[320px]" />
      </div>
    </main>
  )
}
