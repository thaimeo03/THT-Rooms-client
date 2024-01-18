import { ROUTES } from '@/common/constants/routes.constant'
import Link from 'next/link'
import AvatarWithName from './components/avatar-with-name'

export default function Start() {
  return (
    <section className='w-full h-screen relative py-12 bg-primary'>
      <div className='absolute top-0 left-0 right-0 h-16'>
        <div className='relative h-full flex justify-end items-center right-20'>
          <AvatarWithName />
        </div>
      </div>
      <div className='container h-full flex items-center px-4 md:px-6 '>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold sm:text-5xl xl:text-6xl/none text-white'>Welcome to our platform</h1>
              <p className='max-w-[600px] text-gray-100 md:text-xl dark:text-gray-400'>
                Join our community and start creating your own rooms.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-emerald-500 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50'
                href={ROUTES.HOME}
              >
                Create Room
              </Link>
            </div>
          </div>
          {/* Change to image or svg*/}
          <div className='absolute w-[600px] top-20 right-20 bottom-20 bg-neutral-300'></div>
          {/* End change to image or svg*/}
        </div>
      </div>
    </section>
  )
}
