import { useState } from 'react';
import { useSound } from '../hooks/use-sound.jsx';

const soundtracks = [
  {
    id: 'happy',
    name: 'Happy Adventure',
    description: 'Upbeat and cheerful music for creating games',
    icon: 'ri-emotion-happy-line'
  },
  {
    id: 'relaxing',
    name: 'Relaxing Atmosphere',
    description: 'Calm background music for focused creation',
    icon: 'ri-sun-foggy-line'
  },
  {
    id: 'adventure',
    name: 'Epic Adventure',
    description: 'Dramatic music for exciting game scenarios',
    icon: 'ri-sword-line'
  }
];

export default function Sound() {
  const { soundOn, toggleSound, volume, setVolume } = useSound();
  const [activeTrack, setActiveTrack] = useState('happy');
  
  const handleTrackChange = (trackId) => {
    setActiveTrack(trackId);
    // In a real implementation, this would actually change the playing audio track
  };
  
  return (
    <section id="sound" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-3xl md:text-4xl text-primary mb-4">Enhance with Sound</h2>
          <p className="text-dark/70 max-w-2xl mx-auto">Add immersive soundtracks and effects to make your games come alive.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          {/* Sound visual */}
          <div className="w-full md:w-1/2">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 relative overflow-hidden" style={{ height: '320px' }}>
              <div className="sound-visual-container relative z-10 h-full flex flex-col items-center justify-center">
                <div className={`sound-animation ${soundOn ? 'active' : ''}`}>
                  <div className="sound-circle absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                      <i className={soundOn ? "ri-volume-up-line text-2xl" : "ri-volume-mute-line text-2xl"}></i>
                    </div>
                    <div className={`sound-wave-1 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-primary/80 rounded-full ${soundOn ? 'animate-ping' : 'opacity-0'}`} style={{ animationDuration: '1.5s' }}></div>
                    <div className={`sound-wave-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/60 rounded-full ${soundOn ? 'animate-ping' : 'opacity-0'}`} style={{ animationDuration: '2s' }}></div>
                    <div className={`sound-wave-3 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-primary/40 rounded-full ${soundOn ? 'animate-ping' : 'opacity-0'}`} style={{ animationDuration: '2.5s' }}></div>
                  </div>
                </div>
                
                <div className="mt-28">
                  <button 
                    onClick={toggleSound}
                    className={`px-6 py-3 rounded-full font-nunito font-bold text-lg shadow-lg flex items-center justify-center ${
                      soundOn 
                        ? 'bg-primary text-white' 
                        : 'bg-white text-primary border border-primary'
                    }`}
                  >
                    <i className={`${soundOn ? 'ri-volume-up-line' : 'ri-volume-mute-line'} mr-2`}></i>
                    {soundOn ? 'Sound On' : 'Sound Off'}
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 opacity-20 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full"></div>
            </div>
          </div>
          
          {/* Sound controls */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-nunito font-bold text-xl mb-4">Game Soundtrack</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Volume</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={volume} 
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <h4 className="font-nunito font-bold mb-3">Select Soundtrack</h4>
              <div className="space-y-3">
                {soundtracks.map(track => (
                  <div 
                    key={track.id}
                    onClick={() => handleTrackChange(track.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors flex items-center ${
                      activeTrack === track.id 
                        ? 'bg-primary/10 border border-primary/30' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeTrack === track.id ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      <i className={`${track.icon} text-lg`}></i>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-nunito font-bold text-sm">{track.name}</h5>
                      <p className="text-xs text-dark/60">{track.description}</p>
                    </div>
                    {activeTrack === track.id && (
                      <div className="ml-auto">
                        <i className="ri-play-fill text-primary"></i>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-nunito font-bold mb-3">Sound Effects</h4>
                <div className="grid grid-cols-3 gap-2">
                  <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <i className="ri-bubble-chart-line text-lg text-secondary"></i>
                      <p className="text-xs mt-1 text-dark/70">Pop</p>
                    </div>
                  </button>
                  <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <i className="ri-rocket-line text-lg text-secondary"></i>
                      <p className="text-xs mt-1 text-dark/70">Whoosh</p>
                    </div>
                  </button>
                  <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <i className="ri-star-line text-lg text-secondary"></i>
                      <p className="text-xs mt-1 text-dark/70">Sparkle</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}