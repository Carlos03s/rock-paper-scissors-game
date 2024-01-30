/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import rock from '../assets/rock.png';
import scissor from '../assets/scissor.png';
import paper from '../assets/paper.png';

interface IPlayersSelectedOptions {
  option: string;
  index: number;
  img: string;
}

interface IGame {
  selectOption: (option: IPlayersSelectedOptions) => void;
}

export default function Game( { selectOption }: IGame ) {
  const [isSelected] = useState(true);

  const backgroundColor = isSelected ? 'backgroundComponets' : 'transparent';

  return (
    <div className={`w-[365.75px] h-[235px] flex flex-col justify-around max-[366px]:w-full`}>

      <div className='w-full flex justify-center'>
        <div
          className='w-[109px] h-[91px] border-2 border-lightPurple rounded-3xl flex items-center justify-center cursor-pointer'
          onClick={() => selectOption({
            option: 'paper',
            index: 0,
            img: paper
          })}
        >
          <img src={paper} alt="" className='w-[70.133px] mr-2'/>
        </div>
      </div>

      <div className='w-full flex justify-between'>

        <div
          className='w-[109px] h-[91px] border-2 border-lightPurple rounded-3xl flex items-center justify-center cursor-pointer'
          onClick={() => selectOption({
            option: 'scissor',
            index: 2,
            img: scissor
          })}
        >
          <img src={scissor} alt="" className='w-[70.13px] mr-2'/>
        </div>

        <div
          className={`w-[109px] h-[91px] bg-${backgroundColor} border-2 border-lightPurple rounded-3xl flex items-center justify-center cursor-pointer`}
          onClick={() => selectOption({
            option: 'rock',
            index: 1,
            img: rock
          })}
        >
          <img src={rock} alt="" className='w-[70.13px] mr-2'/>
        </div>

      </div>
    </div>
  );
}
