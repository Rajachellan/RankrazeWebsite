import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Create from '../components/Create';
import Discover from '../components/Discover';
import Sound from '../components/Sound';
import Community from '../components/Community';
import Footer from '../components/Footer';
import SoundToggle from '../components/SoundToggle';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GameCraft Kids - Create and Share Family-Friendly Game Levels</title>
        <meta name="description" content="Build your own game levels, share them with friends, and play together in a safe, creative environment designed for families with young children." />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <Create />
        <Discover />
        <Sound />
        <Community />
      </main>
      <Footer />
      
      {/* Mobile sound toggle */}
      <SoundToggle mobile={true} />
    </>
  );
}
