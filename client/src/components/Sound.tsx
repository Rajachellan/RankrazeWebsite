import { useState } from 'react';
import { useSound } from '../hooks/use-sound';

const soundtracks = [
  {
    id: 1,
    title: 'Peaceful Forest',
    description: 'Relaxing nature sounds',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
    btnBgColor: 'bg-primary/10',
    btnTextColor: 'text-primary',
    btnHoverBgColor: 'hover:bg-primary/20'
  },
  {
    id: 2,
    title: 'Adventure Begins',
    description: 'Upbeat exploration theme',
    bgColor: 'bg-secondary/10',
    textColor: 'text-secondary',
    btnBgColor: 'bg-secondary/10',
    btnTextColor: 'text-secondary',
    btnHoverBgColor: 'hover:bg-secondary/20'
  },
  {
    id: 3,
    title: 'Ocean Waves',
    description: 'Calming sea sounds',
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
    btnBgColor: 'bg-accent/10',
    btnTextColor: 'text-accent',
    btnHoverBgColor: 'hover:bg-accent/20'
  }
];

export default function Sound() {
  const [activeSoundtrack, setActiveSoundtrack] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const { volume, setVolume } = useSound();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="sound" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Sound wave decorations */}
      <div className="absolute top-0 left-1/4 w-20 h-20 sound-animation">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=80&h=80" 
          className="w-full opacity-40" 
          alt="Sound effect" 
        />
      </div>
      <div className="absolute bottom-0 right-1/4 w-20 h-20 sound-animation" style={{ animationDelay: '0.5s' }}>
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=80&h=80" 
          className="w-full opacity-40" 
          alt="Sound effect" 
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">Relaxing Sound Experience</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Our carefully crafted soundtracks create the perfect atmosphere for your gaming adventures.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Sound visualization */}
            <div className="w-full md:w-1/2 bg-primary/5 rounded-lg p-5 relative" style={{ height: '250px' }}>
              <div className="flex items-end justify-around h-full pb-5">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 bg-primary rounded-full animate-pulse" 
                    style={{ 
                      height: isPlaying ? `${Math.floor(Math.random() * 60) + 20}%` : '10%',
                      animationDelay: `${i * 0.1}s` 
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/50 backdrop-blur-sm rounded-b-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-3"
                    >
                      <i className={`${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'} text-xl`}></i>
                    </button>
                    <div>
                      <p className="font-nunito font-bold">{soundtracks.find(s => s.id === activeSoundtrack)?.title}</p>
                      <p className="text-xs text-dark/60">Background Music</p>
                    </div>
                  </div>
                  <span className="text-sm text-dark/60">1:24 / 3:45</span>
                </div>
              </div>
            </div>
            
            {/* Sound controls */}
            <div className="w-full md:w-1/2">
              <h3 className="font-nunito font-bold text-xl mb-4">Soundtrack Library</h3>
              <p className="text-dark/70 mb-6">Choose from our collection of relaxing soundtracks designed to enhance your gaming experience.</p>
              
              <div className="space-y-4">
                {soundtracks.map(soundtrack => (
                  <div 
                    key={soundtrack.id}
                    className={`flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer ${
                      activeSoundtrack === soundtrack.id ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => setActiveSoundtrack(soundtrack.id)}
                  >
                    <div className={`w-10 h-10 ${soundtrack.bgColor} rounded-full flex items-center justify-center ${soundtrack.textColor} mr-3`}>
                      <i className="ri-music-2-line"></i>
                    </div>
                    <div className="flex-grow">
                      <p className="font-nunito font-bold">{soundtrack.title}</p>
                      <p className="text-xs text-dark/60">{soundtrack.description}</p>
                    </div>
                    <button 
                      className={`w-8 h-8 ${soundtrack.btnBgColor} rounded-full flex items-center justify-center ${soundtrack.btnTextColor} ${soundtrack.btnHoverBgColor} transition-colors`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSoundtrack(soundtrack.id);
                        setIsPlaying(true);
                      }}
                    >
                      <i className="ri-play-fill"></i>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <p className="font-nunito font-bold mb-2">Volume</p>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume} 
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="volume-slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
