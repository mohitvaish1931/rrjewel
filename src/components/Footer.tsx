import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <img 
                  src="/Your paragraph text.png" 
                  alt="Radiant Reflection Logo" 
                  className="h-8 w-8 mr-2"
                />
                <div className="text-xl font-light tracking-wide text-gray-900">
                  <span className="font-serif">RADIANT REFLECTION</span>
                </div>
              </div>
              <div className="text-xs text-gray-600 italic font-light mb-4">
                jewelry
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">✓</span>
                <span className="text-sm text-gray-700">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-600">✓</span>
                <span className="text-sm text-gray-700">Perfect For Gifting</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Contact Us</h4>
              <p className="text-sm text-gray-600">radiantreflection.customercare@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-gray-900 mb-6">QUICK LINKS</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">Get In Touch</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">Shipping policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">Terms of Conditions</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">Contact information</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-400 transition-colors">Return and Refund policy</a></li>
            </ul>
          </div>

          {/* Empty column for spacing */}
          <div className="col-span-1"></div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="font-medium text-gray-900 mb-4">INBOX TO RADIANT REFLECTION OFFICIAL</h4>
            <p className="text-sm text-gray-600 mb-6">
              Join RADIANT REFLECTION exclusive seller community and showcase your exquisite jewelry to a wider audience. Our platform is designed to provide a seamless selling experience with secure transactions, dedicated support, and a growing customer base.
            </p>
            
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
              />
              <button className="w-full bg-orange-400 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-500 transition-colors">
                SUBSCRIBE
              </button>
            </div>

            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-orange-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-center space-x-4 opacity-60">
            <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">VISA</div>
            <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold">MASTER</div>
            <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold">PAYTM</div>
            <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-bold">PhonePe</div>
            <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">UPI</div>
            <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">CASH ON DELIVERY</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;