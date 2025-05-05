import { useState } from 'react';
import { Link } from 'wouter';
import SoundToggle from './SoundToggle.jsx';
import { useSound } from '../hooks/use-sound.jsx';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { volume, setVolume } = useSound();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/src/assets/logo.svg" alt="GameCraft Kids Logo" className="h-12 mr-3" />
            <span className="font-fredoka text-2xl text-primary">GameCraft Kids</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="font-nunito font-bold text-primary hover:text-secondary transition-colors">Home</Link>
            <Link href="#discover" className="font-nunito font-bold text-dark hover:text-primary transition-colors">Discover</Link>
            <Link href="#create" className="font-nunito font-bold text-dark hover:text-primary transition-colors">Create</Link>
            <Link href="#learn" className="font-nunito font-bold text-dark hover:text-primary transition-colors">Learn</Link>
            <Link href="#community" className="font-nunito font-bold text-dark hover:text-primary transition-colors">Community</Link>
          </nav>
          
          {/* Sound Control */}
          <div className="hidden md:flex items-center space-x-3">
            <SoundToggle />
            
            <div className="relative group">
              <div className="absolute right-0 top-12 bg-white p-4 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48">
                <p className="font-nunito font-bold text-sm mb-2">Sound Volume</p>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume} 
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="volume-slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-gray-500">Music</span>
                  <span className="text-xs text-gray-500">Effects</span>
                </div>
              </div>
            </div>
            
            {/* Login/Profile */}
            <Link href="#login" className="flex items-center px-4 py-2 bg-secondary text-white rounded-full font-nunito font-bold hover:bg-opacity-90 transition-all">
              <i className="ri-user-line mr-2"></i>
              Login
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-primary focus:outline-none"
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden pt-4 pb-2 border-t mt-3`}>
          <nav className="flex flex-col space-y-3">
            <Link href="/" className="font-nunito font-bold text-primary py-2">Home</Link>
            <Link href="#discover" className="font-nunito font-bold text-dark py-2">Discover</Link>
            <Link href="#create" className="font-nunito font-bold text-dark py-2">Create</Link>
            <Link href="#learn" className="font-nunito font-bold text-dark py-2">Learn</Link>
            <Link href="#community" className="font-nunito font-bold text-dark py-2">Community</Link>
            <div className="flex items-center justify-between py-2">
              <span className="font-nunito font-bold text-dark">Sound</span>
              <SoundToggle />
            </div>
            <Link href="#login" className="flex items-center justify-center px-4 py-2 bg-secondary text-white rounded-full font-nunito font-bold">
              <i className="ri-user-line mr-2"></i>
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}