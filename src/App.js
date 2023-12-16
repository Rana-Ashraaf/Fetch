import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [memeData, setMemes] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://meme-api.com/gimme/wholesomememes/1000")
        .then((res) => res.json())
        .then((res) => setMemes(res.memes));
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Memes</h1>
      {memeData.map((meme, index) => {
        return (
          <img style={{ width: "50%" }} key={index} src={meme.url} alt="meme" />
        );
      })}
    </div>
  );
}

export default App;
