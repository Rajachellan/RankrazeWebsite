import { useSound } from '../hooks/use-sound.jsx';

export default function SoundToggle({ className = '', mobile = false }) {
  const { soundOn, toggleSound } = useSound();
  
  return (
    <button 
      onClick={toggleSound}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
        soundOn 
          ? 'bg-primary/10 text-primary' 
          : 'bg-gray-100 text-gray-400'
      } ${className}`}
      aria-label={soundOn ? 'Mute sound' : 'Unmute sound'}
    >
      <i className={`${soundOn ? 'ri-volume-up-line' : 'ri-volume-mute-line'} text-xl`}></i>
    </button>
  );
}