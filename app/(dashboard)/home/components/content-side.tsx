import { BoxAddNew } from '.'
import BoxJoinRoom from './box-join-room'

export default function ContentSide() {
  return (
    <div className='p-4 grid gap-2 grid-cols-10'>
      <BoxJoinRoom />
      <BoxAddNew />
    </div>
  )
}
