import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();
  
  //current Time

  const time = now.toLocaleTimeString('en-US',
    {hour:'2-digit',
      minute:'2-digit',
    }
  );
  //current date
  const date = (new Intl.DateTimeFormat('en-Us',
    {
      dateStyle:'full'
    }
  )).format(now);
   

  
  return (
    <section className='flex size-full flex-col gap-10 rounded-xl text-lite-2 pb-0 px-2'>
     <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
      <div className=' flex h-full flex-col p-4 justify-between max-md:py-8 lg:p-11
      '>
        <h2 className='glassmorphism max-w-[270px] rounded
        py-2 text-center text-base font-normal'>Upcomming Meeting at: 12:30pm</h2>
        <div className='flex flex-col gap-2'>
             <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
             <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
        </div>

      </div>
     </div>
      
      <MeetingTypeList/>
    </section>
  )
}

export default Home
