import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [face, setFace] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [body, setBody] = useState<number>();
  const [money, setMoney] = useState<number>();
  const [p, setP] = useState<number>();
  const [iq, setIq] = useState<number>();
  const [smv, setSMV] = useState<number>();
  const [race, setRace] = useState<number>();
  const [location, setLocation] = useState<number>();
  const calculateSMV = () => {
    if (
      !face ||
      !height ||
      !body ||
      !money ||
      !p ||
      !iq ||
      (race !== 0 && !race) ||
      !location
    )
      return;
    setSMV(
      Math.pow(
        Math.pow(face, 5) *
          Math.pow(height, 3) *
          Math.pow(body, 2) *
          Math.pow(money, 2) *
          Math.pow(p, 2) *
          Math.pow(iq, 1),
        1 / 13
      ) +
        race +
        location
    );
  };
  return (
    <>
      <h1>Calculate your Sexual Market Value</h1>
      <iframe
        width="600"
        height="350"
        src="https://www.youtube.com/embed/kZqNkkX7oeE"
      ></iframe>
      <br />
      <br />
      <img src="/calc-smv.png" height="350" />
      <br />
      <img src="/face.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Face:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setFace(+e.target.value);
          }}
          value={face}
        ></input>
      </div>
      <img src="/height.png" height="450" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Height:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setHeight(+e.target.value);
          }}
          value={height}
        ></input>
      </div>
      <img src="/bmi.png" height="350" />
      <br />
      <img src="/body1.png" height="350" />
      <br />
      <img src="/bmi2.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Body:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setBody(+e.target.value);
          }}
          value={body}
        ></input>
      </div>
      <img src="/money.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Money:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setMoney(+e.target.value);
          }}
          value={money}
        ></input>
      </div>
      <img src="/p.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>P:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setP(+e.target.value);
          }}
          value={p}
        ></input>
      </div>
      <img src="/iq.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>IQ:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setIq(+e.target.value);
          }}
          value={iq}
        ></input>
      </div>
      <img src="/race.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Race:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setRace(+e.target.value);
          }}
          value={race}
        ></input>
      </div>
      <img src="/location.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Location:</label>
        <input
          type="number"
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setLocation(+e.target.value);
          }}
          value={location}
        ></input>
      </div>
      <button onClick={calculateSMV}>Calculate SMV</button>
      <br />
      <br />
      <img src="smv.png" height="350" />
      <h2 style={{ margin: "1rem" }}>
        {smv?.toFixed(2) ? smv?.toFixed(2) + "%" : ""}
      </h2>
    </>
  );
}

export default App;
