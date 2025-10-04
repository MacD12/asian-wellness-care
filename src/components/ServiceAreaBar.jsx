import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export default function ServiceAreaBar(){
  return (
    <div className="bg-white/80 backdrop-blur border-y border-neutral-200">
      <div className="container-6xl py-2 text-sm flex flex-col sm:flex-row items-center justify-center gap-3 text-neutral-700">
        <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Coverage: <strong>Galle ↔ Dikwella</strong></div>
        <div className="hidden sm:block text-neutral-300">•</div>
        <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> On-site in <strong>&lt; 2 hours</strong> (corridor). Outside corridor: please give <strong>2+ hours</strong> notice.</div>
      </div>
    </div>
  )
}
