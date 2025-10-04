import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const NavItem = ({to, children, onClick}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({isActive}) => `px-2 py-1 hover:text-neutral-900 ${isActive ? 'text-neutral-900' : 'text-neutral-600'}`}
  >
    {children}
  </NavLink>
);

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o=>!o);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <div className="container-6xl h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 via-stone-200 to-amber-100 shadow-inner" />
          <span className="font-semibold tracking-tight">Asian Wellness Care</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavItem to="/about">Philosophy</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/spa">Spa Wellness</NavItem>
          <NavItem to="/packages">Packages</NavItem>
          <NavItem to="/business">For Businesses</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <a href="/schedule" className="px-4 py-2 rounded-full bg-black text-white">Book a Class</a>
        </nav>
        <button onClick={toggle} className="md:hidden p-2" aria-label="Menu"><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container-6xl py-3 flex flex-col text-sm">
            <NavItem to="/about" onClick={close}>Philosophy</NavItem>
            <NavItem to="/services" onClick={close}>Services</NavItem>
            <NavItem to="/spa" onClick={close}>Spa Wellness</NavItem>
            <NavItem to="/packages" onClick={close}>Packages</NavItem>
            <NavItem to="/business" onClick={close}>For Businesses</NavItem>
            <NavItem to="/contact" onClick={close}>Contact</NavItem>
            <a href="/schedule" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-black text-white">Book a Class</a>
          </div>
        </div>
      )}
    </header>
  );
}
