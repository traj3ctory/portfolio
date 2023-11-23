import { useState, useEffect } from "react";

const ToggleMode = () => {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode === false) {
      document.body.classList.add("light__mode");
    } else {
      document.body.classList.remove("light__mode");
    }
  }, [mode]);

  return (
    <div className="toggle">
      <input
        type="checkbox"
        checked={mode}
        onChange={() => setMode(!mode)}
        id="toggle_checkbox"
      />
      <label htmlFor="toggle_checkbox">
        <div id="moon" />
        <div id="star">
          <div className="star" id="star-1">
            ★
          </div>
          <div className="star" id="star-2">
            ★
          </div>
        </div>
      </label>
    </div>
  );
};

export default ToggleMode;
