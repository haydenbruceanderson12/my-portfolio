import './App.css'
import './Index.css'

import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { MobileMenu } from './components/MobileMenu.jsx'
import { Home } from './components/sections/Home.jsx'
import { About } from './components/sections/About.jsx'
import { Contact } from './components/sections/Contact.jsx'
import { Projects } from './components/sections/Projects.jsx'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100` + (isLoaded ? 'opacity-100' : 'opacity-0')}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
