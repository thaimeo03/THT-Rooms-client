import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { StatusCodes } from 'http-status-codes'

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

class Api {
  private instance

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async refreshToken() {
    try {
      await this.instance.get('/auth/refresh-token')
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async sendRequestWithToken<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const response = await this.instance({
        ...config
      })
      return response
    } catch (error) {
      if (error instanceof AxiosError && error.response && error.response.status === StatusCodes.UNAUTHORIZED) {
        await this.refreshToken()
        const response = await this.instance({
          ...config
        })
        return response
      }
      throw error
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.sendRequestWithToken<T>({ method: 'GET', url, ...config })
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.sendRequestWithToken<T>({ method: 'POST', url, data, ...config })
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.sendRequestWithToken<T>({ method: 'PUT', url, data, ...config })
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.sendRequestWithToken<T>({ method: 'PATCH', url, data, ...config })
  }

  async delete<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.sendRequestWithToken<T>({ method: 'DELETE', url, data, ...config })
  }
}

export default new Api()
