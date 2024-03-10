'use client'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import ParticipantsNavbar from './components/participants-navbar'
import ContentSide from './components/content-side'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { getRoleApi } from '@/apis/role.api'
import { useContext, useEffect } from 'react'
import { RoleContext, RoleContextType } from './components/role-context-provider'

export default function Room() {
  const params = useParams()
  const { setRole } = useContext(RoleContext) as RoleContextType

  const { data, isSuccess } = useQuery({
    queryKey: ['role'],
    queryFn: () => getRoleApi(params.id as string)
  })

  useEffect(() => {
    if (isSuccess) setRole(data.data)
  }, [isSuccess])

  return (
    <ResizablePanelGroup direction='horizontal' className='min-h-[200px] w-full rounded-lg border'>
      <ResizablePanel defaultSize={18} maxSize={18}>
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>
            <ParticipantsNavbar />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={82}>
        <ContentSide />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
