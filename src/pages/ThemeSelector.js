import React, { useEffect } from 'react';
import 'theme-change';

const ThemeSelector = () => {
  useEffect(() => {
    // Apply the saved theme from local storage when the component mounts
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('theme', selectedTheme); // Save the selected theme in local storage
  };

  return (
    <div className="flex justify-center mt-10">
      <select 
        onChange={handleThemeChange} 
        className="select select-bordered bg-base-100 text-base-content"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
        <option value="bumblebee">Bumblebee</option>
        <option value="emerald">Emerald</option>
        <option value="corporate">Corporate</option>
        <option value="synthwave">Synthwave</option>
        <option value="retro">Retro</option>
        <option value="cyberpunk">Cyberpunk</option>
        <option value="valentine">Valentine</option>
        <option value="halloween">Halloween</option>
        <option value="garden">Garden</option>
        <option value="forest">Forest</option>
        <option value="aqua">Aqua</option>
        <option value="lofi">LoFi</option>
        <option value="pastel">Pastel</option>
        <option value="fantasy">Fantasy</option>
        <option value="wireframe">Wireframe</option>
        <option value="black">Black</option>
        <option value="luxury">Luxury</option>
        <option value="dracula">Dracula</option>
        <option value="cmyk">CMYK</option>
        <option value="autumn">Autumn</option>
        <option value="business">Business</option>
        <option value="acid">Acid</option>
        <option value="lemonade">Lemonade</option>
        <option value="night">Night</option>
        <option value="coffee">Coffee</option>
        <option value="winter">Winter</option>
        <option value="dim">Dim</option>
        <option value="nord">Nord</option>
        <option value="sunset">Sunset</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
