import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Countdown from '../components/common/Countdown'
import { Award, BadgePlus, Crown } from 'lucide-react'

export default function Roll({ win }: { win: boolean }) {
  return (
    <Card className='relative my-8 w-[800px]'>
      {win && <Crown color='#F3CE49' size={64} className='absolute right-[-30px] top-[-30px] rotate-45' />}
      <CardHeader>
        <CardTitle className='flex items-center'>
          <Badge>
            <span className='text-xl'>1.0 $ETH</span>
          </Badge>
          <Badge variant='outline' className='ml-4'>
            <span className='text-xl'>3 Winners</span>
          </Badge>
          <div className='flex-1'></div>
          <Link href='/'>
            <span className='font-normal'>333 / 1000 </span>
          </Link>
        </CardTitle>
        <CardDescription>Each address can only buy one ticket.</CardDescription>
      </CardHeader>
      {/* <CardContent>123123123</CardContent> */}
      <Separator className='mb-8' />
      <CardContent>
        <div className='flex items-center'>
          <div className='flex-1'>
            <Progress value={33} />
          </div>
          <span className='inline-block pl-4'>33%</span>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div className='flex items-center'>
          <span className='mr-2 text-lg'>Ends in:</span>
          <Countdown expiryTimestamp={new Date(1728709250324)}></Countdown>
        </div>
        {!win && (
          <Button variant='secondary'>
            <BadgePlus className='mr-2' />
            Join <span className='mx-2 font-bold'>0.001</span> $ETH
          </Button>
        )}
        {win && (
          <Button variant='default'>
            <Award className='mr-2' />
            Claim your<span className='mx-2 font-bold'>1</span> $ETH
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
