import Head from "next/head"
import Layout from "../layout/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"
import Image from "next/image"
import { HiAtSymbol, HiLockClosed } from 'react-icons/hi'
import { useState } from "react"
import { signIn, signOut } from "next-auth/react"
import { useFormik } from "formik"

export default function Login() {

    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit
    })

    async function onSubmit(values) {
        console.log(values)
    }

    // //Google Handler Function
    async function handleGoogleSignIn() {
        signIn('google', { callbackUrl: 'http://localhost:3000' })
    }
    //Github Login
    async function handleGithubSignIn() {
        signIn('github', { callbackUrl: 'http://localhost:3000' })
    }

    return (
        <Layout>

            <Head>
                <title>Login</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">

                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
                    <p className="w-3/4 mx-auto text-gray-400">Explore more by connecting with us!</p>
                </div>

                {/**form */}

                <form classname="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                
                <div className={styles.input_group}>
                    <input className={styles.input_text}
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...formik.getFieldProps('email')}/>

                    <span className='icon flex items-center px-4'
                    >
                        <HiAtSymbol size={25} /></span>

                </div>

                <div className={styles.input_group}>
                    <input className={styles.input_text}
                        type={`${show ? "text" : "password"}`}
                        name="password"
                        placeholder="Password"
                       {...formik.getFieldProps('password')} />
                    <span className='icon flex items-center px-4'
                        onClick={() => setShow(!show)}>
                        <HiLockClosed size={25} /></span>

                </div>
                {/**Login Buttons */}
                <div className="input-button" fi >
                    <button type="submit" className={styles.button}>Login</button>
                </div>
                </form>
                <div className={styles.button_custom}>
                    <button type="button" onClick={handleGoogleSignIn}>Sign In with Google
                    </button><Image src={'/assets/Google.png'} width={25} height={25}></Image>

                </div>
                <div className={styles.button_custom}>
                    <button type="button" onClick={handleGithubSignIn}>Sign In with Github
                    </button><Image src={'/assets/github.svg'} width={25} height={25}></Image>
                </div>
                {/**Bottom */}
                <p className="text-centertext-gray-400">Don't have an Account yet?
                    <Link href={'/register'}><a className="text-blue-700"> Sign Up</a></Link></p>

            </section>

        </Layout>


    )
}