import React from 'react';
import arrowUp from '../assets/arrowUp.png';

interface IHeader {
  score: number;
  winner: 'player1' | 'draw' | 'machine' | '';
}

export default function Header( { score, winner }: IHeader ) {
  return (
    <div className="border-2 border-violet-400 w-6/12 max-[777px]:min-w-[90%]
    h-60 bg-backgroundComponets rounded-3xl flex flex-row justify-between items-center ">

      <div className='text-4xl font-Outfit h-44 flex flex-col justify-between mx-8 min-w-[80px]'>
        <h1>rock</h1>
        <h1>paper</h1>
        <h1>scissor</h1>
      </div>

      <div className='bg-bgScore w-[159.474px] h-[107.113px] text-[32px] flex flex-col justify-center items-center
      rounded-3xl mr-6 min-w-[120px]'>
        <h1 className='text-center'>
          score <br />
        </h1>
        <div className='flex items-center gap-2'>
          { winner === 'player1' && <img src={arrowUp} className='h-[30px]' alt="" /> }
          {score}
        </div>
        <div className='flex '>
        </div>
      </div>

    </div>
  );
}
