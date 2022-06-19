import React , { useState, useEffect } from 'react'

const App = () => {
  const [color, setColor] = useState("black"); 

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black")
        setColor("darkred");
      else if (color === "darkred")
        setColor("darkgreen");
      else if (color === "darkgreen")
        setColor("darkorange");
      else if (color === "darkorange")
        setColor("darkblue");
      else if (color === "darkblue")
        setColor("purple");
      else 
        setColor("black");
    };
  
    document.addEventListener("click", changeColorOnClick);

    return () => { //useEffect hook return statement runs when unmounted
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]); //useEffect hook runs when color changes

  return (
    <div>
      <div id="myDiv"
        style={{
          color: "white",
          width: "200px",
          height: "200px",
          position: "absolute",
          left: "44%",
          top: "33%",
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>Click on me!
      </div>
    </div>
  );
};

export default App;