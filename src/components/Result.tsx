import React from 'react';

interface IResult {
  player1SelectedOption: string;
  machineSelectedOption: string;
  handlePlayAgain(): void;
  winner: string
}

export default function Result( { machineSelectedOption, player1SelectedOption, handlePlayAgain, winner }: IResult ) {

  console.log({
    winner
  });

  const victoryColor = '#D4F79F';
  const looserColor = '#F8C8CA';
  const drawColor = '#9BA3B0';

  return (
    <div className='w-4/12 h-[252px] bg- flex items-center justify-between max-[777px]:min-w-[90%] max-[777px]:min-h-[60%]'>
      {/* player 1 */}
      <div className='w-[150px] flex flex-col items-center'>
        <h2 className='text-[27px] mb-2'>Player 1</h2>
        <div className={`rounded-full flex items-center justify-center w-[141px] h-[132px]`} style={{ backgroundColor: winner === 'player1' ? victoryColor : winner === 'draw' ? drawColor : looserColor }}>
          <img src={player1SelectedOption} alt="" className='w-[82px] mr-2'/>
        </div>
      </div>
      {/* ///// */}

      {/* result */}
      <div className="w-[159px] h-[149px] relative self-start	max-[390px]:right-[35px] max-[320px]:right-[60px]">
        <div className="w-[159px] h-[41px] left-0 top-[108px] absolute">
          <button className="w-[159px] h-[33px] left-0 top-0 absolute bg-violet-500 rounded-3xl hover:bg-violet-900">
            <div
              className="w-[159px] h-10 left-0 top-[1px] absolute text-center text-white text-xl font-normal cursor-pointer"
              onClick={handlePlayAgain}
            >play again</div>
          </button>
        </div>

        { winner === 'player1' &&
        <>
          <div className="w-[99px] h-10 left-[30px] top-[22px] absolute text-white text-[27px] font-normal mt-3">You won</div>
          <div className="w-[60px] h-[40px] left-[64px] top-0 absolute">
            <h1 className='text-[27px]'>🥳</h1>
          </div>
        </>
        }

        { winner === 'draw' &&
        <>
          <div className="w-[99px] h-10 left-[30px] top-[22px] absolute text-white text-[27px] font-normal mt-3">Draw...</div>
          <div className="w-[60px] h-[40px] left-[57px] top-0 absolute">
            <h1 className='text-[27px]'>😐</h1>
          </div>
        </>
        }

        { winner === 'machine' &&
        <>
          <div className="w-[99px] h-10 left-[30px] top-[22px] absolute text-white text-[27px] font-normal mt-3">You lost</div>
          <div className="w-[60px] h-[40px] left-[64px] top-0 absolute">
            <h1 className='text-[27px]'>😓</h1>
          </div>
        </>
        }


      </div>
      {/* ///// */}

      {/* player 2 */}
      <div className='w-[150px] flex flex-col items-center'>
        <h2 className='text-[27px] mb-2'>Machine</h2>
        <div className={`rounded-full flex items-center justify-center w-[141px] h-[132px]`} style={{ backgroundColor: winner === 'machine' ? victoryColor : winner === 'draw' ? drawColor : looserColor }}>
          <img src={machineSelectedOption} alt="" className='w-[82px] mr-2'/>
        </div>
      </div>
      {/* ///// */}


    </div>
  );
}
