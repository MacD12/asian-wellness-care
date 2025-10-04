import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer(){
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-6xl py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 via-stone-200 to-amber-100 shadow-inner" />
            <div>
              <div className="font-semibold">Asian Wellness Care</div>
              <div className="text-xs text-neutral-500 tracking-wide">Real Yoga • Real Care</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-neutral-600">
            <div className="space-y-1">
              <div className="font-medium text-neutral-800">Contact</div>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> +94 77 123 4567</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> hello@asianwellness.care</p>
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5"/> 21 Temple Road, Weligama, Sri Lanka</p>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-neutral-800">Service Area</div>
              <p>Galle ↔ Dikwella</p>
              <p>On-site within <strong>&lt; 2 hours</strong></p>
            </div>
            <div className="space-y-1">
              <div className="font-medium text-neutral-800">Social</div>
              <div className="flex items-center gap-4 text-neutral-500">
                <a href="#" aria-label="Facebook" className="hover:text-neutral-800"><Facebook className="h-5 w-5"/></a>
                <a href="#" aria-label="Instagram" className="hover:text-neutral-800"><Instagram className="h-5 w-5"/></a>
                <a href="#" aria-label="YouTube" className="hover:text-neutral-800"><Youtube className="h-5 w-5"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Asian Wellness Care. All rights reserved.</div>
      </div>
    </footer>
  )
}
