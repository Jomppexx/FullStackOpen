import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setNewFilter] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      window.alert(`${newName} is already in the phonebook.`);
      return;
    }

    if (persons.find((person) => person.number === newNumber)) {
      window.alert(`The number ${newNumber} is already in use.`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  let namesToRender = persons.map((person, index) => <p key={index}>{person.name} {"-"} {person.number}</p>)

  //tämä filtteröinti toimii, nyt pitää vielä saada mapattua filtterin perusteella uudet renderöitävät ihmiset
  //eli funktio, josta palautetaan renderöitävät nimet kuten yllä
  let filteredPeople = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
  console.log(filteredPeople);

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>Add new contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange}/>
      </div>
      <br/>
      {namesToRender}
    </div>
  );
};

export default App;
