import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from './project/nav'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="909410028 Homework Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Homework Page</a><br/>
          這是我的作品頁面，我自主學習了兩款有趣的網頁，<br/>請大家點點看"COVID-19"和"Animation"吧！
        </h1>
        <div className={styles.grid}>
          <a href="./project" className={styles.card}>
            <h2>Project &rarr;</h2><p>7 Cards</p>
          </a>

          <a href="./project/meals" className={styles.card}>
            <h2>Meal Finder &rarr;</h2><p>FindMeals</p>
          </a>
          <a href="https://covid19-website-omega.vercel.app/" className={styles.card}>
            <h2>Meal Finder &rarr;</h2><p>Covid-19</p>
          </a>
          <a href="https://js-portfolio-framer-motion-909410028.vercel.app/" className={styles.card}>
            <h2>Meal Finder &rarr;</h2><p>Animation</p>
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
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
