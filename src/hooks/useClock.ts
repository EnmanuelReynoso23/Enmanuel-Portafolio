import { useState, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export type ClockFormat = '12h' | '24h'
export type DateFormat = 'short' | 'long'

interface ClockData {
  timeString: string
  dateString: string
  clockFormat: ClockFormat
  dateFormat: DateFormat
  setClockFormat: (f: ClockFormat) => void
  setDateFormat: (f: DateFormat) => void
}

export function useClock(): ClockData {
  const [now, setNow] = useState(new Date())
  const [clockFormat, setClockFormat] = useLocalStorage<ClockFormat>('wii-clock-format', '12h')
  const [dateFormat, setDateFormat] = useLocalStorage<DateFormat>('wii-date-format', 'long')

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  let timeString: string
  const hours24 = now.getHours()
  const minutes = now.getMinutes().toString().padStart(2, '0')

  if (clockFormat === '24h') {
    timeString = `${hours24.toString().padStart(2, '0')}:${minutes}`
  } else {
    const hours12 = hours24 % 12 || 12
    const ampm = hours24 >= 12 ? 'PM' : 'AM'
    timeString = `${hours12}:${minutes} ${ampm}`
  }

  let dateString: string
  if (dateFormat === 'long') {
    // "jue 20/2/2026"
    const weekday = now.toLocaleDateString('es-ES', { weekday: 'short' })
    const day = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    dateString = `${weekday} ${day}/${month}/${year}`
  } else {
    // "20/2"
    const day = now.getDate()
    const month = now.getMonth() + 1
    dateString = `${day}/${month}`
  }

  return { timeString, dateString, clockFormat, dateFormat, setClockFormat, setDateFormat }
}
