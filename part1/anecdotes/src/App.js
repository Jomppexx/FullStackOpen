import { useState } from "react";

const TopAnecdote = ({ anecdotes, points }) => {
  var topPoints = 0;
  var topIndex = 0;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > topPoints) {
      topPoints = points[i];
      topIndex = i;
    }
  }
  if(topPoints === 0){
    return(
      <div>All anecdotes have 0 points.</div>
    )
  }
  return (
    <>
      <div>{anecdotes[topIndex]}</div>
      <div>This anecdote has {topPoints} points.</div>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(7));

  const addVote = () => {
    const pointsCopy = [...points];
    console.log("Selected add while voting: ", selected);
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  const randomizeAnecdote = () => {
    let newAnecdote = (Math.random() * (anecdotes.length - 1)).toFixed(0);
    console.log(newAnecdote);
    while (newAnecdote === selected) {
      console.log("New anecdote was same as previous, rerolling...");
      newAnecdote = (Math.random() * (anecdotes.length - 1)).toFixed(0);
      console.log("After reroll: ", newAnecdote);
    }
    setSelected(newAnecdote);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>This anecdote has {points[selected]} votes.</p>
      <button onClick={addVote} selected={selected}>
        Vote
      </button>
      <button onClick={randomizeAnecdote}>Click me for new wisdom</button>
      <h2>Top anecdote</h2>
      <TopAnecdote points={points} anecdotes={anecdotes}/>
    </div>
  );
};

export default App;
