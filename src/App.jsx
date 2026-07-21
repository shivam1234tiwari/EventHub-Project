import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import UpcomingEvents from './components/UpcomingEvents.jsx'
import Categories from './components/Categories.jsx'
import OrganizerSection from './components/OrganizerSection.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <UpcomingEvents />
        <Categories />
        <OrganizerSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
