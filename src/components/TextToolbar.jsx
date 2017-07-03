import React from "react";

const TextToolbar = () => (
  <nav className="btn-group">
    <button className="btn-white icon--center icon-b-black">Bold</button>
    <button className="btn-white icon--center icon-italic-black">Italic</button>
    <button className="btn-white icon--center icon-underline-black">Underline</button>
    <button className="btn-white icon--center icon-left-black">Text Left</button>
    <button className="btn-white icon--center icon-center-black">Text Center</button>
    <button className="btn-white icon--center icon-right-black">Text Right</button>
  </nav>
);

export default TextToolbar;
