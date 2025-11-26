import React from "react";

function MemberCard({ name, role, description, photo, showDescription }) {
  return (
    <div className="text-center mb-4">
      <p className="fw-semibold mb-1">{name}</p>

      <img
        src={photo}
        alt={name}
        className="img-fluid member-photo mb-2"
      />

      {showDescription && (
        <p className="member-description mx-auto">
          {description}
        </p>
      )}

      <p className="mt-1 mb-0 member-name-small">{name}</p>
      {role && <p className="mb-0 text-muted" style={{ fontSize: "0.75rem" }}>{role}</p>}
    </div>
  );
}

export default MemberCard;