import React from "react";
import TeaserSection from "./components/TeaserSection";
import MemberCard from "./components/MemberCard";
import MembersSection from "./components/MembersSection";
import SectionStore from "./components/SectionStore.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-light">
      <TeaserSection />
      <MembersSection />
      <MemberCard />
      <SectionStore />
      <Footer />
    </div>
  );
}

export default App;