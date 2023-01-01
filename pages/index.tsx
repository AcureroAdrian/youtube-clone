import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from 'components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Youtube Clone xd</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/youtube-icon.png" />
      </Head>
      <Navbar />
    </>
  )
}
