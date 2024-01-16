import loginBackground from '@/public/images/login-background.avif'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'

export default function Login() {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-900'>
      <Image
        src={loginBackground}
        alt='login background'
        className='absolute h-full w-full object-cover'
        priority={true}
      />
      <div className='rounded-xl bg-gray-800 bg-opacity-50 px-14 py-10 shadow-lg backdrop-blur-md max-sm:px-8'>
        <div className='w-full flex flex-col gap-4'>
          <button className='bg-white text-foreground rounded font-medium w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-neutral-300 duration-100 ease-in-out'>
            <FcGoogle size={28} />
            Sign-in with Google
          </button>
          <button className='bg-blue-600 text-white rounded font-medium w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out'>
            <FaFacebook size={26} />
            Sign-in with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
