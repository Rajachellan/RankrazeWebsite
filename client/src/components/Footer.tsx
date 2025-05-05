import { Link } from 'wouter';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the newsletter subscription
    console.log('Newsletter subscription:', email);
    // Reset the form
    setEmail('');
  };
  
  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="font-fredoka text-xl mb-4">GameCraft Kids</h4>
            <p className="text-white/80 mb-4">Creating fun, educational games for families to enjoy together.</p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#discover" className="text-white/80 hover:text-white transition-colors">Discover Games</Link></li>
              <li><Link href="#create" className="text-white/80 hover:text-white transition-colors">Create Games</Link></li>
              <li><Link href="#community" className="text-white/80 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#tutorials" className="text-white/80 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#help" className="text-white/80 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#safety" className="text-white/80 hover:text-white transition-colors">Family Safety</Link></li>
              <li><Link href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-nunito font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for new features and games.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-l-full w-full focus:outline-none text-dark"
                required
              />
              <button type="submit" className="bg-secondary text-white px-4 py-2 rounded-r-full hover:bg-opacity-90 transition-colors">
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} GameCraft Kids. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#terms" className="text-white/70 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#privacy" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#cookies" className="text-white/70 text-sm hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
