import NewsletterForm from '@/app/auth/NewsletterForm';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">GrandMax Architecture</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Award-winning architectural design and construction services. Transform your vision into stunning reality.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+2348138662406" 
                className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0813 8662406</span>
              </a>
              <a 
                href="mailto:info@grandmax.com" 
                className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@grandmax.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm hover:text-red-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-red-500 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/projects" className="text-sm hover:text-red-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm hover:text-red-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/services/residential" className="text-sm hover:text-red-500 transition-colors">
                  Residential Design
                </a>
              </li>
              <li>
                <a href="/services/commercial" className="text-sm hover:text-red-500 transition-colors">
                  Commercial Design
                </a>
              </li>
              <li>
                <a href="/services/interior" className="text-sm hover:text-red-500 transition-colors">
                  Interior Design
                </a>
              </li>
              <li>
                <a href="/services/sustainable" className="text-sm hover:text-red-500 transition-colors">
                  Sustainable Architecture
                </a>
              </li>
              <li>
                <a href="/services/renovation" className="text-sm hover:text-red-500 transition-colors">
                  Renovations
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest updates and news about our projects.
            </p>
            <NewsletterForm />
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-white text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} GrandMax Architecture. All rights reserved. 
              <span className="inline-block ml-1">@olamidotun</span>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="hover:text-red-500 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-red-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
