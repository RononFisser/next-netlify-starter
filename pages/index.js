import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my Website!" />
        <p className="description">
          This is my First website i used: <code>npm run dev</code> to run the website locally.
        </p>
        <div className="guitarImageDiv">
          <img className="guitarImage" src="guitar_07.jpg" alt="Guitar"/>

        </div>
        <div className="card">
          
          <h1>Ronon Fisser</h1>
          <h2>Student</h2>
          <p>Email: email@email.com</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
