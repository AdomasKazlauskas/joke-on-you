import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import MakeMeLaugh from "./components/ButtonFunction";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((response) => response.json())
      .then((data) => {
        setJokes(data.jokes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="page">
      <div className="mainFrame">
        <h1 className="frameTitle">Programming Jokes</h1>
        <ul className="frameLine">
          {jokes.map((joke) => (
            <li key={joke.id}>
              {joke.type === "single" ? (
                <div>
                  <strong className="typeOfJoke">Single Joke:</strong>{" "}
                  {joke.joke}
                </div>
              ) : (
                <div>
                  <strong className="typeOfJoke">Setup & Delivery Joke:</strong>
                  <br />
                  {joke.setup}
                  <br />
                  {joke.delivery}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <MakeMeLaugh />
    </div>
  );
}

export default App;
