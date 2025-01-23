'use client'
import { useState, useEffect } from 'react'
import { Seat } from '@/app/api/seats/route'
export default function ClientFetchingData() {
  const [data, setData] = useState<Seat[]>([])
  const getData = async () => {
    try {
      const res = await fetch('/api/seats')
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Client Fetching Data</h1>
      {data.map((item: Seat) => {
        return (
          <div key={item.areaId}>
            <p>{item.branchName}</p>
            <p>{item.floorName}</p>
            <p>{item.areaName}</p>
            <p>{item.freeCount}</p>
            <p>{item.totalCount}</p>
          </div>
        )
      })}
    </div>
  )
}
