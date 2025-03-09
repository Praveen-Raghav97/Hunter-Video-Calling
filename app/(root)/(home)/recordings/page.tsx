import CallList from '@/components/CallList'
import React from 'react'

const Recording = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-dark-1'>
    <h1 className='text-3xl font-bold'>
      Recordings
    </h1>
    <CallList type='recordings' />
  </section>
  )
}

export default Recording
