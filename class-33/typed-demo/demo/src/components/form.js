import { useState, useEffect, useContext } from 'react';

import { ThemeContext } from '../context/theme.js';
import { SiteContext } from '../context/site.js';

function Form() {

  const themeContext = useContext(ThemeContext);
  const siteContext = useContext(SiteContext);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    let value = e.target.value;

    setInputValue(value);
  }


  // useEffect(() => setInputValue('test'), []);

  return (
    <form className={themeContext.mode}>
      <h1>{siteContext.title}</h1>
      <input name="test" onChange={handleChange} value={inputValue}></input>
      <input name="title" onChange={(e) => siteContext.changeTitle(e.target.value)} />
      <p>{inputValue}</p>
    </form >
  )
}

export default Form;
