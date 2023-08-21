import Head from "next/head"
import Layout from "../layout/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"
import { HiAtSymbol,HiLockClosed, HiOutlineUser, } from 'react-icons/hi'
import { useState } from "react"
import { useFormik } from "formik"


export default function Register() {
const [show,setShow] =useState({password:false, cpassword:false})
const formik = useFormik({
    initialValues: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
    },
    onSubmit
})

async function onSubmit(values){
  console.log(values)
}

    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">

                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
                    <p className="w-3/4 mx-auto text-gray-400">We are happy are connecting with us!</p>
                </div>

                {/**form */}

                <form classname="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <div className={styles.input_group}>
                    <input className={styles.input_text}
                        type="username"
                        name="username"
                        placeholder="Username" 
                        {...formik.getFieldProps('username')}/>
                    <span className='icon flex items-center px-4'
                    >
                        <HiOutlineUser size={25} /></span>

                </div>
                
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
                        type={`${show.password ? "text" : "password"}`}
                        name="password"
                        placeholder="Password"
                        {...formik.getFieldProps('password')} />
                    <span className='icon flex items-center px-4'
                    onClick={() => setShow({...show,password:!show.password})}>
                        <HiLockClosed size={25} /></span>

                </div>
                <div className={styles.input_group}>
                    <input className={styles.input_text}
                        type={`${show.cpassword ? "text" : "password"}`}
                        name="cpassword"
                        placeholder=" Confirm Password" 
                        {...formik.getFieldProps('cpassword')}/>
                    <span className='icon flex items-center px-4'
                    onClick={() => setShow({...show,cpassword:!show.cpassword})}>
                        <HiLockClosed size={25} /></span>

                </div>
                {/**Login Buttons */}
                <div className="input-button" fi >
                    <button type="submit" className={styles.button}>Sign Up</button>
                </div>
                </form>
                {/**Bottom */}
                <p className="text-centertext-gray-400">Have an Account?
                    <Link href={'/login'}><a className="text-blue-700"> Sign In</a></Link></p>

            </section>

        </Layout>

    )
}