'use client'
import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Check, CopyIcon, X } from 'lucide-react'

interface CopyModelProps {
  text: string
}

export default function CopyModel({ text }: CopyModelProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [textCopied, setTextCopied] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleCopy = () => {
    copy(text)
    !textCopied && setTextCopied(true)
  }

  return (
    isOpen && (
      <div className='fixed bottom-0 right-4 z-50'>
        <div className='relative grid place-items-center rounded w-96 h-28 p-4 bg-black bg-opacity-30'>
          <X className='absolute top-2 right-2 h-4 w-4 cursor-pointer hover:border' onClick={handleClose} />
          <div className='mt-3 w-full'>
            <div className='flex items-center space-x-2'>
              <div className='grid flex-1 gap-2'>
                <Label htmlFor='link' className='sr-only'>
                  Link
                </Label>
                <Input id='link' className='w-full' defaultValue='Click to copy the link' readOnly />
              </div>
              <Button type='submit' onClick={handleCopy} size='sm' className='hover:bg-opacity-80'>
                <span className='sr-only'>Copy</span>
                {textCopied ? <Check className='h-4 w-4' /> : <CopyIcon className='h-4 w-4' />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
