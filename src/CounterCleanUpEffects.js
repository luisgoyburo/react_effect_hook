import React, { useState, useEffect } from "react";

// si se agrega un event listener a un useEffect, hay que tener mucho cuidado de eliminarlo
// si no se producen problemas de memoria usada sin necesidad que puede llevar a una caida
// del sistema.

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  return <h1>Document Clicks: {clickCount}</h1>;
}
