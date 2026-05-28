import { Navbar } from "./components/ui/Navbar";
import { Hero } from "./components/ui/Hero";
import { About } from "./components/ui/About";
import { Services } from "./components/ui/Services";
import BookingCalendar from "./components/ui/BookingCalendar";
import { MapReviews } from "./components/ui/MapReviews";
import { Footer } from "./components/ui/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import "./App.css";
import { Trabajos } from "./components/ui/Trabajos";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Trabajos />
      <Services />
      <BookingCalendar />
      <MapReviews />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;