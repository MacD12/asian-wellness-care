import React from 'react';

export default function Schedule(){
  return (
    <main className="container-6xl py-12 sm:py-16">
      <div className="rounded-3xl p-8 sm:p-12 bg-white shadow-sm border border-neutral-200/70">
        <h1 className="font-serif text-4xl">Book a Class</h1>
        <p className="mt-3 text-neutral-600">Public classes run in small groups for personal attention. For on-site mobile spa or therapists on contract, please use WhatsApp or the contact form.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {name:'Morning Asana — Level 1', time:'Mon, Wed, Fri • 7:30–8:45', spot:'8 spots'},
            {name:'Evening Breath & Restore', time:'Tue, Thu • 18:00–19:00', spot:'10 spots'},
            {name:'Weekend Philosophy Circle', time:'Sat • 16:00–17:30', spot:'12 spots'},
          ].map((c,i) => (
            <div key={i} className="rounded-2xl p-5 border border-neutral-200/70 bg-neutral-50">
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-neutral-600 mt-1">{c.time}</div>
              <div className="text-xs text-neutral-500 mt-1">{c.spot}</div>
              <a href="/contact" className="inline-flex mt-4 px-4 py-2 rounded-full bg-black text-white">Reserve</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
