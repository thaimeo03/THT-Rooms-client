'use client'
import { getProfileApi } from '@/apis/user.api'
import { ROUTES } from '@/common/constants/routes.constant'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

export default function AvatarWithName() {
  const { data, isSuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileApi
  })
  const profile = data?.data

  return isSuccess ? (
    <div className='flex flex-row gap-2 items-center'>
      <span>{profile?.username}</span>
      <Avatar>
        <AvatarImage src={profile?.avatar} />
        <AvatarFallback>{profile?.username[0]}</AvatarFallback>
      </Avatar>
    </div>
  ) : (
    <Link href={ROUTES.LOGIN} className='text-white font-semibold underline hover:opacity-80'>
      Login
    </Link>
  )
}
