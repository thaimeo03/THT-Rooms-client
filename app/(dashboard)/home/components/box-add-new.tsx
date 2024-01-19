'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FaPlus } from 'react-icons/fa'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

export default function BoxAddNew() {
  const [color, setColor] = useState('#aabbcc')

  return (
    <div className='col-span-2'>
      <Dialog>
        <DialogTrigger asChild>
          <div className='w-full h-full grid place-items-center'>
            <div className='p-16 border border-b-2 rounded-full cursor-pointer hover:bg-neutral-200 hover:bg-opacity-10'>
              <FaPlus size={32} />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Create room</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' defaultValue='Pedro Duarte' className='col-span-3' />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Color</Label>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
          </div>
          <DialogFooter>
            <Button type='submit'>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
