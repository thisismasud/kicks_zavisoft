'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="p-5 border border-red-500 rounded-xl flex flex-col justify-center items-center mt-10" role="alert">
      <h2 className='font-rubik font-semibold text-2xl uppercase text-center'>Oops! Something went wrong!</h2>
      <p className='text-red-500 font-rubik mb-2'>{error.message}</p>
      <button
        className='bg-dark-gray text-white px-3 py-1 rounded-lg cursor-pointer'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}