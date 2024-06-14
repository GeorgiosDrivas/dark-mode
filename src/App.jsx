import {useEffect, useState} from 'react';

const App = () => {

  const [text, setText] = useState("light");
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const checkValue = !checked;
    setChecked(!checked);
    setText(checkValue ? "dark" : "light");
  }
  
  useEffect(() => { 
    document.body.setAttribute('data-theme', text);
  }, [text]);

  return(
    <div className='wrapper'>
      <h1>Mode: {text}</h1>
      <div className='switch-wrap'>
      <label className="switch">
        <input id="btn" type="checkbox" checked={checked} onChange={handleChange}/>
        <span className="slider round"></span>
      </label>
      </div>
    </div>
  )
}

export default App;