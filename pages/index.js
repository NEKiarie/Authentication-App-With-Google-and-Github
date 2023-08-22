import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, getSession, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Home() {


  const { data: session } = useSession()

  function handleGoogleSignOut() {
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleGoogleSignOut }) : Guest()}
    </div>
  )
}

//Guest
function Guest() {
  return (

    <section className="bg-white text-gray-500">
      <div
        className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-blue-500 to-indigo-500  
            bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
          >
            Bitnine Global Inc
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Graph connects the world!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600
               bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-800 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/login"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}




//Authorized user

function User({ session, handleGoogleSignOut }) {
  return (
<header className="text-gray-600 bg-black body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="/assets/Bitnine.png" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-5xl text-white">Bitnine</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 text-white hover:text-yellow-500">PRODUCTS</a>
      <a className="mr-5 text-white hover:text-yellow-500">USECASES</a>
      <a className="mr-5 text-white hover:text-yellow-500">SERVICES</a>
      <a className="mr-5 text-white hover:text-yellow-500">RESOURCES</a>
      <a className="mr-5 text-white hover:text-yellow-500">BLOG</a>
      <a className="mr-5 text-white hover:text-yellow-500">COMPANY</a>
      <a className="mr-5 text-white hover:text-yellow-500">IR</a>
      
    </nav>
    <button onClick={handleGoogleSignOut} className="inline-flex items-center
     bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none  hover:text-gray-200 rounded text-xl mt-4 md:mt-0">Sign out
      <svg fill="none" stroke="currentColor" stroke-linecap="round" 
      stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>




  )
}

export async function serverSideProps({ req }) {
  constsession = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}














