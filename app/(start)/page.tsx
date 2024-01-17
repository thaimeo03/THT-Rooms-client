import { ROUTES } from '@/common/constants/routes.constant'
import Link from 'next/link'

export default function Start() {
  return (
    <div>
      <h1>Start page</h1>
      <Link href={ROUTES.LOGIN}>Login</Link>
    </div>
  )
}
