import { useRouter } from "next/router"
import { Fragment } from "react"


const ProjectDetailPage = () => {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)

    let login = "Login"
    if (router.query.projectId === "signup")
    login = "signup"
    return(
        <Fragment>
           <h1>The {router.query.projectId} Page</h1>
           <h2>{login}</h2>
        </Fragment>
    )
}

export default ProjectDetailPage