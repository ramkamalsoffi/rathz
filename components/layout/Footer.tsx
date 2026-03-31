import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-black/5 backdrop-blur-3xl text-zinc-400 py-20 border-t border-white/[0.05] overflow-hidden">
      {/* Subtle glass glow inside footer */}
      <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <span className="text-white font-[1000] text-sm uppercase">R</span>
            </div>
            <span className="text-xl font-black tracking-widest text-white uppercase leading-none">Rathz</span>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            The all-in-one workforce management platform for modern, fast-growing teams in India.
          </p>
          <div className="flex gap-4">
            {/* Social Icons would go here */}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Product</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#solutions" className="hover:text-primary transition-colors">Solutions</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#blog" className="hover:text-primary transition-colors">Resources/Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#why-us" className="hover:text-primary transition-colors">Why Us</a></li>
            <li><a href="#customers" className="hover:text-primary transition-colors">Customers</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#help" className="hover:text-primary transition-colors">Help Center</a></li>
            <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#api" className="hover:text-primary transition-colors">API Docs</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/[0.05] text-sm flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p>&copy; {new Date().getFullYear()} Rathz Systems Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">System Status</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
