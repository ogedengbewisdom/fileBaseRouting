import { useRouter } from "next/router"

const BlogPage = () => {

    const router = useRouter();
    console.log(router.query)
    return(
        <h1>This is a blog page</h1>
    )
}

export default BlogPage