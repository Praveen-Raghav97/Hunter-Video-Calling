"use client" ;
import MeetingSetup from '@/components/MeetingSetup'
import MeetingRoom from '@/components/MeetingRoom'
import { useUser } from '@clerk/nextjs'

import { StreamCall ,StreamTheme } from '@stream-io/video-react-sdk'
import React, { useActionState, useState } from 'react'
import { useGetCallById } from '@/hooks/useGetCallById'
import Loader from '@/components/Loader'

const MeetingPage = ({params:{id}} :{params :{id:string}}) => {

  const {user , isLoaded} =useUser();
    const [isSetupComplete, setisSetupComplete] = useState(false)

    const {call , isCallLoading} = useGetCallById(id)

    if(!isLoaded || isCallLoading) return <Loader/>

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>

        {!isSetupComplete ? (
          <MeetingSetup setIsSetupComplete={setisSetupComplete}/>
        ) : (
          <MeetingRoom />
        )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default MeetingPage
