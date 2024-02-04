'use client'
import { useEffect, useRef, useState } from 'react'

export default function useMediaStream() {
  const [stateStream, setStateStream] = useState<MediaStream | null>(null)
  const isStreamSet = useRef(false)

  useEffect(() => {
    if (isStreamSet.current) return
    isStreamSet.current = true
    ;(async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
        console.log('setting your stream')
        setStateStream(stream)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return {
    stream: stateStream
  }
}
