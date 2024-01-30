import React from 'react';

interface IHeader {
  score: number;
}

export default function Header( { score }: IHeader ) {
  return (
    <div className="border-2 border-violet-400 w-6/12 max-[777px]:min-w-[90%]
    h-60	bg-backgroundComponets rounded-3xl flex flex-row justify-between items-center ">

      <div className='text-4xl font-Outfit h-44 flex flex-col justify-between mx-8 min-w-[100px]'>
        <h1>rock</h1>
        <h1>paper</h1>
        <h1>scissor</h1>
      </div>

      <div className='bg-bgScore w-[159.474px] h-[107.113px] text-[32px] flex justify-center items-center
      rounded-3xl mx-8'>
        <h1 className='text-center'>
          score <br /> {score}
        </h1>
      </div>

    </div>
  );
}
