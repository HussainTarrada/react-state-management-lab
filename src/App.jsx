import { useState } from 'react'
import './App.css'

function App() {
const [team, setTeam] = useState([])
const [money, setMoney] = useState(100)
const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])


function handleAddFighter(fighter){

  const newFighters = zombieFighters.filter((fighter)=>{
    return fighter.id !== 10
  })

  setZombieFighters(newFighters)
  setTeam([...zombieFighters, fighter])
  console.log(setTeam)



}


  return (
    <>
     <h2>All Zombie Fighters</h2>

     {zombieFighters.map((oneZombie)=>
      <div key={oneZombie.name}>
        <ul>
          <li>{oneZombie.img}</li>
          <li>{oneZombie.name}</li>
          <li>{oneZombie.price}</li>
          <li>{oneZombie.strength}</li>
          <li>{oneZombie.agility}</li>
          <br/>
        </ul>
        <button onClick={()=>{handleAddFighter({
          img: oneZombie.img,
          name: oneZombie.name,
          price: oneZombie.price,
          strength: oneZombie.strength,
          agility: oneZombie,
        })}}>Add to your team</button>
      </div>
    )}

    <p>Money: {money}</p>

    </>
  )
}

export default App
