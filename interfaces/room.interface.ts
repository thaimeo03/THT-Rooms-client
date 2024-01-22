import { DataResponse } from './response.interface'

export interface IRoom {
  id: string
  name: string
  color: string
  host_user_id: string
  created_at: string
  updated_at: string
}

export type IRoomResponse = DataResponse<IRoom[]>
