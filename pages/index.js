import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './project/nav'
export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>909410028</title>
      <meta name="description" content="909410028 Homework Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <h1>我是祐豪</h1>
      <p>學號 909410028 - 我的作品頁面</p>
    </header>

    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/project">
          <a className={styles.card}>
            <h2>Project &rarr;</h2>
            <p>7 Cards</p>
          </a>
        </Link>
        <Link href="/project/meals">
          <a className={styles.card}>
            <h2>Find Meals &rarr;</h2>
            <p>Explore Meal Plans</p>
          </a>
        </Link>
        <a href="https://covid19-website-omega.vercel.app/" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Self-Project &rarr;</h2>
          <p>Covid-19 Tracker</p>
        </a>
        <a href="https://js-portfolio-framer-motion-909410028.vercel.app/" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>Self-Project &rarr;</h2>
          <p>Animation Portfolio</p>
        </a>
      </div>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>Vercel</span>
      </a>
    </footer>
  </div>
  )
}
