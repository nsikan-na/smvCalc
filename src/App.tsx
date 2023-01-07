import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const FACE = 5;
  const HEIGHT = 3;
  const BODY = 2;
  const MONEY = 2;
  const P = 2;
  const IQ = 1;
  const eightOptions = [
    1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8,
  ];
  const raceOptions = [-1, 0, 0.5];
  const locationOption = [-1, 0.5, 1];
  const [face, setFace] = useState<any>();
  const [height, setHeight] = useState<any>();
  const [body, setBody] = useState<any>();
  const [money, setMoney] = useState<any>();
  const [p, setP] = useState<any>();
  const [iq, setIq] = useState<any>();
  const [smv, setSMV] = useState<any>();
  const [race, setRace] = useState<any>();
  const [location, setLocation] = useState<any>();
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
      (
        Math.pow(
          Math.pow(+face, FACE) *
            Math.pow(+height, HEIGHT) *
            Math.pow(+body, BODY) *
            Math.pow(+money, MONEY) *
            Math.pow(+p, P) *
            Math.pow(+iq, IQ),
          1 / 13
        ) +
        +race +
        +location
      ).toFixed(2)
    );
  };
  useEffect(() => {
    console.log(smv);
  }, [smv]);
  const renderOptions = () => {
    return eightOptions.map((x) => (
      <>
        <option hidden></option>
        <option>{x}</option>
      </>
    ));
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
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setFace(e.target.value);
          }}
          value={face}
        >
          {renderOptions()}
        </select>
      </div>
      <img src="/height.png" height="450" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Height:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          value={height}
        >
          {renderOptions()}
        </select>
      </div>
      <img src="/bmi.png" height="350" />
      <br />
      <img src="/body1.png" height="350" />
      <br />
      <img src="/bmi2.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Body:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
        >
          {renderOptions()}
        </select>
      </div>
      <img src="/money.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Money:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setMoney(e.target.value);
          }}
          value={money}
        >
          {renderOptions()}
        </select>
      </div>
      <img src="/p.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>P:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setP(e.target.value);
          }}
          value={p}
        >
          {renderOptions()}
        </select>
      </div>
      <img src="/iq.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>IQ:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setIq(e.target.value);
          }}
          value={iq}
        >
          {renderOptions()}
        </select>
      </div>
      <img src="/race.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Race:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setRace(e.target.value);
          }}
          value={race}
        >
          <option hidden></option>
          {raceOptions.map((x) => (
            <option>{x}</option>
          ))}
        </select>
      </div>
      <img src="/location.png" height="350" />
      <div style={{ margin: "1rem" }}>
        <label style={{ marginRight: "1rem" }}>Location:</label>
        <select
          style={{ padding: ".25rem" }}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
        >
          <option hidden></option>
          {locationOption.map((x) => (
            <option>{x}</option>
          ))}
        </select>
      </div>
      <button onClick={calculateSMV}>Calculate SMV</button>
      <br />
      <br />
      <img src="smv.png" height="350" />
      <h2 style={{ margin: "1rem" }}>{smv}</h2>
    </>
  );
}

export default App;
