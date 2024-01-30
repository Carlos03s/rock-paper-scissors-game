import React from 'react';
import PlayAgain from './result/PlayAgain';

interface IResult {
  player1SelectedOption: string;
  machineSelectedOption: string;
  handlePlayAgain(): void;
  winner: string
}

export default function Result( { machineSelectedOption, player1SelectedOption, handlePlayAgain, winner }: IResult ) {

  return (
    <div className='w-full h-[252px] flex max-[777px]:min-w-[90%]
     gap-3 max-[366px]:w-full max-[366px]:w-full max-[520px]:flex-col items-center justify-center'>
      <div className='max-[520px]:flex max-[520px]:w-full max-[520px]:justify-between flex min-[519px]:gap-12'>
        {/* player 1 */}
        <div className='w-[150px] flex flex-col items-center'>
          <h2 className='text-[27px] mb-2 max-[520px]:text-[15px]'>Player 1</h2>
          <div data-isPlayerWin={winner === 'player1'}
            data-isDraw={winner === 'draw'}
            className={`rounded-full flex items-center justify-center w-[141px] h-[132px] data-[isPlayerWin=true]:bg-[#D4F79F]
          data-[isDraw=true]:bg-[#9BA3B0] bg-[#F8C8CA] max-[520px]:w-[82px] max-[520px]:h-[87px]
          `}
          >
            <img
              src={player1SelectedOption}
              alt="" data-isDraw={winner === 'draw'}
              className='w-[82px] mr-2 filter data-[isDraw=true]:grayscale max-[520px]:w-[52px]'
            />
          </div>
        </div>
        {/* ///// */}

        {/* result */}
        <PlayAgain handlePlayAgain={handlePlayAgain} winner={winner} className='max-[520px]:hidden'/>
        {/* ///// */}

        {/* player 2 */}
        <div className='w-[150px] flex flex-col items-center'>
          <h2 className='text-[27px] mb-2 max-[520px]:text-[15px]'>Machine</h2>
          <div
            data-isMachineWin={winner === 'machine'}
            data-isDraw={winner === 'draw'}
            className={`rounded-full flex items-center justify-center w-[141px] h-[132px] data-[isMachineWin=true]:bg-[#D4F79F]
          data-[isDraw=true]:bg-[#9BA3B0] bg-[#F8C8CA] max-[520px]:w-[82px] max-[520px]:h-[87px]`}
          >
            <img
              src={machineSelectedOption}
              alt=""
              data-isDraw={winner === 'draw'}
              className='w-[82px] mr-2 filter data-[isDraw=true]:grayscale max-[520px]:w-[52px]'
            />
          </div>
        </div>
      </div>


      {/* result mobile */}
      <PlayAgain handlePlayAgain={handlePlayAgain} winner={winner} className='min-[519px]:hidden'/>

      {/* ///// */}
    </div>
  );
}
