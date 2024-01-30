import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Result from './components/Result';

import rock from './assets/rock.png';
import scissor from './assets/scissor.png';
import paper from './assets/paper.png';

interface IPlayersSelectedOptions {
  option: string;
  index: number;
  img: string
}

function App() {
  const [player1, setPlayer1] = useState<IPlayersSelectedOptions>();
  const [machine, setMachine] = useState<IPlayersSelectedOptions>();
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState(0);


  const options = ['paper', 'rock', 'scissors'];
  const choosenIndex = Math.floor(Math.random() * options.length);
  const random = options[choosenIndex];

  function processWinner() {
    const playerSelectedOption = player1?.index as number;
    const machinneSelectedOption = machine?.index as number as number;
    console.log({
      playerSelectedOption,
      machinneSelectedOption
    });


    if ( playerSelectedOption > machinneSelectedOption) {
      setWinner('player 1');
      setScore(prevState => prevState + 1);
      setWinner('player1');
    } else if (playerSelectedOption === machinneSelectedOption) {
      setWinner('draw');
    } else {
      setWinner('machine');
    }
  }

  const handlePlayAgain = () => {
    setPlayer1(undefined);
    setMachine(undefined);
    setWinner('');
  };

  useEffect(() => {
    if (!machine) {
      setMachine({
        option: random,
        index: choosenIndex,
        img: random === 'paper' ? paper : random === 'rock' ? rock : scissor
      });
    }
    console.log(machine);

  }, [machine]);

  useEffect(() => {
    player1 && processWinner();
  }, [player1]);


  return (
    <div className='bg-default w-full h-screen flex flex-col items-center justify-evenly'>
      <Header
        score={score}
      />

      { winner.length > 0 ? <Result
        player1SelectedOption={player1?.img as string}
        machineSelectedOption={machine?.img as string}
        handlePlayAgain={handlePlayAgain}
        winner={winner}
      /> : <Game selectOption={setPlayer1} />
      }
    </div>
  );
}

export default App;
