import React, {useEffect, useState} from 'react';

const App = () => {

  const [text, setText] = useState<string>("light");
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    const checkValue: boolean = !checked;
    setChecked(!checked);
    setText(checkValue ? "dark" : "light");
  }
  
  useEffect(() => { 
    document.body.setAttribute('data-theme', text);
  }, [text]);

  return (
    <>
      <div className="wrapper">
        <h1>{text} mode</h1>
        <div className="switch-wrap">
          <label className="switch">
            <input
              id="btn"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </>
  );
}

export default App;