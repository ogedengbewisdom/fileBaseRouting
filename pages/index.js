import Head from "next/head"
import Link from "next/link"
import { Fragment } from "react"

const HomePage = () => {

    return(<Fragment>
        <Head>
            <title>Welcome</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>The Home Page</h1>
        <ul>
            <li><Link href={`/portfollio`}>Porfollio</Link></li>
            <li><Link href={`/clients`}>Clients</Link></li>
            <li><Link href={`/about`}>About</Link></li>
            <li><Link href={`/blogs/2000`}>Blogs</Link></li>
        </ul>
    </Fragment>)
}

export default HomePage