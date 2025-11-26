import React from "react";
import TeaserSection from "./components/TeaserSection";
import MembersSection from "./components/MembersSection";
import SectionStore from "./components/SectionStore.jsx"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-light">
      <TeaserSection />
      <MembersSection />
      <SectionStore />
      <Footer />
    </div>
  );
}

export default App;