import loginBackground from '@/public/images/login-background.jpeg'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import { BASE_URL } from '@/apis/api'

export default function Login() {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-gray-900'>
      <Image
        src={loginBackground}
        alt='login background'
        className='absolute h-full w-full object-cover'
        priority={true}
      />
      <div className='rounded-xl bg-gray-800 bg-opacity-40 px-14 py-10 shadow-lg backdrop-blur-sm max-sm:px-8'>
        <div className='w-full flex flex-col gap-4'>
          <Link
            href={`${BASE_URL}/auth/google`}
            className='bg-white text-black rounded font-medium w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-neutral-300 duration-100 ease-in-out'
          >
            <FcGoogle size={28} />
            Sign-in with Google
          </Link>
          <Link
            href={`${BASE_URL}/auth/facebook`}
            className='bg-blue-600 text-white rounded font-medium w-full p-2 flex flex-row justify-center gap-2 items-center hover:bg-blue-700 duration-100 ease-in-out'
          >
            <FaFacebook size={26} />
            Sign-in with Facebook
          </Link>
        </div>
      </div>
    </div>
  )
}
