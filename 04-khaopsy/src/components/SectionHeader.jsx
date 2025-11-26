import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="section-header text-center py-1">
      <h2 className="m-0 section-header-title">{title}</h2>
    </div>
  );
}

export default SectionHeader;
