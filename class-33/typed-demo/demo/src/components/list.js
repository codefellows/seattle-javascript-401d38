import { useState, useEffect } from 'react';
// import axios from 'axios';

import { useContext } from 'react';
import useAjax from '../hooks/useAjax.js';

import { ThemeContext } from '../context/theme.js'

function List() {


  // create our context from the imported context and useContext hook;
  const themeContext = useContext(ThemeContext);

  // const [items, setItems] = useState([]);
  const [data, fetchData] = useAjax('https://swapi.dev/api/people');

  // async function fetchData() {
  //   let response = await axios.get('https://swapi.dev/api/people');

  //   setItems(response.data.results);
  // }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {/** do something speical with updated items */ }, [data]);

  return (
    <ul className={themeContext.mode}>
      <button onClick={() => themeContext.toggleMode()}>Toggle Class</button>
      {data.map((item, idx) => {
        return (
          <li key={idx}>
            <p>{idx + 1}</p>
            <p>{item.name}</p>
          </li>
        )
      })}
    </ul>
  )
}


export default List;
