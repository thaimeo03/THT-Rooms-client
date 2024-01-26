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
import { useForm } from 'react-hook-form'
import { ICreateRoom } from '@/interfaces/room.interface'
import { useMutation } from '@tanstack/react-query'
import { createRoomApi } from '@/apis/room.api'
import useGetRooms from '@/common/hooks/useGetRooms'

export default function BoxAddNew() {
  const [color, setColor] = useState('#aabbcc')
  const { prefetchRooms } = useGetRooms()

  // Initialize react hook form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<ICreateRoom, 'color'>>({
    // resolver:
  })

  // Create room mutation
  const createRoomMutation = useMutation({
    mutationFn: (data: ICreateRoom) => createRoomApi(data),
    onSuccess: (data) => {
      console.log(data)
      return prefetchRooms()
    }
  })

  const handleSubmitForm = (data: Omit<ICreateRoom, 'color'>) => {
    const payLoad: ICreateRoom = {
      name: data.name,
      color
    }

    createRoomMutation.mutate(payLoad)
  }

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
          </DialogHeader>
          <form onSubmit={handleSubmit(handleSubmitForm)} className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' className='col-span-3' register={register('name')} errors={errors.name} />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label className='text-right'>Color</Label>
              <HexColorPicker color={color} onChange={setColor} />
            </div>
            <DialogFooter>
              <Button type='submit'>Create</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
