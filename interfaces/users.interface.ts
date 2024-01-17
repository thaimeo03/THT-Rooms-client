import { Roles } from '@/common/enums/roles.enum'
import { DataResponse } from './response.interface'

export interface IProfile {
  id: string
  username: string
  avatar: string
  updated_at: string
  role: Roles
}

export type IProfileResponse = DataResponse<IProfile>
