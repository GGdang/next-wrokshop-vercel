import { NextResponse } from 'next/server'
export type Seat = {
  id: number
  branchName: string
  areaName: string
  floorName: string
  totalCount: number
  freeCount: number
  areaId: number
  updatedAt: Date
}
export async function GET() {
  try {
    // 從台北市開放資料平台獲取資料
    const res = await fetch('https://seat.tpml.edu.tw/sm/service/getAllArea')

    // 回傳成功的資料
    return NextResponse.json(await res.json())
  } catch {
    // 發生錯誤時回傳 500 錯誤
    return NextResponse.json({ error: '獲取資料失敗' }, { status: 500 })
  }
}
