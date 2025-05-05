import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type SoundContextType = {
  soundOn: boolean;
  toggleSound: () => void;
  volume: number;
  setVolume: (value: number) => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundOn, setSoundOn] = useState(true);
  const [volume, setVolume] = useState(70);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    // Initialize audio context on first user interaction
    const handleUserInteraction = () => {
      if (!audioContext) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
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
