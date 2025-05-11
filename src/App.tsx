import './App.css'
import TimerComp from '../components/TimerComp'
import Particles from '../components/ParticleEffect'
import CompletedSessions from '../components/CompletedSessions'

import AboutModal from "../components/AboutModal";
import { useState } from 'react';
import { Info } from 'lucide-react';
function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div>
      <div className='bg-black relative w-full h-screen -z-10 '><Particles
      particleColors={['#ffffff', '#ffffff']}
      particleCount={2000}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={true}/></div>
      <div className='backdrop-blur-sm bg-black/1 border opacity-100 rounded-2xl p-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
        <TimerComp />
      </div>
      <div className='font-bold'>
        <CompletedSessions />
        {/* About Button */}
        <Info 
          onClick={() => setIsAboutOpen(true)}
          className="absolute top-10 right-0 text-white mx-2 rounded-lg hover:drop-shadow-[0_0_6px_rgba(203,161,53,1)] hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      {/* <iframe className='fixed bottom-0 w-80 h-30' style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWYoYGBbGKurt?utm_source=generator&theme=0" width="100%" height="50" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
      <iframe className='absolute bottom-0 left-0 border border-white rounded-2xl sm:w-60 ' width="160" height="100*2" src="https://www.youtube.com/embed/R-bI0AhSyU0?si=94JNSnNc5mp1038r" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default App
