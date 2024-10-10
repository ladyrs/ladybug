'use client'
import { Badge } from '@/components/ui/badge'
import { useTimer } from 'react-timer-hook'

const padLeft = (value: number) => value.toString().padStart(2, '0')

export default function Countdown({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const { minutes, hours, days } = useTimer({ expiryTimestamp })

  return (
    <div className='flex items-center'>
      <Badge variant='outline' className='text-lg'>
        {padLeft(days)}
      </Badge>
      <span className='mx-2'>:</span>
      <Badge variant='outline' className='text-lg'>
        {padLeft(hours)}
      </Badge>
      <span className='mx-2'>:</span>
      <Badge variant='outline' className='text-lg'>
        {padLeft(minutes)}
      </Badge>
    </div>
  )
}
