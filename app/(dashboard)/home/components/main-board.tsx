'use client'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { ContentSide } from '.'

export default function MainBoard() {
  return (
    <ResizablePanelGroup direction='horizontal' className='min-h-[200px] w-full rounded-lg border'>
      <ResizablePanel defaultSize={18} maxSize={18}>
        <div className='flex h-full items-center justify-center p-6'>
          <span className='font-semibold'>Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={82}>
        <ContentSide />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
