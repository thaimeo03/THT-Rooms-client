import { AxiosError, AxiosResponse } from 'axios'

// Message for response success or error
export interface MessageResponse {
  message: string | string[]
}

// Data success response
export interface DataResponse<T> extends MessageResponse {
  data: T
}

// Errors response
interface ErrorsWithMessage extends MessageResponse {
  error: string
  statusCode: number
}

export interface ErrorResponse extends AxiosError {
  response?: AxiosResponse<ErrorsWithMessage>
}

// Pagination
export interface IPagination {
  limit: number
  current_page: number
  total_page: number
}

export interface DataResponseWithPagination<T> extends DataResponse<T> {
  pagination: IPagination
}
