import { useState } from 'react';
import axios from 'axios';

function useAjax(url) {

  // ideally custom hooks manage their own sliver of 'state'.
  const [data, setData] = useState([]);

  async function fetchData() {
    let response = await axios.get(url);

    setData(response.data.results);
  }


  return [
    data,
    fetchData,
  ]
}

export default useAjax;
