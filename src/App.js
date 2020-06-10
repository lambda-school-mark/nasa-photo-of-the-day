import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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

  const ApodCard = ({ info }) => (
    <div className="card">
      <div className="image-container">
        <img alt="" src={info.hdurl}></img>
        <p>{info.copyright}</p>
      </div>
      <div className="card-info">
        <h1> {info.title}</h1>
        <p> {info.explanation}</p>
        <p> Date: {info.date}</p>
      </div>
    </div>
  );

  return (
    <div className="App">
      <ApodCard info={cardState} />;
    </div>
  );
}

export default App;
