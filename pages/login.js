import Head from "next/head"
import Layout from "../layout/layout"
import Link from "next/link"
import styles from "../styles/Form.module.css"

export default function Login() {
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

                {/* <form classname="flex flex-col gap-5"> */}
                    <div className={styles.input_group}>
                        <input className={styles.input_text}
                            type="email"
                            name="email"
                            placeholder="Email" />

                    </div>
                {/* </form> */}
                <div className={styles.input_group}>
                    <input className={styles.input_text}
                        type="password"
                        name="password"
                        placeholder="Password" />

                </div>
                {/**Login Buttons */}
                <div className="input-button" >
                    <button type="submit" className={styles.button}>Login</button>
                </div>
                <div className={styles.button_custom}>
                    <button type="button">Sign In with Google</button>

                </div>
                <div className={styles.button_custom}>
                    <button type="button">Sign In with Github</button>
                </div>
                {/**Bottom */}
                <p className="text-centertext-gray-400">Don't have an Account yet?
                    <Link href={'/register'}><a className="text-blue-700"> Sign Up</a></Link></p>

            </section>

        </Layout>


    )
}