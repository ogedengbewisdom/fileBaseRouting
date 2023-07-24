import { useRouter } from "next/router";
const PageNotFound = () => {
    const router = useRouter();
    const returnHandler = () => {
        router.push({
            pathname: `/`
        })
    }

    return(
        <div>
            <h1>Page Not Found Please try Again</h1>
            <button onClick={returnHandler}>Go Home</button>
        </div>
    )
}

export default PageNotFound;