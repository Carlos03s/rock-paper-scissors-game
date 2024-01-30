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

type Winner = 'player1' | 'draw' | 'machine' | '';

function App() {
  const [player1, setPlayer1] = useState<IPlayersSelectedOptions>();
  const [machine, setMachine] = useState<IPlayersSelectedOptions>();
  const [winner, setWinner] = useState<Winner>('');
  const [score, setScore] = useState(0);

  const options = ['paper', 'rock', 'scissors'];
  const choosenIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[choosenIndex];

  function processWinner() {
    const playerSelectedOption = player1?.index as number;
    const machinneSelectedOption = machine?.index as number as number;
    const playerWon = playerSelectedOption > machinneSelectedOption;
    const isDraw = playerSelectedOption === machinneSelectedOption;

    if ( playerWon ) {
      setWinner('player1');
      setScore(prevState => prevState + 1);
      setWinner('player1');
    } else if (isDraw) {
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
        option: randomOption,
        index: choosenIndex,
        img: randomOption === 'paper' ? paper : randomOption === 'rock' ? rock : scissor
      });
    }
  }, [machine]);

  useEffect(() => {
    player1 && processWinner();
  }, [player1]);

  return (
    <div className='bg-default w-full h-screen flex flex-col items-center justify-evenly'>
      <Header
        score={score}
        winner={winner}
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
