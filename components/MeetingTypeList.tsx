'use client'
import { Toaster } from "@/components/ui/toaster"
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModel from './MeetingModel'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { error } from 'console'
import { useToast } from "./ui/use-toast"
import { Textarea } from "./ui/textarea"
import ReactDatePicker from 'react-datepicker';
import MeetingModal from "./MeetingModel"
import { Input } from "./ui/input"
const MeetingTypeList = () => {
  const router = useRouter()
 const [meetingState , setMeetingState] = useState<
 'isSchedualMeeting' 
 | 'isJoiningMeeting' |
  'isInstantMeeting'|
  undefined
  >();

  const {user} = useUser();
  const client = useStreamVideoClient()
  const [values, setValues] = useState(
    {
      dateTime: new Date() ,
      description: '' ,
      link:''
    }
  );
  const [callDetails , setCallDetails] = useState<Call>()
  
 
  const createMeeting = async () =>{


    if(!user || !client) return;
    try {
      if (!values.dateTime) {
        toast({
          title: "Please Select A Date And Time",
         
        })
      }
      const id = crypto.randomUUID()
      const call = client.call('default' ,id) ;
      if(!call) throw new Error('Failed To Create A Call');

      const startAt = values.dateTime.toISOString() ||
      new Date(Date.now()).toISOString();

      const description = values.description || 'Instant meeting';

      await call.getOrCreate({
        data:{
          starts_at:startAt,

          custom:{
            description
          }
        }
        
      }

      )
      setCallDetails(call) //function call

      if(!values.description){
        router.push(`/meeting/${call.id}`)
      }

      toast({
        title: "Succesfully",
        description: "  Meeting is Created Succesfully",
      })
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed To Create Meeting",
        description: "Something Went Wrong Create Meeting",
      })
    
    }
  }

  const { toast } = useToast()

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL} /meeting/${callDetails?.id}`
  return ( 
    <section className='grid  grid-cols-1 gap-5 
     md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
     img="/icons/add-meeting.svg"
     title="New Meeting"
     description="Start an instant meeting"
     handleClick={()=> setMeetingState ('isInstantMeeting')}
     className="bg-indigo-700 text-lite-1 font-bold"
       />
      <HomeCard
      img="/icons/join-meeting.svg"
      title="Join Meeting"
      description="via invitation link"
      className="bg-indigo-300 text-lite-1 font-bold"
      handleClick={()=> setMeetingState ('isJoiningMeeting')}
      />
      <HomeCard 
       img="/icons/schedule.svg"
       title="Schedule Meeting"
       description="Plan your meeting"
       className="bg-indigo-200 text-lite-1 font-bold"
       handleClick={()=> setMeetingState ('isSchedualMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-indigo-500 text-lite-1 font-bold"
        handleClick={()=> router.push('/recordings')}
      />

      {!callDetails ? (
         <MeetingModel
         isOpen={meetingState === 'isSchedualMeeting'}
         onClose={() => setMeetingState(undefined)}
         title ="Create Metting"
        
         handleClick ={createMeeting}
         >
          <div className="flex flex-col gap-2.5">
          <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>

          <div className="flex w-full flex-col gap-2.5" >
          <label className="text-base font-normal leading-[22.4px] text-sky-2">
            Select date and time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          
          </div>
          
         </MeetingModel>
      ):(
        <MeetingModel
        isOpen={meetingState === 'isSchedualMeeting'}
        onClose={() => setMeetingState(undefined)}
        title ="  Meeting Created"
        className = 'text-center'
        buttonText = "Start Meeting"
        handleClick ={() => {
          navigator.clipboard.writeText(meetingLink);
         toast({ title:'Link Copied' })
        }}

        image="/icons/checked.svg"
        buttonIcon ="/icons/copy.svg"
      />
      )
      }
      
       <MeetingModel
       isOpen={meetingState === 'isInstantMeeting'}
       onClose={() => setMeetingState(undefined)}
       title ="Start Instant Meeting"
       className = 'text-center'
       buttonText = "Start Meeting"
       handleClick ={createMeeting}
       />

<MeetingModel
       isOpen={meetingState === 'isJoiningMeeting'}
       onClose={() => setMeetingState(undefined)}
       title ="Start Instant Meeting"
       className = 'text-center'
       buttonText = "Start Meeting"
       handleClick ={() => router.push(values.link)}
       >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />

       </MeetingModel>
     
    </section>
  )
}

export default MeetingTypeList
