import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>部署到 Vercel 的 Next.js 專案</h1>
      <Link href='/client-fetching-data'>
        <h1>client-fetching-data</h1>
      </Link>
      <Link href='/server-fetching-data'>
        <h1>server-fetching-data</h1>
      </Link>
    </div>
  )
}
