import React, { useEffect, useState, ChangeEvent} from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import ResultTable from './components/ResultTable/ResultTable';
import './components/SearchInput/SearchInput.tsx'

function App() {
  const [SearchResults, setSearchResults] = useState([])
  const[queryValue, setQueryValue] = useState("")

  //variabless

  // handles input change
  function handleChange(ev:ChangeEvent<HTMLInputElement>){
    setQueryValue(ev.target.value);
  }

  // use effect to load JSON on initial render
  useEffect(() => {
    let url = `http://www.songsterr.com/a/ra/songs.json?pattern=${queryValue}`;

    fetch(url)
    .then(response => response.json())
    .then(data => 
      setSearchResults(data)
    );
  }, [queryValue]);



  return (
    <div>
      <SearchInput handleChange={handleChange}/>
      <ResultTable searchResults={SearchResults}/>
    </div>
  );
}

export default App;
