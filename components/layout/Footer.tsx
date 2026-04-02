import React from 'react';
import Link from 'next/link';
import ShinyText from '@/components/ui/ShinyText';

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
    <footer className="relative bg-transparent text-zinc-500 overflow-hidden border-t border-white/[0.04]">

      {/* Top section: Logo + Columns */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 pt-16 pb-12 flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between relative z-10">

        {/* Left: Logo + copyright */}
        <div className="flex flex-col gap-6 min-w-[200px]">
          {/* Logo Branding */}
          <div className="flex items-center gap-2.5">
            <div 
              className="w-32 aspect-[323/90] animate-shiny"
              style={{
                background: 'linear-gradient(120deg, #ffffff 0%, #ffffff 35%, #0545B1 50%, #ffffff 65%, #ffffff 100%)',
                backgroundSize: '200% auto',
                maskImage: 'url(/logo.svg)',
                maskSize: 'contain',
                maskPosition: 'left center',
                maskRepeat: 'no-repeat',
                WebkitMaskImage: 'url(/logo.svg)',
                WebkitMaskSize: 'contain',
                WebkitMaskPosition: 'left center',
                WebkitMaskRepeat: 'no-repeat',
              }}
            />
          </div>

          {/* Copyright */}
          <p className="text-xs text-zinc-600 leading-relaxed max-w-[200px]">
            &copy; {new Date().getFullYear()} Webnox Technologies Pvt. Ltd.<br />
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
                      className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors duration-200"
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
      <div className="relative overflow-hidden select-none pointer-events-none mt-0 flex items-center justify-center py-12">
        <div 
          className="w-[75vw] max-w-[1000px] aspect-[45/11] opacity-[0.1] animate-shiny"
          style={{
            background: 'linear-gradient(120deg, #ffffff 0%, #ffffff 35%, #0545B1 50%, #ffffff 65%, #ffffff 100%)',
            backgroundSize: '200% auto',
            maskImage: 'url(/logo.svg)',
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url(/logo.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

    </footer>
  );
};

export default Footer;
