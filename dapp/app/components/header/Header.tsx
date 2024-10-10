import { ModeToggle } from './ModeToggle'
import ConnectBtn from './ConnectBtn'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NewBtn from './NewBtn'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='sticky top-0 flex items-center border-b p-4' style={{ backgroundColor: 'hsl(var(--background))' }}>
      <div className='flex flex-1 text-2xl font-bold'>
        <div className='w-6'></div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className='cursor-pointer'>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className='text-xl font-bold dark:text-white'>Lady</span>
                  <span className='text-xl font-bold text-yellow-500'>bug</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='cursor-pointer'>
              <Link href='/leaderboard' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <span className='text-xl'>Leaderboard</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NewBtn></NewBtn>

      <ModeToggle></ModeToggle>
      <div className='inline-block w-4'></div>
      <ConnectBtn></ConnectBtn>
    </div>
  )
}
