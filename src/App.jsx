import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import OtherServices from './components/OtherServices'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OtherServices />
        <About />
        <Testimonials />
        <Contact />
        <footer className="border-t py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kantor Hukum Nusantara. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
