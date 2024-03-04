import { DataResponse } from './response.interface'

export interface IProfile {
  id: string
  username: string
  email: string
  avatar: string
  updated_at: string
}

export type IProfileResponse = DataResponse<IProfile>
