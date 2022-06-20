import { useState } from "react";

const Button = ({ clickHandler, text }) => {
  return(
  <button onClick={clickHandler}>{text}</button>)
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    let newGood = good;
    newGood++;
    setGood(newGood);
    console.log("Added good");
  };

  const addNeutral = () => {
    let newNeutral = neutral;
    newNeutral++;
    setNeutral(newNeutral);
    console.log("Added neutral");
  };

  const addBad = () => {
    let newBad = bad;
    newBad++;
    setBad(newBad);
    console.log("Added bad");
  };

  return (
    <>
      <h1>Please leave your feedback below</h1>
      <div>
        <Button clickHandler={addGood} text="Add Good" />
        <Button clickHandler={addNeutral} text="Add Neutral" />
        <Button clickHandler={addBad} text="Add Bad" />
      </div>
      <br/>
      <h2>Statistics</h2>
      <p>Good ratings: {good}</p>
      <p>Neutral ratings: {neutral}</p>
      <p>Bad ratings: {bad}</p>
    </>
  );
};

export default App;
