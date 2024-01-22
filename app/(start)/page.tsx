import Header from '@/components/ui/header'
import { CreateAndJoinRoom } from './components'

export default function Start() {
  return (
    <section className='h-full bg-primary'>
      <div className='container'>
        <Header />
        <div className='relative h-[calc(100vh-4rem)] px-4 md:px-6'>
          <div className='h-full grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold sm:text-5xl xl:text-6xl/none text-white'>Welcome to our platform</h1>
                <p className='max-w-[600px] text-gray-100 md:text-xl dark:text-gray-400'>
                  Join our community and start creating your own rooms.
                </p>
              </div>

              <CreateAndJoinRoom />
            </div>
            {/* Change to image or svg*/}
            <div className='absolute bottom-20 right-20 top-10 w-[600px] bg-neutral-300'></div>
            {/* End change to image or svg*/}
          </div>
        </div>
      </div>
    </section>
  )
}
