import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <section id="features">
          <Features />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;