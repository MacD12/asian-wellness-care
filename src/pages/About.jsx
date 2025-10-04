import React from 'react';

export default function About(){
  return (
    <main>
      <section className="container-6xl py-12 sm:py-16">
        <div className="overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="h-[280px] md:h-[420px] bg-[url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <h1 className="font-serif text-4xl leading-tight">Our Philosophy</h1>
              <p className="mt-4 text-neutral-200">We practice and teach yoga as a complete path. Breath, attention, and ethical living form the base. Movement is the laboratory for compassion and strength.</p>
              <p className="mt-3 text-neutral-300 text-sm">We serve individuals and tourism partners from <strong>Galle to Dikwella</strong> with a unique promise: on-site within <strong>2 hours</strong> when you need us.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-6xl py-12 sm:py-20 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="font-serif text-3xl">Lineage & Integrity</h2>
          <p className="text-neutral-600 leading-relaxed">Our teachers study continuously with respected mentors across Asia and Europe. We honor tradition and adapt responsibly for modern life, offering steady progressions for every body.</p>
          <h3 className="font-serif text-2xl mt-8">A Whole-Person Approach</h3>
          <p className="text-neutral-600 leading-relaxed">Movement, breath, rest, and study — integrated to support clarity and resilience. We keep class sizes small for personal guidance.</p>
        </div>
        <div>
          <div className="h-44 rounded-2xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"/>
        </div>
      </section>
    </main>
  )
}
