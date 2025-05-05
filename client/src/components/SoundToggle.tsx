import { useSound } from '../hooks/use-sound';

type SoundToggleProps = {
  className?: string;
  mobile?: boolean;
};

export default function SoundToggle({ className = '', mobile = false }: SoundToggleProps) {
  const { soundOn, toggleSound } = useSound();
  
  if (mobile) {
    return (
      <div className="md:hidden fixed bottom-5 right-5 z-40">
        <button 
          onClick={toggleSound}
          className="sound-toggle w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center"
        >
          <i className={`${soundOn ? 'ri-volume-up-line' : 'ri-volume-mute-line'} text-xl`}></i>
        </button>
      </div>
    );
  }
  
  return (
    <button 
      onClick={toggleSound}
      className={`sound-toggle p-2 rounded-full bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all ${className}`}
    >
      <i className={`${soundOn ? 'ri-volume-up-line' : 'ri-volume-mute-line'} text-xl`}></i>
    </button>
  );
}
