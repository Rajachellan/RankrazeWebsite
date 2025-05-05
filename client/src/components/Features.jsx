import { Link } from 'wouter';

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">How GameCraft Kids Works</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Our platform makes it easy for families to create, share, and play together with a focus on creativity and fun.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 mb-5 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <i className="ri-palette-line text-3xl"></i>
            </div>
            <h3 className="font-nunito font-bold text-xl mb-3">Create</h3>
            <p className="text-dark/70">Design your own game levels with our simple drag-and-drop tools. No coding required!</p>
            <Link href="#create" className="inline-block mt-4 font-nunito font-bold text-primary hover:text-secondary transition-colors">
              Start Creating <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 mb-5 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
              <i className="ri-share-forward-line text-3xl"></i>
            </div>
            <h3 className="font-nunito font-bold text-xl mb-3">Share</h3>
            <p className="text-dark/70">Publish your creations and share them with family, friends, or the community.</p>
            <Link href="#community" className="inline-block mt-4 font-nunito font-bold text-secondary hover:text-primary transition-colors">
              Join Community <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="w-16 h-16 mb-5 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <i className="ri-gamepad-line text-3xl"></i>
            </div>
            <h3 className="font-nunito font-bold text-xl mb-3">Play</h3>
            <p className="text-dark/70">Enjoy games created by your family or discover new favorites from our community.</p>
            <Link href="#discover" className="inline-block mt-4 font-nunito font-bold text-accent hover:text-primary transition-colors">
              Discover Games <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}