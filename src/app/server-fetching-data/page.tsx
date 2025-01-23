import { Seat } from '@/app/api/seats/route'
export default async function ServerFetchingData() {
  const res = await fetch('https://seat.tpml.edu.tw/sm/service/getAllArea')
  const data = await res.json()
  return (
    <div>
      <h1>Server Fetching Data</h1>
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
