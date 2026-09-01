// src/App.jsx
import React from 'react';
import { useState } from 'react';
import "./App.css";

// Data
const characters = [
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",},
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",},
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",},
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",},
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",},
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",},
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",},
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",},
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",},
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",},
];

const totalCost = (currTeam) => currTeam.reduce((acc, character) => acc + character.price, 0);

const totalStrength = (currTeam) => currTeam.reduce((acc, character) => acc + character.strength, 0);

const totalAgility = (currTeam) => currTeam.reduce((acc, character) => acc + character.agility, 0);

function App() {
  const [currTeam, setCurrTeam] = useState([]);

  const totalCostValue = totalCost(currTeam);
  const totalStrengthValue = totalStrength(currTeam);
  const totalAgilityValue = totalAgility(currTeam);

  const addMember = (character) => {
    setCurrTeam((oldTeam) => {
      const alreadySelected = oldTeam.find((member) => member.name === character.name);

      if (alreadySelected) { 
        const currCost = totalCost(oldTeam);
        const currStrength = totalStrength(oldTeam);
        const currAgility = totalAgility(oldTeam);
        return oldTeam;}
      
      const currCost = totalCost(oldTeam) + character.price;
      const currStrength = totalStrength(oldTeam) + character.strength;
      const currAgility = totalAgility(oldTeam) + character.agility;
      return [...oldTeam, character];


    });
  };

  const removeMember = (character) => {
    setCurrTeam((oldTeam) => {
      const newTeam = oldTeam.filter((member) => member.name !== character.name);
      
      const currCost = totalCost(newTeam);
      const currStrength = totalStrength(newTeam);
      const currAgility = totalAgility(newTeam);
      return newTeam;
    });
  };

  return (
  <main className="App">
  <h1>Zombie Fighters</h1>

  <div className="summary">
    <div>
      <span>Money: {totalCostValue}</span>
      </div>
    <div>
      <span>Strength: {totalStrengthValue}</span>
      </div>
    <div>
      <span>Agility: {totalAgilityValue}</span>
    </div>
  </div>

  <section className="pick-team">
    <h2>Team</h2>
    <span>{currTeam.map((member) => member.name).join(", ")}</span>
  </section>

  <h2>Fighters</h2>
  <section className="characters">
    
    {characters.map((character) => (
      <div className="character-card">
        <img src={character.img} alt={character.name} />
        <h3>{character.name}</h3>
        <p>Price: {character.price}</p>
        <p>Strength: {character.strength}</p>
        <p>Agility: {character.agility}</p>
        <button onClick={() => addMember(character)}>Add</button>
        <button onClick={() => removeMember(character)}>Remove</button>
      </div>
    ))}
  </section>  

  </main>
  );
}

export default App;