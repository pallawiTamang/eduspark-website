import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Services from './components/Services';
import CurrentProject from './components/CurrentProject';
import ProjectProgress from './components/ProjectProgress';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <OurTeam />
        <Services />
        <CurrentProject />
        <ProjectProgress />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
