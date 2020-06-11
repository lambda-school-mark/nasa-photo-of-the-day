import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ApodCard from "./ApodCard";

const API_KEY = "7JOcMJeqEgWhnI6z4iSFMlcQqbJ8MPe3QoN3mtof";

const Base_URL = "https://api.nasa.gov";

function App() {
  const [cardState, setCardState] = useState({});

  useEffect(() => {
    axios
      .get(`${Base_URL}/planetary/apod?api_key=${API_KEY}`)
      .then((Response) => {
        console.log(Response);
        setCardState(Response.data);
      });
  }, []);

  return (
    <div className="App">
      <ApodCard info={cardState} />;
    </div>
  );
}

export default App;
