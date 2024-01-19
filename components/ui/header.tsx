import AvatarWithName from '@/app/(start)/components/avatar-with-name'
import { ModeToggle } from './dark-mode-toggle'

export default function Header() {
  return (
    <div className='h-16'>
      <div className='relative h-full flex justify-end items-center'>
        <div className='flex flex-row items-center gap-5'>
          <ModeToggle />
          <AvatarWithName />
        </div>
      </div>
    </div>
  )
}
