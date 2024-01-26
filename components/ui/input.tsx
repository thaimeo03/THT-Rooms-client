import * as React from 'react'

import { cn } from '@/lib/utils'
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<any>
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, register, errors, ...props }, ref) => {
  return (
    <div className='relative w-full'>
      <input
        type={type}
        className={cn(
          'flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
        {...register}
      />
      <span>
        {errors && (
          <span className='absolute bottom-0 left-0 translate-y-full text-xs text-red-600 w-full first-letter:uppercase'>
            {errors.message as string}
          </span>
        )}
      </span>
    </div>
  )
})
Input.displayName = 'Input'

export { Input }
