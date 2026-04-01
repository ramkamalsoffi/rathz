import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const columns = [
  {
    heading: "Pages",
    links: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
      { label: "Customers", href: "#customers" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
    ],
    highlight: true,
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
    highlight: true,
  },
  {
    heading: "Account",
    links: [
      { label: "Start Free Trial", href: "#" },
      { label: "Book a Demo", href: "#" },
      { label: "Login", href: "#" },
      { label: "Help Center", href: "#help" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-black text-zinc-500 overflow-hidden border-t border-white/[0.04]">

      {/* Top section: Logo + Columns */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-16 pb-12 flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between relative z-10">

        {/* Left: Logo + copyright */}
        <div className="flex flex-col gap-6 min-w-[200px]">
          {/* Logo pill */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/10">
              <Image
                src="/Logo-01.svg"
                alt="Sprintly"
                width={20}
                height={20}
                className="brightness-200"
              />
            </div>
            <span className="text-white font-black text-base tracking-wide">Sprintly</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">
            &copy; {new Date().getFullYear()} Sprintly Systems Pvt Ltd.<br />
            All rights reserved.
          </p>
        </div>

        {/* Right: 4 link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {columns.map((col) => (
            <div key={col.heading}>
              <h5 className="text-white text-xs font-black uppercase tracking-widest mb-5">
                {col.heading}
              </h5>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 ${
                        col.highlight
                          ? 'text-blue-500 hover:text-blue-400'
                          : 'text-zinc-500 hover:text-zinc-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="h-px bg-white/[0.04]" />
      </div>

      {/* Giant logo watermark */}
      <div className="relative overflow-hidden select-none pointer-events-none mt-0 flex items-center justify-center py-8">
        <Image
          src="/Logo-01.svg"
          alt="Rathz watermark"
          width={900}
          height={220}
          className="w-[75vw] max-w-[1000px] h-auto"
          style={{ filter: 'brightness(0) invert(1)', opacity: 0.15 }}
        />
      </div>

    </footer>
  );
};

export default Footer;
