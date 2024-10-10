'use client'
import { Pacifico } from 'next/font/google'
import { Button } from '@/components/ui/button'

const pacifico = Pacifico({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export default function NewBtn() {
  return (
    <div className='pr-4'>
      <Button variant='default' className={pacifico.className}>
        Create Pool
      </Button>
    </div>
  )
}
