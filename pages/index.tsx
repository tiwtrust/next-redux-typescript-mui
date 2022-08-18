import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { Grid } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid spacing={2} container justifyContent={'center'} alignItems={'center'} direction={'column'} >
        <h2 className={styles.title}>
          Hello World!👋🏻
        </h2>
      </Grid>
      {/* <footer className={styles.footer}>
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
      </footer> */}
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Grid item xs={6}>
        <Sidebar />
      </Grid>
      <Grid item xs={6}>
        {page}
      </Grid>
    </Layout>
  )
}

export default Home