import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-10 md:py-20 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 relative z-10">
            <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Create, Play & Share <span className="text-secondary">Family Games</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-dark/80 max-w-lg">
              Build your own game levels, share them with friends, and play together in a safe, creative environment designed for families with young children.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#create" className="px-8 py-4 bg-primary text-white rounded-full font-nunito font-bold text-lg hover:bg-opacity-90 transform hover:-translate-y-1 transition-all shadow-lg">
                Start Creating
              </Link>
              <Link href="#discover" className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-nunito font-bold text-lg hover:bg-primary/5 transform hover:-translate-y-1 transition-all">
                Discover Games
              </Link>
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?auto=format&fit=crop&w=60&h=60" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="User avatar" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=60&h=60" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="User avatar" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1596564816563-ccd76ade7f16?auto=format&fit=crop&w=60&h=60" 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="User avatar" 
                />
              </div>
              <span className="ml-4 text-sm text-dark/70">Join <span className="font-bold text-primary">5,000+</span> families already creating</span>
            </div>
          </div>
          
          {/* Right content - Game preview */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative bg-white p-4 rounded-2xl shadow-xl transform rotate-1 max-w-lg mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&w=600&h=400" 
                className="w-full rounded-lg" 
                alt="Game preview" 
              />
              <div className="absolute -top-4 -right-4 bg-success text-white text-sm px-3 py-1 rounded-full shadow-md">
                <i className="ri-play-fill mr-1"></i>
                Now Playing
              </div>
              <div className="mt-4">
                <h3 className="font-nunito font-bold text-lg">Treasure Island Adventure</h3>
                <p className="text-dark/70 text-sm">Created by <span className="font-bold text-primary">Thompson Family</span></p>
                <div className="flex mt-2 items-center">
                  <div className="flex">
                    <i className="ri-star-fill text-secondary"></i>
                    <i className="ri-star-fill text-secondary"></i>
                    <i className="ri-star-fill text-secondary"></i>
                    <i className="ri-star-fill text-secondary"></i>
                    <i className="ri-star-half-fill text-secondary"></i>
                  </div>
                  <span className="ml-2 text-sm text-dark/70">(128 plays)</span>
                </div>
              </div>
            </div>
            
            {/* Sound waves */}
            <div className="absolute -top-10 -right-10 w-20 h-20 sound-animation">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=64&h=64" 
                className="w-full opacity-80" 
                alt="Sound effect" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}