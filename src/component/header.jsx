import React from "react";

function Header() {
  const headerStyles = {
    color: "blue", 
    textAlign: "center",
  };

  return (
    <div className="header">
      <h1 style={headerStyles}>Rashith</h1>
    </div>
  );
}

export default Header;