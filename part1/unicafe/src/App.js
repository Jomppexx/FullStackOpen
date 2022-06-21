import { useState } from "react";

const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const StatisticsLine = ({ text, value, isPercentage }) => {
  if (isPercentage) {
    return (
      <tr>
        <td>
          {text}
          {value}%
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral, total }) => {
  if (total === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given yet</p>
      </>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>
      <tbody>
        <StatisticsLine
          text="Good ratings: "
          value={good}
          isPercentage={false}
        />
        <StatisticsLine
          text="Neutral ratings: "
          value={neutral}
          isPercentage={false}
        />
        <StatisticsLine text="Bad ratings: " value={bad} isPercentage={false} />
        <StatisticsLine
          text="Ratings in total: "
          value={total}
          isPercentage={false}
        />
        <StatisticsLine
          text="Average rating: "
          value={((good - bad) / total).toFixed(2)}
          isPercentage={false}
        />
        <StatisticsLine
          text="Percentage positive: "
          value={((good / total) * 100).toFixed(2)}
          isPercentage={true}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const addGood = () => {
    let newGood = good;
    let newTotal = total;
    newTotal++;
    newGood++;
    setGood(newGood);
    setTotal(newTotal);
    console.log("Added good");
  };

  const addNeutral = () => {
    let newNeutral = neutral;
    let newTotal = total;
    newNeutral++;
    newTotal++;
    setNeutral(newNeutral);
    setTotal(newTotal);
    console.log("Added neutral");
  };

  const addBad = () => {
    let newBad = bad;
    let newTotal = total;
    newBad++;
    newTotal++;
    setBad(newBad);
    setTotal(newTotal);
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
      <br />
      <Statistics good={good} bad={bad} neutral={neutral} total={total} />
    </>
  );
};

export default App;
