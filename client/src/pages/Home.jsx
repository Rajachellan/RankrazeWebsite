import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import Create from '../components/Create.jsx';
import Discover from '../components/Discover.jsx';
import Sound from '../components/Sound.jsx';
import Community from '../components/Community.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
}