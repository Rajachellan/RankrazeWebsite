import { Link } from 'wouter';
import SoundToggle from './SoundToggle.jsx';
import { useSound } from '../hooks/use-sound.jsx';

export default function Footer() {
  const { soundOn } = useSound();
  
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/src/assets/logo.svg" alt="GameCraft Kids Logo" className="h-10 mr-3" />
              <span className="font-fredoka text-xl text-primary">GameCraft Kids</span>
            </div>
            <p className="text-dark/70 text-sm mb-4">
              A safe, creative platform for families to design, share, and play games together.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:bg-opacity-90 transition-colors">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:bg-opacity-90 transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:bg-opacity-90 transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white hover:bg-opacity-90 transition-colors">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Links */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-dark/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#create" className="text-dark/70 hover:text-primary transition-colors">Create</Link></li>
              <li><Link href="#discover" className="text-dark/70 hover:text-primary transition-colors">Discover</Link></li>
              <li><Link href="#learn" className="text-dark/70 hover:text-primary transition-colors">Learn</Link></li>
              <li><Link href="#community" className="text-dark/70 hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="#login" className="text-dark/70 hover:text-primary transition-colors">Login</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Support */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-dark/70 hover:text-primary transition-colors">Safety Guide</a></li>
              <li><a href="#" className="text-dark/70 hover:text-primary transition-colors">Parent Resources</a></li>
              <li><a href="#" className="text-dark/70 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-dark/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-dark/70 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-nunito font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-dark/70 text-sm mb-4">Get the latest news and updates about new features.</p>
            
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
                >
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
            
            <div className="flex items-center">
              <span className="text-sm text-dark/70 mr-3">Sound:</span>
              <SoundToggle />
              <span className="ml-2 text-xs text-dark/50">{soundOn ? 'On' : 'Off'}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-dark/50 mb-4 md:mb-0">
            © 2025 GameCraft Kids. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-dark/50 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-dark/50 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-dark/50 hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="text-dark/50 hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}