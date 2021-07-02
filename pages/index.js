import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam's World</title>
      </Head>

      <Header/>

      <main>
        <h2>Whats going on bro</h2>
        <div className="form">
          <input name="firstname" placeholder="Firstname" />
          <input name="lastname" placeholder="Lastname" />  
          <button name="submit">Send</button>
        </div>
      </main>
    </div>
  )
}
