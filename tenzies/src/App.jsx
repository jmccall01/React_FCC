import React from 'react'
import './App.css'
import Die from './components/Die.jsx';
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = React.useState(newDice());
  const [tenzies, setTenzies] = React.useState(false);
  
  React.useEffect(() => {
    const diceValue = dice[0].val;
    const diceEqual = dice.every(die => die.val === diceValue);
    const noRollableDice = dice.every(die => !die.canRoll);
    if(diceEqual && noRollableDice){
      setTenzies(true);
    }

  },
  [dice])

  function getValue(){
    return Math.ceil(Math.random() * 6);
  }

  function newDice(){

    const diceArr = []; 
    for(let i=0; i<10; i++){
      const newDie = {
        val: getValue(),
        canRoll: true,
        id: i+1
      }
      diceArr.push(newDie)
    };
    return diceArr;
  }
  
  function handleClick(dieID){
    setDice(pre => pre.map(die =>{
        return (
          die.id == dieID ?
          {...die, canRoll: !die.canRoll} :
          die
        )
      })
    )
  };

  function rollRollableDice(){
    if(tenzies){
      setDice(newDice());
      setTenzies(false);
    }
    else {
      setDice(pre => pre.map((die, j) =>{
        return(
          die.canRoll ?
            {val: getValue(), canRoll: true, id: j+1} :
              die
        )    
      }
      ))
    }
  }

  const allDice = dice.map((die) => (
    <Die key={die.id} data={die} rollable={()=>handleClick(die.id)} />
  ))


  return (
    <>
      {tenzies && <Confetti />}
      <div className='layer1'>
        <div className='layer2'>
          <div className='layer3'>
            <h1 className="title">Tenzies</h1>
            <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='diceContainer'>
              {allDice}
            </div>
            <div className='button-container'>
             <button className='roll' onClick={rollRollableDice}>{tenzies ? "Play Again" : "Roll"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
