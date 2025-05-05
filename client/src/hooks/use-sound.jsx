import { createContext, useContext, useState, useEffect } from 'react';

const SoundContext = createContext(undefined);

export function SoundProvider({ children }) {
  const [soundOn, setSoundOn] = useState(true);
  const [volume, setVolume] = useState(70);
  const [audioContext, setAudioContext] = useState(null);
  const [gainNode, setGainNode] = useState(null);

  useEffect(() => {
    // Initialize audio context on first user interaction
    const handleUserInteraction = () => {
      if (!audioContext) {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const gain = ctx.createGain();
        gain.connect(ctx.destination);
        setAudioContext(ctx);
        setGainNode(gain);
        
        // Remove event listeners after initialization
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [audioContext]);

  // Update gain value when volume changes
  useEffect(() => {
    if (gainNode) {
      gainNode.gain.value = volume / 100;
    }
  }, [volume, gainNode]);

  // Mute/unmute audio when soundOn changes
  useEffect(() => {
    if (gainNode) {
      gainNode.gain.value = soundOn ? volume / 100 : 0;
    }
  }, [soundOn, volume, gainNode]);

  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  return (
    <SoundContext.Provider value={{ soundOn, toggleSound, volume, setVolume }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}