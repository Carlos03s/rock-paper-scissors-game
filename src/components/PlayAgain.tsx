/* eslint-disable react/react-in-jsx-scope */
interface IResult {
  handlePlayAgain(): void;
  winner: string;
  className?: string;
}

export default function PlayAgain({ winner, handlePlayAgain, className }: IResult) {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <button className="w-[159px] h-[33px] bg-violet-500 rounded-3xl hover:bg-violet-900">
        <div
          className="w-[159px] h-10 text-center text-white text-xl font-normal cursor-pointer"
          onClick={handlePlayAgain}
        >play again
        </div>
      </button>

      { winner === 'player1' &&
    <>
      <div className="w-[99px] h-10 text-white text-[27px] font-normal mt-3">You won</div>
      <h1 className='text-[27px]'>🥳</h1>
    </>
      }

      { winner === 'draw' &&
    <>
      <div className="w-[99px] h-10 text-white text-[27px] font-normal mt-3">Draw...</div>
      <h1 className='text-[27px]'>😐</h1>
    </>
      }

      { winner === 'machine' &&
    <>
      <div className="w-[99px] h-10 text-white text-[27px] font-normal mt-3">You lost</div>
      <h1 className='text-[27px]'>😓</h1>
    </>
      }
    </div>
  );
}
