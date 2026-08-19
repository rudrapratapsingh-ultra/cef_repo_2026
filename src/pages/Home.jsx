import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import About from "../components/About";
import Team from "../components/Team";
import SpecialCarousel from "../components/SpecialCarousel";
import Alumni from "../components/Alumni";
import ContactUs from "../components/ContactUs";

export default function Home() {
  const location = useLocation();

  // Scroll to section when arriving at Home with a hash (e.g., /#about)
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    // Delay to ensure DOM is ready after navigation
    const headerOffset = 88; // adjust to match Navbar height + spacer
    const run = () => {
      const y =
        el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    // Request next frame for smoother scroll after paint
    const r = requestAnimationFrame(run);
    return () => cancelAnimationFrame(r);
  }, [location]);
  return (
    <>
      {/* content begins immediately under fixed navbar */}

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="About CEF"
          subtitle="Civil & Environmental Engineering Forum at IIT Delhi — fostering innovation, leadership, and community."
        />
        <About />
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Our Team"
          subtitle="Meet the faculty, core team, and executives driving CEF forward."
        />
        <Team />
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Events"
          subtitle="Highlights from our latest events, competitions, and guest sessions."
        />
        <SpecialCarousel name="Events" />
      </section>

      {/* Alumni Section */}
      <section
        id="alumni"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Alumni"
          subtitle="Celebrating the journeys of our distinguished alumni."
        />
        <Alumni />
      </section>

      {/* Contact Section */}
      <section
        id="contact-us"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <SectionHeading
          title="Get in Touch"
          subtitle="Reach us on email or social platforms."
        />
        <ContactUs />
      </section>
    </>
  );
}
